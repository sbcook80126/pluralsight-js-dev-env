// this file will configure a webserver that will serve up the files
// in our src directory

//var express = require('express'); // we call express (the webserver)
//var path = require('path');
//var open = require('open');  // open our site in the browser

// imports (part of ES6 Modules)
import express from 'express'; // we call express (the webserver)
import path from 'path';
import open from 'open';  // open our site in the browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */   // we want to bypass the no-console rule for eslint in this file

const port = 3000;
const app = express();  // create an instance of express and set it to the variable app
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// now tell express which route it should handle
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


// now tell express to listen on the port we defined above
app.listen(port, function(err){
  if (err){
    console.log(err);
  } else{
    open('http://localhost:' + port);
  }
});
