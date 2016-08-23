var
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config.js')

var app = new (require('express'))(),
		port = 3000

var compiler = webpack(config)

app.use(webpackDevMiddleware(
	compiler,
	{
		noInfo: true,
		publicPath: config.output.publicPath
	}
))

app.use(webpackHotMiddleware(compiler))
app.get('/', function(req, res){
	res.sendFile(__dirname + '/application/index.html')
})
app.get('/stafflist.json', function(req, res){
	res.sendFile(__dirname + '/application/stafflist.json')
})

app.listen(port, function(error){
	if(error) {
		console.log(error);
	} else {
		console.log('Listening on port %s. Open http://localhost:%s/', port, port);
	}
})
