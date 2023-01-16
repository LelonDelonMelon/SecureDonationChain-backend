const express = require('express');
const session = require('express-session');
const app = express();
const apiRouter = require('./routes')
const config = require('./config');
const bodyParser = require('body-parser');
const errorController = require('./controller/errorController');
const port = process.env.PORT || 8080;
const cors = require('cors');
//set all config files
config();






app.use(bodyParser.urlencoded({
    extended : true,
    limit: '52428800'
}))
app.use(express.json({limit: '50mb', extended:true}));

// app.use(express.urlencoded({
//     extended : true,
//     limit: '52428800'
// }));

app.use(express.static('public'));
app.use(cors())



app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))
app.use('/api',apiRouter);


app.use((err,res,next) => {
    next()
})




app.use(errorController)




app.listen(process.env.APP_PORT,()=> {
    console.log("Listening at port", process.env.APP_PORT);
});
