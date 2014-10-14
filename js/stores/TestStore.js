var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TestConstants = require('../constants/TestConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var random = Math.random();

var TestStore = merge(EventEmitter.prototype, {
	getRandom: function(){
		return random;
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
		case TestConstants.CHANGE_RANDOM:
			random = action.random;
			break;
		default:
			return true;
	}

	TestStore.emitChange();

	return true;
});

module.exports = TestStore;