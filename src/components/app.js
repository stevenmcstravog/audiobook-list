/*eslint-disable strict */ //Disable check as we need jQuery as a global var

var React = require('react');
var Header = require('./common/header');
var Footer = require('./common/footer');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="container">
					<RouteHandler/>
					<Footer/>
				</div>
			</div>
		);
	}
});

module.exports = App;