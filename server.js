const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const router = express.Router();
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/cards', (req, res) => {
     fs.readFile('./src/bd/cards.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
    

});
app.listen(process.env.PORT || 8080);