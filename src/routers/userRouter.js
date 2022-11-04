import express from 'express';
import { deleteUser, editUser, user } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/get', user);
userRouter.get('/edit', editUser);
userRouter.get('/delete', deleteUser);

export default userRouter;
