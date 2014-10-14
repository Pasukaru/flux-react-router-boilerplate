var AppDispatcher = require('../dispatcher/AppDispatcher');
var TestConstants = require('../constants/TestConstants');

module.exports = {
    changeRandom: function(value){
        AppDispatcher.handleViewAction({
            actionType: TestConstants.CHANGE_RANDOM,
            random: value
        });
    }
};