import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import subjectRoutes from "./routes/subjects.js";
import taskRoutes from "./routes/tasks.js";
import scheduleRoutes from "./routes/schedules.js";
import homeRoutes from "./routes/home.js";
import meRoutes from "./routes/me.js";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/me", meRoutes);
const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API chạy tại http://localhost:${PORT}`);
});