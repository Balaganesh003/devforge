import { Router } from "express";
import {createUser,verifyUser,resendVerificationMail} from '../controllers/user.controller.js'
import {verifyJWT} from '../middlewares/jwt.js'

const router = Router()

router.post("/createUser",createUser);
router.post("/verifyUser",verifyJWT,verifyUser);
router.post("/resendVerificationMail",verifyJWT,resendVerificationMail)

export default router