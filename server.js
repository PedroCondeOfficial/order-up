var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Menu = require('./api/models/menumodel'),
	Queue = require('./api/models/queuemodel'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	jwt = require('jsonwebtoken');

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Orderdb", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/orderroutes');
routes(app);

app.use(express.static(process.cwd()+"/dist/order-up-ui/"));
app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/dist/order-up-ui/index.html")
});
app.get('/menu', (req,res) => {
  res.sendFile(process.cwd()+"/dist/order-up-ui/index.html")
});
app.get('/queue', (req,res) => {
  res.sendFile(process.cwd()+"/dist/order-up-ui/index.html")
});
app.get('/login', (req,res) => {
  res.sendFile(process.cwd()+"/dist/order-up-ui/index.html")
});

app.listen(port);
