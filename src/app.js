const express = require('express');
const app = express();
const apiRouter = require('./routes')
const config = require('./config');

//set all config files
config();


app.use(express.json())
app.use('/api',apiRouter);

app.listen(process.env.APP_PORT);
console.log(`app is running on port ${process.env.APP_PORT}`)