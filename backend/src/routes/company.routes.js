import {Router} from 'express'
import { createCompany } from '../controllers/company.controller';



const router = Router();

router.post("/createCompany",createCompany)