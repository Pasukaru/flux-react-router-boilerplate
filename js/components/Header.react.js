/** @jsx React.DOM */
var React = require('react/addons');
var addons = React.addons;
var cx = addons.classSet;

var Link = require('react-router').Link;

var DIVIDER_KEY = 'divider';

var Header = React.createClass({
    displayName: 'Header',
    getInitialState: function(){
        return {
            title: 'Header',
            classes: {header: true},
            links: [
                {label: 'Index', to: '/'},
                {label: 'Test', to: 'test'},
                {label: 'Test Nested', to: 'test-nested'},
                {label: 'Async', to: 'async'}
            ]
        }
    },
    render: function () {
        var title = this.state.title+' '+Math.random().toString().substring(0, 10);
        var classes = cx(this.state.classes);
        var items = [];

        items.push(<span key="title">{title}</span>);

        this.state.links.forEach(function(link){
            items.push(<span key={link.to+DIVIDER_KEY}>&nbsp;|&nbsp;</span>);
            items.push(<Link to={link.to} key={link.to}>{link.label}</Link>);
        }, this);

        return (
            <div className={classes}>
                {items}
            </div>
        );
    }
});

module.exports = Header;