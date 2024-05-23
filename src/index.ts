import express from 'express';
import { app, server } from './server';

const port = 7001;

app.get('/test', (req, res) => {
    res.json({ result: 'success' });
});

server.listen(port, () => {
    console.log(`listining on port ${port}`);
});
