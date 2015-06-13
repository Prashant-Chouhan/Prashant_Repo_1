	
	angular.module('luigi').controller('ConsoleController', ['$scope', 'AddConsoleCheckRestService','$log',
                                        'EditContentCheckRestService', function($scope,AddConsoleCheckRestService,$log,EditContentCheckRestService) {                                     
		$scope.consoleAccordions =[
		 				          {
		 				        	  
		 				        	  title: "Heading Please... ", 
		 				        	  content: "Jobs...",
		 				        	  contentEditable: false
		 				          },                  	
		 				          {
		 				        	  title: "<div>Heading Please... </div> ", 
		 				        	  content: "Jobs...",
		 				        	  contentEditable: false
		 				          }                    	
		 				  ];
		
		$scope.addConsole = function()
		{
        
			AddConsoleCheckRestService.get({}).$promise.catch(function(response){
				 $log.info("arg1"+response.status);
	    	   }).
	    	   then(function(onFulfilled, onRejected, progressBack) {
	    		   $log.info(onFulfilled);
	    		   $log.info(onRejected);
	    		   $log.info(progressBack);
	    		   $scope.consoleAccordions.push(
	    				   {
	    					   title: "Heading Please...", 
				        	   content: "Jobs...",
	 				           contentEditable: false
				           }
	    				  );
		  	   });
			
			
			
		};
		
		$scope.editHeading = function(consoleAccordion){
			$log.info(consoleAccordion+"$scope.consoleAccordions.consoleAccordian");
			$log.info(EditContentCheckRestService.editContentCheck(consoleAccordion)+"EditContentCheckRestService.editContentCheck()");
		};
		
		$scope.undoElementEditibility = function(consoleAccordion){
			EditContentCheckRestService.undoElementEditibility(consoleAccordion);
		}
		function checkConsoleFeasibilityToAdd(){
			
    	   
		};
		
	}]);
	 
	//Good to read :- http://andyshora.com/promises-angularjs-explained-as-cartoon.html
	
  
	