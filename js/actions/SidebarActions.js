var AppDispatcher = require('../dispatcher/AppDispatcher');
var SidebarConstants = require('../constants/SidebarConstants');

module.exports = {
    openSidebar: function(Sidebar, data){
        AppDispatcher.handleViewAction({
            actionType: SidebarConstants.SIDEBAR_SHOW,
            Sidebar: Sidebar,
            sidebarData: data
        });
    },
    closeSidebar: function(){
        AppDispatcher.handleViewAction({
            actionType: SidebarConstants.SIDEBAR_HIDE
        });
    }
};