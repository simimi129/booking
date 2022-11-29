import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

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

app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);

app.use((error, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Error!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(5000, () => {
  connect();
  console.log("Connected to backend.");
});
