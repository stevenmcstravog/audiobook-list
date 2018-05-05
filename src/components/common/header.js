"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-inverse">
				<div className="container">
					<Link to="app" className="navbar-brand">Audiobook List</Link>					
				</div>
			</nav>
		);
	}
});

module.exports = Header;