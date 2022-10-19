const express = require('express');
const app = express();
const apiRouter = require('./routes')
const config = require('./config');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

//set all config files
config();


app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));
app.use(express.static('public'));

app.get('/form',(req,res) =>{
    res.sendFile(__dirname + 'public/index1.html')
});

app.post('/formPost',(req,res) =>{
    console.log(req.body);
})



app.use(bodyParser.urlencoded({
    extended : true
}))
app.use('/api',apiRouter);

app.listen(process.env.APP_PORT,()=> {
    console.log("Listening at port", process.env.APP_PORT);
});
