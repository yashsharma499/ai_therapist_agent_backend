// import express from "express";
// import { auth } from "../middleware/auth";
// import { logActivity } from "../controllers/activityController";

// const router = express.Router();

// // All routes are protected with authentication
// router.use(auth);

// // Log a new activity
// router.post("/", logActivity);

// export default router;

import express from "express";
import { auth } from "../middleware/auth";
import { logActivity } from "../controllers/activityController";
import { Activity } from "../models/Activity";

const router = express.Router();

// All routes are protected with authentication
router.use(auth);

// Log a new activity
router.post("/", logActivity);

// Get today's activities
router.get("/today", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    // assuming your Activity model has a "date" field stored as YYYY-MM-DD
   const activities = await Activity.find({ date: today, user: req.user.id });

    res.json(activities);
  } catch (err) {
    console.error("Error fetching today's activities:", err);
    res.status(500).json({ error: "Failed to fetch today's activities" });
  }
});

export default router;
