import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from 'dotenv';
import userRouter from './routes/user.routes.js';
import userProfileRouter from './routes/user_profile.routes.js'
import companyRouter from "./routes/company.routes.js"
import companyProfileRouter from "./routes/company_profile.routes.js"
import jobRouter from "./routes/job.routes.js"
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import {createRequire} from 'node:module';
import path from 'path';
import { fileURLToPath } from 'url';
import { isAuthenticatedCompany } from './middlewares/isAuthenticatedCompany.js';
import { verifyJWT } from './middlewares/jwt.js';

const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger-output.json');


const app = express()
app.use(cookieParser())
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
config()


const allowedOrigins = ["http://localhost:5173", "*"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Credentials",
  ],
  optionsSuccessStatus: 200, 
};


app.use(express.json());
app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "../")

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.get("/",(req,res)=>{
  res.send("Test ok");
})
app.use('/exports',verifyJWT, isAuthenticatedCompany, express.static(path.join(rootDir, 'exports')));
app.use("/api/user",userRouter);
app.use("/api/userProfile",userProfileRouter)
app.use("/api/company", companyRouter)
app.use("/api/companyProfile", companyProfileRouter)
app.use("/api/job",jobRouter)

app.listen(process.env.PORT,()=>{
    console.log(`app running at ${process.env.PORT}`)
})