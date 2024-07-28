import { Response , Request } from "express";


export const signup = (req:Request,res:Response)=>{

    res.send({
        message:"signup done!"
    })
};


export const login= async (req:Request ,res:Response)=>{

        res.send({message:'login success'})
}