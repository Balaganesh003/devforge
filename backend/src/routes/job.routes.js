import { Router } from "express";
import {verifyJWT} from "../middlewares/jwt.js"
import { createJob, getAllJobs, getJobById ,applyForJob, getUserProfilesByJobId} from "../controllers/job.controller.js";

const router = Router()

router.post("/createJob", verifyJWT, createJob)
router.get("/getAll",getAllJobs);
router.get("/:id", getJobById)
router.post("/apply",verifyJWT,applyForJob)
router.get("/getUserProfiles/:jobId",verifyJWT,getUserProfilesByJobId)

export default router;