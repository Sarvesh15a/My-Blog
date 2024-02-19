import express from 'express'
import {verifyToken} from '../utills/verifyUser.js'
import { create, getposts } from '../controller/post.controller.js';



const router=express.Router()


router.post('/create',verifyToken,create)
router.get('/getposts',getposts)

export default router;