
Luigi.services.ConsoleRestServices = 	
	angular.module('luigi').factory('AddConsoleCheckRestService', ['$resource',
 			function($resource){
 				return $resource('/luigi/api/addConsoleCheck');
 			}]
 	);	
 	
 	
 	