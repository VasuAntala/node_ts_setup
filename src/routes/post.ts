import { Request,Response,Router } from "express";
import { postController } from "../controller";

const postRouter = Router()

postRouter.get('/',postController.getPosts)
postRouter.get('/:id',postController.getPostById)
postRouter.delete('/:id',postController.deletePost)

export {postRouter}