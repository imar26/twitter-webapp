var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

var cookieParser  = require('cookie-parser');
app.use(cookieParser());

var cors = require('cors');
app.use(cors());

require('./server/app.js')(app);

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

var port = process.env.PORT || 5000;

app.listen(port);