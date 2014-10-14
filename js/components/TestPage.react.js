/** @jsx React.DOM */
var React = require('react');

var TestActions = require('../actions/TestActions');
var SidebarActions = require('../actions/SidebarActions');
var TestSidebar = require('../components/TestSidebar.react');

var TestPage = React.createClass({
    displayName: 'TestPage',
	componentWillUnmount: function(){
		SidebarActions.closeSidebar();
	},
    render: function () {
        return (
            <div>
                <div>TestPage</div>
                <button onClick={this.openSidebar}>Open Sidebar</button>
                <button onClick={this.randomData}>Random Data</button>
				<this.props.activeRouteHandler />
            </div>
        );
    },
    openSidebar: function(){
        SidebarActions.openSidebar(TestSidebar, {message: 'Hello World Sidebar'});
    },
    randomData: function(){
		TestActions.changeRandom(Math.random());
    }
});

module.exports = TestPage;