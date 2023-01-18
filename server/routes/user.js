import express from "express";
import { getUser, login, signup } from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/get-user", auth, getUser);

export default router;
