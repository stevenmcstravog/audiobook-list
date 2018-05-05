"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AudiobookApi = require('../../api/audiobookApi');
var AudiobookList = require('./audiobookList');
var toastr = require('toastr');

var AudiobookPage = React.createClass({
	getInitialState: function() {
		return {
			audiobooks: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ audiobooks: AudiobookApi.getAllAudiobooks() });
		}
	},

	deleteAudiobook: function(id, event) {
		event.preventDefault();

		var newState = this.state.audiobooks.filter(function(audiobook) {
			return audiobook.id !== id;
		});

		this.setState({audiobooks: newState});

		AudiobookApi.deleteAudiobook(id);
		toastr.success('Audiobook deleted.');
	},



	render: function() {
		return (
			<div>
				<div className="jumbotron">
					<h1>Audiobook List</h1>
					<p>A simple single page application that allows you to pull audiobook data from a mock API, add/edit/delete an audiobook and simple form validation.</p>
					<hr />
					<p>Technologies used: React, React Router, Node.js, gulp.js, Browserify, Bootstrap, valid-url and toastr.</p>
				</div>
				<AudiobookList 
					audiobooks={this.state.audiobooks}
					onDelete={this.deleteAudiobook}/>
			</div>
		);
	}
});

module.exports = AudiobookPage;