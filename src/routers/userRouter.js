import express from 'express';
import { deleteUser, editUser, user } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/:id', user);
userRouter.get('/:id/edit', editUser);
userRouter.get('/:id/delete', deleteUser);

export default userRouter;
