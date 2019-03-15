const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const configDir = require('./config/upload.json');
const port = process.env.PORT || 3000;

const app = express();
require('./models/index.js');
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io').listen(server);


app.use(express.static(path.join(__dirname, './dist')))
    .use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.text())
    .use(bodyParser.json())
    .use('/', require('./routes/index'));

     

    app.use((req, res, next) => {
        res.status(404).json({
          err: '404',
          message: 'Use api on routes /api/v1.0/cats. Documentation: /api-docs',
        });
      });
      
      app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(500).json({ err: '500', message: err.message });
      });    

server.listen(port ,()=>{
    if(!fs.existsSync(configDir.uploadDir)){
        fs.mkdirSync(configDir.uploadDir);
    }
    console.log('Server running on port : 3000 ');
});









/*************** SOCKET **************************/


io.on('connection', socket =>{
    console.log('connection');
});


