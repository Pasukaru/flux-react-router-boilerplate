/** @jsx React.DOM */
var React = require('react');

var SidebarActions = require('../actions/SidebarActions');

var TestStore = require('../stores/TestStore');

var TestSidebar = React.createClass({
    displayName: 'TestSidebar',
	getState: function(){
		return {
			random: TestStore.getRandom()
		};
	},
	getInitialState: function(){
		return this.getState();
	},
	componentDidMount: function(){
		TestStore.addChangeListener(this._randomChanged);
	},
	componentWillUnmount: function(){
		TestStore.removeChangeListener(this._randomChanged);
	},
    render: function () {
        return (
            <div className="test-sidebar">
                <div>TestSidebar</div>
                <div>Random: {this.state.random}</div>
                <button onClick={SidebarActions.closeSidebar}>Close Sidebar</button>
            </div>
        );
    },
	_randomChanged: function(){
		this.setState(this.getState());
	}
});

module.exports = TestSidebar;