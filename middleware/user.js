import express from 'express';
import bodyParser from 'body-parser';

//Middleware to parse JSON request
const middleware = express.json();
const app = express();
    app.use(bodyParser.json())
export default middleware;