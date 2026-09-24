import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();
router.use(requireAuth);

// Mọi số liệu cho màn hình Home trong một lần gọi
router.get("/summary", async (req, res) => {
  const userId = req.userId!;
  const now = new Date();

  const [user, subjectCount, pendingCount, overdueCount, upcomingTasks, todaySchedules] =
    await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: { fullName: true },
      }),
      prisma.subject.count({ where: { userId } }),
      prisma.task.count({ where: { userId, done: false } }),
      prisma.task.count({ where: { userId, done: false, dueDate: { lt: now } } }),
      prisma.task.findMany({
        where: { userId, done: false },
        include: { subject: { select: { id: true, name: true } } },
        orderBy: { dueDate: "asc" },
        take: 5,
      }),
      prisma.schedule.findMany({
        where: { userId, dayOfWeek: now.getDay() },
        include: { subject: { select: { id: true, name: true, teacher: true } } },
        orderBy: { startTime: "asc" },
      }),
    ]);

  res.json({
    fullName: user?.fullName ?? "",
    subjectCount,
    pendingCount,
    overdueCount,
    upcomingTasks,
    todaySchedules,
  });
});

export default router;