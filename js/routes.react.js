/** @jsx React.DOM */
var Router        = require('react-router');
var Routes        = Router.Routes;
var Route         = Router.Route;
var Redirect      = Router.Redirect;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./components/App.react');
var TestPage = require('./components/TestPage.react');
var TestPage2 = require('./components/TestPage2.react');
var AsyncPage = require('./components/AsyncPage.react');

module.exports = (
	<Routes>
		<Route path="/" handler={App}>
			<Route name="test" handler={TestPage}>
				<Route name="test-nested" handler={TestPage2} />
			</Route>
			<Route name="async" handler={AsyncPage}/>
		</Route>
		<NotFoundRoute handler={App} />
	</Routes>
);