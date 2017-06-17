var express =require('express');
var myapp =express();


myapp.use(express.static(__dirname+'./../client'))


console.log('>>>>>>>>>>>>' , __dirname + './../client');

myapp.get('/',function(req,res){

	res.render('index.html');
});

myapp.get('/login',function(req,res){

console.log(">>>>>> reached ")

if(req.query.name=="heena"&& req.query.pass=="1234"){
	res.json({
name:'heena',
phone:'9873241568',
age:21,
des:'student'
	})
}
else{

	res.send("incorrect details");
}
});

myapp.listen(5000,function(){
	console.log('server is running');
});