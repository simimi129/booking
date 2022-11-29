import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import {
  verifyAdmin,
  verifyToken,
  verifyUser,
} from "../utilities/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("User logged in.");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("User logged in and can delete.");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Admin logged in and can delete.");
});

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;
