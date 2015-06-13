	
Util.controllers.EditContentController = 	angular.module('util').controller('EditContentController', ['$scope','$log', 'EditContentCheckRestService', 
	                   function($scope, $log, EditContentCheckRestService) {                                     
		
		function editHeading(consoleAccordian){
		if(EditContentCheckRestService.editContentCheck()){
			EditContentCheckRestService.setElementEditable(consoleAccordian);
		};
		};
				
	}]);
	 
	//Good to read :- http://andyshora.com/promises-angularjs-explained-as-cartoon.html
	
  
	