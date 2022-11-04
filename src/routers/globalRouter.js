import express from 'express';

const globalRouter = express.Router();

const home = (req, res) => {
  return res.send('<h1>Home</h1>');
};

globalRouter.get('/', home);

export default globalRouter;
