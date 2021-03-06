var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
//Parse the contents in the form tag, as body to request  
app.use(bodyParser.urlencoded({extended:true}))

//Teach the server to understand JSON data
app.use(bodyParser.json())

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
	if (req.query['hub.verify_token'] === 'uyviet') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

app.post('/webhook/', function (req, res) {
    console.log("messaging_events")
    console.log(req.body.entry[0].changes);    	
    res.sendStatus(200)    
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


