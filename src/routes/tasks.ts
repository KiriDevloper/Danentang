import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();
router.use(requireAuth);

const createSchema = z.object({
  title: z.string().min(1, "Vui lòng nhập tên bài tập"),
  note: z.string().optional(),
  dueDate: z.coerce.date({ message: "Hạn nộp không hợp lệ" }),
  subjectId: z.string().min(1, "Vui lòng chọn môn học"),
});

const updateSchema = z.object({
  title: z.string().min(1).optional(),
  note: z.string().nullable().optional(),
  dueDate: z.coerce.date().optional(),
  done: z.boolean().optional(),
  subjectId: z.string().min(1).optional(),
});

// Kèm tên môn học để app hiển thị luôn
const withSubject = { subject: { select: { id: true, name: true } } };

// Danh sách bài tập, lọc theo ?done=true|false và ?subjectId=...
router.get("/", async (req, res) => {
  const { done, subjectId } = req.query;
  const tasks = await prisma.task.findMany({
    where: {
      userId: req.userId,
      ...(done === "true" ? { done: true } : {}),
      ...(done === "false" ? { done: false } : {}),
      ...(typeof subjectId === "string" ? { subjectId } : {}),
    },
    include: withSubject,
    orderBy: { dueDate: "asc" },
  });
  res.json(tasks);
});

// Bài tập chưa làm, sắp đến hạn (dùng cho màn hình Home)
// Phải đặt TRƯỚC "/:id", nếu không "upcoming" sẽ bị hiểu là một id
router.get("/upcoming", async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.userId, done: false },
    include: withSubject,
    orderBy: { dueDate: "asc" },
    take: 10,
  });
  res.json(tasks);
});

// Tạo bài tập
router.post("/", async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }

  // Môn học phải thuộc về chính người dùng này
  const subject = await prisma.subject.findFirst({
    where: { id: parsed.data.subjectId, userId: req.userId },
  });
  if (!subject) {
    return res.status(404).json({ message: "Không tìm thấy môn học" });
  }

  const task = await prisma.task.create({
    data: { ...parsed.data, userId: req.userId! },
    include: withSubject,
  });
  res.status(201).json(task);
});

// Sửa bài tập (gửi trường nào sửa trường đó, ví dụ chỉ { "done": true })
router.patch("/:id", async (req, res) => {
  const id = String(req.params.id);
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }

  if (parsed.data.subjectId) {
    const subject = await prisma.subject.findFirst({
      where: { id: parsed.data.subjectId, userId: req.userId },
    });
    if (!subject) {
      return res.status(404).json({ message: "Không tìm thấy môn học" });
    }
  }

  const result = await prisma.task.updateMany({
    where: { id, userId: req.userId },
    data: parsed.data,
  });
  if (result.count === 0) {
    return res.status(404).json({ message: "Không tìm thấy bài tập" });
  }

  const updated = await prisma.task.findUnique({ where: { id }, include: withSubject });
  res.json(updated);
});

// Xóa bài tập
router.delete("/:id", async (req, res) => {
  const id = String(req.params.id);
  const result = await prisma.task.deleteMany({
    where: { id, userId: req.userId },
  });
  if (result.count === 0) {
    return res.status(404).json({ message: "Không tìm thấy bài tập" });
  }
  res.status(204).send();
});

export default router;