/** @jsx React.DOM */
var React = require('react');

var routes = require('./routes.react');

React.renderComponent(
    <div>
		{routes}
	</div>,
    document.getElementById('app')
);