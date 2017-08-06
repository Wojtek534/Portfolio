var express = require('express');
var chalk = require('chalk');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.use(express.static('src'))

app.listen(4000, function () {
  console.log(chalk.green('App running on port 4000!'))
})