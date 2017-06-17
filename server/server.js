var express =require('express');
var myapp =express();


myapp.use(express.static(__dirname+'./../client'))


console.log('>>>>>>>>>>>>' , __dirname + './../client');

myapp.get('/',function(req,res){

	res.render('index.html');
});



myapp.listen(5000,function(){
	console.log('server is running');
});