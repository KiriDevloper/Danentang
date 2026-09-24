import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();
router.use(requireAuth);

const select = { id: true, email: true, fullName: true, studentId: true, phone: true };

const updateSchema = z.object({
  fullName: z.string().min(1, "Họ tên không được để trống").optional(),
  studentId: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
});

router.get("/", async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.userId }, select });
  if (!user) return res.status(404).json({ message: "Không tìm thấy người dùng" });
  res.json(user);
});

router.put("/", async (req, res) => {
  const parsed = updateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.issues[0].message });
  }
  const user = await prisma.user.update({
    where: { id: req.userId },
    data: parsed.data,
    select,
  });
  res.json(user);
});

export default router;