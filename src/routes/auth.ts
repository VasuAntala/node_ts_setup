import { Request,Response,Router } from "express";
import { authController } from "../controller";


const authRouter = Router()

authRouter.get('/signUp',authController.signup)
authRouter.get('/login',authController.login )


export  {authRouter}