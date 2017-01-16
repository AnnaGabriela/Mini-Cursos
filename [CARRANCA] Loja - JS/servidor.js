var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var livros = [{
	titulo:'A Menina Que Roubava Livros',
	autor: 'Marcus Zusak',
	ano: 2008}];

app.set ('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
	response.render('inicio', {
		livrosCadastrados: livros
	});
});

app.get('/cadastrar', function(request, response) {
	response.render('novo');
});

app.post('/cadastrar', function(request, response) {
	livros.push(request.body);
	console.log(livros);
	response.redirect('/');
});

app.listen(3000);
