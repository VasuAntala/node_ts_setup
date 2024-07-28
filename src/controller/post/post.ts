import { Request,Response } from "express";

export const getPosts=(req:Request,res:Response)=>{
    res.send({'message':'get posts Api'})
};


export const getPostById=(req:Request,res:Response)=>{
    res.send({'message':'get posts Api',
        'id':req.params.id
    })
};



export const deletePost=(req:Request,res:Response)=>{
    res.send({'message':'post deleted',
        'id':req.params.id
    })
};