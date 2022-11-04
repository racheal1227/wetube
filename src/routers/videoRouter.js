import express from 'express';
import { deleteVideo, editVideo, video } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/', video);
videoRouter.get('/edit', editVideo);
videoRouter.get('/delete', deleteVideo);

export default videoRouter;
