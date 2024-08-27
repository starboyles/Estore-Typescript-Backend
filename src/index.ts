import express from 'express';
import { PORT } from './secrets';

const app = express();

app.get('/', (req, res) => {
    res.send('Server running');
});

app.listen(PORT, () => {
    console.log('Server running - port 3000');
});