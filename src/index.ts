import express from 'express';
import * as packageInfo from "./../package.json";
import { router } from './routes';

const app = express();
// app.get("/health",(req,res)=>{
// res.send({message:'App is running.',app:packageInfo.name})
// });

app.use(router)

export { app }