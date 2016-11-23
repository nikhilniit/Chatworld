var chatworld=angular.module("chatworld",['ngRoute']);
chatworld.config(function($routeProvider){
	$routeProvider/*
					 * .when('/', { templateUrl:'index.html',
					 * controller:'homeController' })
					 */
	.when("/register",
			{
		templateUrl:"partials/register.html",
		controller:"registerController"
	
			})
			.when("/login",
					
			{
				
		templateUrl:"partials/login.html",
		controller:"loginController"
			
			})
			.when("/userHome",
					
			{
				
		templateUrl:"partials/userHome.html",
		
			
			})
			.when("/admin",
					
			{
				
		templateUrl:"partials/admin.html",
		
			
			})
	.when("/addB",
			{
		templateUrl:"partials/blog.html",
		controller:"addBController"
		
	})
	.when("/blog",
			{
		templateUrl:"partials/blog1.html",
		controller:"adminBlogController"
		
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
	var res=$http.post("http://localhost:8088/Chatworld/registerUser",user);
		res.success(function(data, status, headers, config)
				{
			console.log("status:"+status);
			$scope.name="";
				});
	}
		});
chatworld.controller("addBController",function($scope,$http)
		{
			console.log("in addB controller");
			$scope.addB=function()
			{
				var blog={
						category:$scope.category,
						title:$scope.title,
						description:$scope.description
				};
var res=$http.post("http://localhost:8088/Chatworld/addBlog",blog);
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
				var res=$http.post("http://localhost:8088/Chatworld/addJobs",jobs);
				res.success(function(data, status, headers, config)
						{
					console.log("status:"+status);
						});
			}
				});
				chatworld.controller("loginController",['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope)
						{
					console.log("in login controller");
					$scope.login=function()
					{
						var logi={
							name:$scope.name,
							password:$scope.password
							
					} 
					$http.post("http://localhost:8088/Chatworld/authenticate",logi).then(function(response)
							{
						console.log("result data:"+response.data);
					 var r=response.data.toString();
					 console.log("response:"+r);
				     
						if(r==1)
							{

							
							$rootScope.blog=true;
							
							$rootScope.jobs=true;
							$rootScope.login=false;
							$rootScope.register=false;
							
							$rootScope.logout=true;
							
							console.log('logout:'+$rootScope.logout);
							console.log("logged out:"+response.data);
							$location.path('/userHome');
							}
						if(r==0)
							{
							$scope.name="";
							$scope.password="";
							$scope.message="username/password incorrect";
							$location.path('/login');
							}
						if(r==2)
						{
							$rootScope.login=false;
							$rootScope.register=false;
							
							$rootScope.users=true;
							
							$rootScope.logout=true;
							
						$location.path('/admin');
						}
							}	
				 ); 
							 }
						}]);
						
				chatworld.controller("adminBlogController",function($scope,$http,$rootScope)	
						{	
					$rootScope.login=false;
					$rootScope.register=false;
					
					$rootScope.home=false;
					$rootScope.adminBlog=true;
					$rootScope.users=true;
					$rootScope.registeredUsers=true;
					
					console.log(" in adminblog controller");
					
							 $http.get("http://localhost:8088/Chatworld/viewBlogs")
							    .then(function (response) {
							    	
							    	$scope.blogs = response.data;
							    	
							    	console.log("data:"+response.data);
							    });
						
				$scope.editBlog=function(blog)
				{
					console.log("inside editblog");
					console.log("blog:"+blog);
					$scope.blogedit=blog;
				}
				$scope.saveEdit=function()
				{
					console.log("in saveEdit");
					var edit=
						{
							blog_id:$scope.blogedit.blog_id,
							category:$scope.blogedit.category,
							title:$scope.blogedit.title,
							description:$scope.blogedit.description
						}
					$http.put("http://localhost:8088/Chatworld/updateBlog",edit);
					 $http.get("http://localhost:8088/Chatworld/viewBlogs")
					    .then(function (response) {
					    	
					    	$scope.blogs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
				$scope.deleteBlog=function(blogedit)
				{
					var del=
						{
					blog_id:$scope.blogedit.blog_id
						}
				$http.post("http://localhost:8088/Chatworld/deleteBlog",del);
					 $http.get("http://localhost:8088/Chatworld/viewBlogs")
					    .then(function (response) {
					    	
					    	$scope.blogs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
						});		