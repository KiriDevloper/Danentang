import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();

const registerSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
  fullName: z.string().min(1, "Vui lòng nhập họ tên"),
  studentId: z.string().optional(),
  phone: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

function signToken(userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "7d" });
}

router.post("/register", async (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }
  const { email, password, fullName, studentId, phone } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(409).json({ message: "Email đã được sử dụng" });
  }

  const user = await prisma.user.create({
    data: {
      email,
      fullName,
      studentId,
      phone,
      password: await bcrypt.hash(password, 10),
    },
    select: { id: true, email: true, fullName: true, studentId: true, phone: true },
  });

  res.status(201).json({ token: signToken(user.id), user });
});

router.post("/login", async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }
  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
  }

  res.json({
    token: signToken(user.id),
    user: {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      studentId: user.studentId,
      phone: user.phone,
    },
  });
});

router.get("/me", requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, fullName: true, studentId: true, phone: true },
  });
  if (!user) return res.status(404).json({ message: "Không tìm thấy người dùng" });
  res.json(user);
});

export default router;