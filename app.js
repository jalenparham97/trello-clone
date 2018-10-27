import express from "express";

import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./api/routes/users";
import boardRouter from "./api/routes/boards";
import columnRouter from "./api/routes/columns";
import cardRouter from "./api/routes/cards";

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.options('*',cors());
app.use(cors());

app.use('/api/users',userRouter);
app.use('/api/boards',boardRouter);
app.use('/api/columns',columnRouter);
app.use('/api/cards',cardRouter);

app.use((req,res,next)=>{
   const error = new Error('no route found ');
   error.status=404;
   next(error);
});

app.use((error,req,res,next)=>{
   res
       .status(error.status || 500)
       .json({
           error:{
               message:error.message
           }})
});


export default app;




