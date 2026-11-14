const express = require("express");
const fs = require("fs");
const https = require("https");

const PORT = 443 || process.env.PORT;

const app = express();

const options = {
  key: fs.readFileSync('./localhost+1-key.pem'),
  cert: fs.readFileSync('./localhost+1.pem')
};

https.createServer(options, app).listen(() => {
  console.log(`Listening to port ${PORT}`);
});
