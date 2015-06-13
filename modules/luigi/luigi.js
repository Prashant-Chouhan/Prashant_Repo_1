var path = require('path');
var gateway = require(path.resolve('./lib/api/gateway'));

gateway.get('/luigi', function(req, res, next){
	res.render('luigi/views/pages/eventPlanner', {"title" : "Luigi : Event Planner"});
});

gateway.get('/luigi/api/addConsoleCheck', function(req, res, next){
	res.status(200).send("Please proceed to add console");
});

gateway.get('/luigi/api/editContentCheck', function(req, res, next){
	res.status(200).send("Please proceed to add console");
});
