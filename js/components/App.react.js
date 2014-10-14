/** @jsx React.DOM */
var React = require('react/addons');

var Sidebar = require('../components/Sidebar.react');
var Header = require('../components/Header.react');

var App = React.createClass({
    displayName: 'App',
    render: function () {
        var rnd = Math.random();
        return (
            <div>
                <div className="content">
                    <div>App {rnd}</div>
                    <this.props.activeRouteHandler />
                </div>
				<Header />
                <Sidebar />
            </div>
        );
    }
});

module.exports = App;