import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {config} from 'dotenv'
import userRouter from './routes/user.routes.js'
const app = express()
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

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/user",userRouter)

app.listen(process.env.PORT,()=>{
    console.log(`app running at ${process.env.PORT}`)
})