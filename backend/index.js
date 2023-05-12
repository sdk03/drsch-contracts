// IMPORTS
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http');
const https = require('https');
const fs = require('fs');

 

// var options = {
//     key: fs.readFileSync('../../private.key'),
//     cert: fs.readFileSync('../../certificateMerged.crt')
//   };
  
// IMPORT ALL OTHER JS FILES
const db = require('./db');
const dcController = require('./dc.controller')

// CREATE NEW INSTANCE
const app = express();

// const serverSecure = https.createServer(options,app);
const server = http.createServer(app);


app.use(cors({
    origin: '*'
}));

app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));


app.get('/', (req,res) => {

  res.send("Welcome to DC API :))")

})

// GET ALL CONTRACT DATA FROM DB
app.post('/dc-data',dcController.getAllData);

// GET ALL CONTRACT REMARKS FROM DB
app.post('/dc-remarks',dcController.getAllRemarks);

// SERVER -------------------------------

const PORT = process.env.PORT || 8080;

//LISTEN ON PORT
server.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} PORT`);
});


// serverSecure.listen(PORT, ()=>{
//     console.log(`Server running SECURELY on ${PORT} PORT`);
// });