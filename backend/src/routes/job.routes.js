import { Router } from "express";
import {verifyJWT} from "../middlewares/jwt.js"
import { createJob, getAllJobs, getJobById } from "../controllers/job.controller.js";

const router = Router()

router.post("/createJob", verifyJWT, createJob)
router.get("/getAll",getAllJobs);
router.get("/:id", getJobById)

export default router;