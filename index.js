var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  console.log("request:")
  console.log(request)
  console.log("response:")
  console.log(response)
  response.render('pages/index');
});

app.get('/webhook/', function (req, res) {
	console.log("request")
  console.log(req)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


