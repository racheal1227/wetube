import express from 'express';

const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('<div>Home Page</div>'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
