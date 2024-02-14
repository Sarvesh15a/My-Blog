import express  from "express";
import { test, updateUser } from "../controller/user.controller.js";
import {verifyToken} from '../utills/verifyUser.js'

const router=new express.Router()

router.get("/test",test);
router.put('/update/:userId',verifyToken,updateUser)

export default router;