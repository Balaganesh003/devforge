import {Router} from 'express'
import {verifyJWT} from '../middlewares/jwt.js'
import { createUserProfile, getUserProfile } from '../controllers/user_profile.controller.js'
const router = Router()

router.post("/createProfile",verifyJWT,createUserProfile);
router.get("/getProfile",verifyJWT,getUserProfile);


export default router;
