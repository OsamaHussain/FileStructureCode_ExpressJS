
const express = require('express');
const router =require('./routes/routes');
const cros =require('cors');
const conDb=require('./db/db');

const app = express();

const port = process.env.PORT ||3000; 

app.use(express.json());


app.use("/",router);
app.use(cros());
require('dotenv').config({path:'./config.env'});
conDb();
app.listen(port, () => 
console.log(`server running on localhost:${port}`));
