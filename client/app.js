var myapp=angular.module("myapp",[]);

 myapp.controller('ctrl1',function($scope){
	$scope.login=function(){
console.log(">>>controller init");
}
});