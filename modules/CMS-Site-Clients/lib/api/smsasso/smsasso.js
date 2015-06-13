var path = require('path');


exports.getForm = function(req, res){
 	var form = req.params.form;
	res.setHeader('Content-disposition', 'attachment; filename='+ form);
	res.setHeader("Content-Type", "text/pdf");
	res.send(path);
};
