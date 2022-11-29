import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb.");
  } catch (error) {
    throw error;
  }
}

app.listen(5000, () => {
  connect();
  console.log("Connected to backend.");
});
