import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;
const app = express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
