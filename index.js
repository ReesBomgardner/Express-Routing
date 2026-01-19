import express from 'express';
import { hello, apiNames } from './routes.js';

const server = express();
const port = 3000;

server.get('/hello', hello);
server.get('/api/names', apiNames);

server.listen(port, () => {
    console.log('Listening on ' + port);
});