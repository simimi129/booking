import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    numbers: [{ number: Number, unavailable: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
