import { Router } from "express";
import {createUser,verifyUser,resendVerificationMail, login , logout} from '../controllers/user.controller.js'
import {verifyJWT} from '../middlewares/jwt.js'

const router = Router()

router.post("/createUser",createUser);
router.post("/login",login)
router.post("/verifyUser",verifyJWT,verifyUser);
router.post("/resendVerificationMail",verifyJWT,resendVerificationMail);
router.post("/logout",verifyJWT,logout);


export default router