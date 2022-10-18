const express = require('express');
const app = express();
const apiRouter = require('./routes')
const config = require('./config');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

//set all config files
config();


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/form',(req,res) =>{
    res.sendFile(__dirname + 'public/index1.html')
});

app.post('/formPost',(req,res) =>{
    console.log(req.body);
})



//app.use(express.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use('/api',apiRouter);

app.listen(port,() =>{
    console.log('Server Started at http://localhost:8080')
});