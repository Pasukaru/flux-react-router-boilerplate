/** @jsx React.DOM */
var React = require('react/addons');
var addons = React.addons;

var ReactCSSTransitionGroup = addons.CSSTransitionGroup;
var cx = addons.classSet;

var SidebarStore = require('../stores/SidebarStore');

var Sidebar = React.createClass({
    displayName: 'Sidebar',
	getState: function(){
		var Sidebar = SidebarStore.getSidebar();
		return {
			sidebar: Sidebar ? new Sidebar(SidebarStore.getSidebarProperties) : null,
			classes: cx({sidebar: true})
		};
	},
	getInitialState: function(){
		return this.getState();
	},
    componentDidMount: function() {
		SidebarStore.addChangeListener(this._sidebarChange);
    },
    componentWillUnmount: function () {
		SidebarStore.removeChangeListener(this._sidebarChange);
    },
    render: function () {
        var content;

		if(this.state.sidebar){
			content = <div key="0" className={this.state.classes}>{this.state.sidebar}</div>;
		}

        return (
            <ReactCSSTransitionGroup transitionName="sidebar">
                {content}
            </ReactCSSTransitionGroup>
        );
    },
	_sidebarChange: function(){
		this.setState(this.getState());
	}
});

module.exports = Sidebar;