import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin } from "../utilities/verify.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id", verifyAdmin, deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

export default router;
