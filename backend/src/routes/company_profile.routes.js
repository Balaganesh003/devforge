import { Router } from "express";
import { verifyJWT } from "../middlewares/jwt.js";
import { createCompanyProfile, getCompanyProfile } from "../controllers/company_profile.controller.js";

const router = Router()


router.post("/createProfile",verifyJWT, createCompanyProfile)
router.get("/getProfile",verifyJWT,getCompanyProfile)

export default router;