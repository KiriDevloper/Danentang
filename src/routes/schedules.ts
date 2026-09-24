import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();
router.use(requireAuth);

const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/; // dạng "07:30"

const createSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6, "Thứ phải từ 0 (Chủ nhật) đến 6 (Thứ bảy)"),
  startTime: z.string().regex(timeRegex, "Giờ bắt đầu phải dạng HH:mm"),
  endTime: z.string().regex(timeRegex, "Giờ kết thúc phải dạng HH:mm"),
  room: z.string().optional(),
  subjectId: z.string().min(1, "Vui lòng chọn môn học"),
});

const updateSchema = createSchema.partial();

const withSubject = { subject: { select: { id: true, name: true, teacher: true } } };

// Danh sách lịch học, lọc theo ?day=0..6
router.get("/", async (req, res) => {
  const day = req.query.day !== undefined ? Number(req.query.day) : undefined;
  if (day !== undefined && (!Number.isInteger(day) || day < 0 || day > 6)) {
    return res.status(400).json({ message: "Tham số day phải từ 0 đến 6" });
  }
  const schedules = await prisma.schedule.findMany({
    where: { userId: req.userId, ...(day !== undefined ? { dayOfWeek: day } : {}) },
    include: withSubject,
    orderBy: [{ dayOfWeek: "asc" }, { startTime: "asc" }],
  });
  res.json(schedules);
});

// Lịch học hôm nay (dùng cho màn hình Home). Đặt trước "/:id"
router.get("/today", async (req, res) => {
  const schedules = await prisma.schedule.findMany({
    where: { userId: req.userId, dayOfWeek: new Date().getDay() },
    include: withSubject,
    orderBy: { startTime: "asc" },
  });
  res.json(schedules);
});

// Tạo lịch học
router.post("/", async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }
  if (parsed.data.startTime >= parsed.data.endTime) {
    return res.status(400).json({ message: "Giờ kết thúc phải sau giờ bắt đầu" });
  }

  const subject = await prisma.subject.findFirst({
    where: { id: parsed.data.subjectId, userId: req.userId },
  });
  if (!subject) {
    return res.status(404).json({ message: "Không tìm thấy môn học" });
  }

  const schedule = await prisma.schedule.create({
    data: { ...parsed.data, userId: req.userId! },
    include: withSubject,
  });
  res.status(201).json(schedule);
});

// Sửa lịch học (gửi trường nào sửa trường đó)
router.patch("/:id", async (req, res) => {
  const id = String(req.params.id);
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }

  const current = await prisma.schedule.findFirst({ where: { id, userId: req.userId } });
  if (!current) {
    return res.status(404).json({ message: "Không tìm thấy lịch học" });
  }

  const start = parsed.data.startTime ?? current.startTime;
  const end = parsed.data.endTime ?? current.endTime;
  if (start >= end) {
    return res.status(400).json({ message: "Giờ kết thúc phải sau giờ bắt đầu" });
  }

  if (parsed.data.subjectId) {
    const subject = await prisma.subject.findFirst({
      where: { id: parsed.data.subjectId, userId: req.userId },
    });
    if (!subject) {
      return res.status(404).json({ message: "Không tìm thấy môn học" });
    }
  }

  const updated = await prisma.schedule.update({
    where: { id },
    data: parsed.data,
    include: withSubject,
  });
  res.json(updated);
});

// Xóa lịch học
router.delete("/:id", async (req, res) => {
  const id = String(req.params.id);
  const result = await prisma.schedule.deleteMany({
    where: { id, userId: req.userId },
  });
  if (result.count === 0) {
    return res.status(404).json({ message: "Không tìm thấy lịch học" });
  }
  res.status(204).send();
});

export default router;