app=angular.module("app",[]);

app.controller("myCntrl",function($scope,$http){
	$scope.message="";
	var pattern=/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
	$scope.track=function(){
		var url=$scope.website;
		var valid=pattern.test(url);
		if (valid){
		$scope.message="";
		var webaddress="http://ip-api.com/json/"+url;
		console.log(webaddress);
		$http.get(webaddress).success(function(data){
		var latitude=data.lat;
		var longitude=data.lon;
		current=false;
		showPosition(latitude,longitude,url);
		
		})
		} else{
		$scope.message="error, please give a valid url";
		}
	}
	
})