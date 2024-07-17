import {Router} from 'express'
import { createCompany, login } from '../controllers/company.controller.js';



const router = Router();

router.post("/createCompany",createCompany)
router.post("/login", login)


export default router