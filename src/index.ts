import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server running');
});

app.listen(3000, () => {
    console.log('Server running - port 3000');
});