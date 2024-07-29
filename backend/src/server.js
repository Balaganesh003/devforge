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
import { verifyJwtByBearer } from './utils/verifyJwtByBearer.js';

const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger-output.json');


const app = express()
app.use(cookieParser())
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));
config()


const allowedOrigins = ["http://localhost:5173", "*" , "http://localhost:3000"];
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
//   allowedHeaders: [
//     "Content-Type",
//     "Authorization",
//     "Access-Control-Allow-Credentials",
//   ],
  optionsSuccessStatus: 200,

};


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://your-client-origin.com'); // Change this to your client's origin
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use(express.json());
app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "../")

console.log(path.join(rootDir, 'exports'))

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

app.get("/",(req,res)=>{
  res.send("Test ok");
})
// app.use('/public', isAuthenticatedCompany, express.static(path.join(rootDir, 'exports')));
// app.use('/public', express.static(path.join(rootDir, 'exports')));
app.get('/api/exports/:jobId/:fileName',verifyJWT,isAuthenticatedCompany,(req, res) => {
  const { jobId, fileName } = req.params;
  const filePath = path.join(rootDir, 'exports', jobId, fileName);
  console.log(filePath)
  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});
app.use("/api/user",userRouter);
app.use("/api/userProfile",userProfileRouter)
app.use("/api/company", companyRouter)
app.use("/api/companyProfile", companyProfileRouter)
app.use("/api/job",jobRouter)

app.listen(process.env.PORT,()=>{
    console.log(`app running at ${process.env.PORT}`)
})