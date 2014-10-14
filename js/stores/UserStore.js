var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var user = null;

var UserStore = merge(EventEmitter.prototype, {
	getUser: function(){
		return user;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case UserConstants.GET_USER:
			user = action.user;
			break;
		default:
			return true;
	}

	UserStore.emitChange();

	return true;
});

module.exports = UserStore;