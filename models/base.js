let decorator = function(model, statusCode){
	return {
		status: statusCode,
		results: model
	}
};

exports.decorator = decorator;