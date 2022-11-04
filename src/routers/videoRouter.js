import express from 'express';
import { deleteVideo, editVideo, search, uploadVideo, video } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/search', search);
videoRouter.get('/upload', uploadVideo);
videoRouter.get('/:id', video);
videoRouter.get('/:id/edit', editVideo);
videoRouter.get('/:id/delete', deleteVideo);

export default videoRouter;
