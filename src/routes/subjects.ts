import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();
router.use(requireAuth); // mọi route bên dưới đều cần đăng nhập

const subjectSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên môn học"),
  teacher: z.string().optional(),
  credits: z.number().int().positive().optional(),
});

// Lấy danh sách môn học của user
router.get("/", async (req, res) => {
  const subjects = await prisma.subject.findMany({
    where: { userId: req.userId },
    orderBy: { name: "asc" },
  });
  res.json(subjects);
});

// Tạo môn học
router.post("/", async (req, res) => {
  const parsed = subjectSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }
  const subject = await prisma.subject.create({
    data: { ...parsed.data, userId: req.userId! },
  });
  res.status(201).json(subject);
});

// Xem chi tiết một môn
router.get("/:id", async (req, res) => {
  const subject = await prisma.subject.findFirst({
    where: { id: req.params.id, userId: req.userId },
  });
  if (!subject) return res.status(404).json({ message: "Không tìm thấy môn học" });
  res.json(subject);
});

// Sửa môn học
router.put("/:id", async (req, res) => {
  const parsed = subjectSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }
  const result = await prisma.subject.updateMany({
    where: { id: req.params.id, userId: req.userId },
    data: parsed.data,
  });
  if (result.count === 0) {
    return res.status(404).json({ message: "Không tìm thấy môn học" });
  }
  const updated = await prisma.subject.findUnique({ where: { id: req.params.id } });
  res.json(updated);
});

// Xóa môn học (bài tập và lịch học của môn cũng bị xóa theo)
router.delete("/:id", async (req, res) => {
  const result = await prisma.subject.deleteMany({
    where: { id: req.params.id, userId: req.userId },
  });
  if (result.count === 0) {
    return res.status(404).json({ message: "Không tìm thấy môn học" });
  }
  res.status(204).send();
});

export default router;