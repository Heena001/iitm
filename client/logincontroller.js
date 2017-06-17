myapp.controller('ctrl1',function($scope,$http){
	
$scope.login=function(){


	console.log(">>>>> clcill");



$http({

url:'/login',
method:'GET',
params: {

	name:$scope.session.email,
	pass:$scope.session.password
}

}).then(function(response){

	console.log(">>>>response",response);
})





}

});