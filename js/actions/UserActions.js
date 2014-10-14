var Promise = require('bluebird');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserConstants = require('../constants/UserConstants');

var USER = {id: 1, firstName: 'Pascal', lastName: 'Ludwig'};

function fakeRequest(){
	return Promise
		.delay(1000)
		.thenReturn(USER);
}

module.exports = {
	getUser: function(){
		return fakeRequest()
			.then(function(user){
				AppDispatcher.handleApiAction({
					actionType: UserConstants.GET_USER,
					user: user
				});
			});
	}
};