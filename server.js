var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/node_modules/jqwidgets-framework/jqwidgets/styles/jqx.base.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'node_modules/jqwidgets-framework/jqwidgets/styles', 'jqx.base.css'));
});

app.get('/node_modules/jqwidgets-framework/jqwidgets/styles/images/:imagefile', function (req, res) {
  res.sendFile(path.join(__dirname, 'node_modules/jqwidgets-framework/jqwidgets/styles/images',req.params.imagefile));
});

app.get('/scripts/:scriptfile', function (req, res) {
  res.sendFile(path.join(__dirname, 'node_modules/jqwidgets-framework/scripts',req.params.scriptfile));
});


app.get('/jqwidgets/:jqwidgetsfilename', function (req, res) {
    res.sendFile(path.join(__dirname,'node_modules/jqwidgets-framework/jqwidgets',req.params.jqwidgetsfilename));
});



var port = 3000; // Use 8080 for local development because you might already have apache running on 80
app.listen(3000, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
