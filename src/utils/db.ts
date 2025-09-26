import mongoose from "mongoose";
import { logger } from "./logger";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://yyashkumar8_db_user:3EH5KrfRqGpAAtlA@ai-therapist-agent.dgrjpcy.mongodb.net/test?retryWrites=true&w=majority&appName=ai-therapist-agent";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};