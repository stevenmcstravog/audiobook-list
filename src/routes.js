"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/audiobooks/audiobookPage')} />
		<Route name="audiobooks" handler={require('./components/audiobooks/audiobookPage')} />
		<Route name="addAudiobook" path="audiobook" handler={require('./components/audiobooks/manageAudiobookPage')} />
		<Route name="manageAudiobook" path="audiobook/:id" handler={require('./components/audiobooks/manageAudiobookPage')} />
		<NotFoundRoute handler={require('./components/notFoundPage')} />
	</Route>
);

module.exports = routes;