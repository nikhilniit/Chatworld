var chatworld=angular.module("chatworld",['ngRoute']);
chatworld.config(function($routeProvider){
	$routeProvider/*.when('/',
	{
		templateUrl:'index.html',
		controller:'homeController'
	})*/
	.when("/register",
			{
		templateUrl:"partials/register.html",
		controller:"registerController"
	
			})
	.when("/addB",
			{
		templateUrl:"partials/blog.html",
		controller:"addBController"
		
	})
	.when("/addJ",
	{
		templateUrl:"partials/jobs.html",
		controller:"addJController"
	});
});
chatworld.controller("registerController",function($scope,$http)
		{
	console.log("iam in register controller")
	$scope.register=function()
	{
		var user={
		name:$scope.name,
		password:$scope.password,
		mobile:$scope.mobile
			};
	var res=$http.post("http://localhost:8080/Chatworld/registerUser",user);
		res.success(function(data, status, headers, config)
				{
			console.log("status:"+status);
				});
	}
		});
		chatworld.controller("addBController",function($scope,$http)
		{
			console.log("in addB controller");
			$scope.addB=function()
			{
				var blog={
						name:$scope.name,
						title:$scope.title,
						description:$scope.description
				};
var res=$http.post("http://localhost:8080/Chatworld/addBlog",blog);
				res.success(function(data, status, headers, config)
						{
					console.log("status:"+status);
						});
				}
			
		
		
		});
		chatworld.controller("addJController",function($scope,$http)
				{
			console.log("in addJ controller");
			$scope.addJ=function()
			{
				var jobs={
						job_name:$scope.job_name,
						job_role:$scope.job_role,
						job_requirements:$scope.job_requirements,
						job_description:$scope.job_description
				};
				var res=$http.post("http://localhost:8080/Chatworld/addJobs",jobs);
				res.success(function(data, status, headers, config)
						{
					console.log("status:"+status);
						});
			}
				});
		