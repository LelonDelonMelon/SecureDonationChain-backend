const express = require('express');
const app = express();
const apiRouter = require('./routes')
const config = require('./config');
const bodyParser = require('body-parser');

//set all config files
config();


//app.use(express.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use('/api',apiRouter);

app.listen(process.env.APP_PORT);
console.log(`app is running on port ${process.env.APP_PORT}`)