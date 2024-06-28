import { Router } from "express";
import {createUser,verifyUser} from '../controllers/user.controller.js'

const router = Router()

router.post("/createUser",createUser);
router.post("/verifyUser",verifyUser);

export default router