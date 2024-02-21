import express  from "express";
import { signout, test, updateUser,deleteUser, getUsers, getUser } from "../controller/user.controller.js";
import {verifyToken} from '../utills/verifyUser.js'


const router=new express.Router()

router.get("/test",test);
router.put('/update/:userId',verifyToken,updateUser)
router.delete('/delete/:userId',verifyToken,deleteUser)
router.post('/signout',signout)
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router;