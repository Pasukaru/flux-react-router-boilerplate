var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SidebarConstants = require('../constants/SidebarConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var Sidebar = null;
var sidebarProperties = null;

var SidebarStore = merge(EventEmitter.prototype, {
	getSidebar: function(){
		return Sidebar;
	},
	getSidebarProperties: function(){
		return sidebarProperties;
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
		case SidebarConstants.SIDEBAR_SHOW:
			Sidebar = action.Sidebar;
			sidebarProperties = action.sidebarData;
			break;
		case SidebarConstants.SIDEBAR_HIDE:
			Sidebar = null;
			sidebarProperties = null;
			break;
		default:
			return true;
	}

	SidebarStore.emit(CHANGE_EVENT);

	return true;
});

module.exports = SidebarStore;
