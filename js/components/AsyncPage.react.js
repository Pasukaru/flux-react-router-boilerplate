/** @jsx React.DOM */
var React = require('react');

var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/UserStore');

var AsyncPage = React.createClass({
    displayName: 'TestPage',
	getState: function(){
		return {
			user: UserStore.getUser()
		};
	},
	getInitialState: function(){
		return this.getState();
	},
	componentDidMount: function(){
		UserStore.addChangeListener(this._userChanged);
	},
	componentWillUnmount: function(){
		UserStore.removeChangeListener(this._userChanged);
	},
    render: function () {
		var content;
		if(this.state.user){
			var first = this.state.user.firstName;
			var last = this.state.user.lastName;
			content = (
				<div>
					<label>User:&nbsp;</label>{first}&nbsp;{last}
				</div>
			);
		} else {
			content = (
				<button onClick={UserActions.getUser}>Get User</button>
			);
		}
        return (
            <div>
                <div>AsyncPage</div>
				{content}
            </div>
        );
    },
    _userChanged: function(){
		this.setState(this.getState());
    }
});

module.exports = AsyncPage;