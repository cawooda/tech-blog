require('dotenv').config();

const port = 3000;

//helpers and utils
const helpers = require('./utils/helpers')
const path = require('path');

//express
const express = require('express');
const app = express()

//view engine
const expressHandlebarsEngine = require('express-handlebars');
const handlebars = expressHandlebarsEngine.create({helpers});



//aplies a "setting" defining the view engine as handlebars
app.engine('handlebars', handlebars.engine);
 //This sets the view engine whhich the app will use when it calls render()
app.set('view engine', 'handlebars');


//routes
const router = require('./controller');


//app.use(express.json);
// app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(router);
app.get('/',(req,res)=>{
  console.log("server");
  res.status(200).send("server OK");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}. http://localhost:${port}`)
})