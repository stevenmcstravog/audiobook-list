"use strict";

var React = require('react');
var Router = require('react-router');
var AudiobookForm = require('./audiobookForm');
var AudiobookApi = require('../../api/audiobookApi');
var toastr = require('toastr');
var validUrl = require('valid-url');

var ManageAudiobookPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component) {
			if(component.state.dirty && !confirm('Leave without saving?')) {
				transition.abort();
			} 
		}
	},

	getInitialState: function() {
		return {
			audiobook: {id: '', title: '', author: '', description: '', runtime: '', link: '' },
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {
		var audiobookId = this.props.params.id; //from path '/audiobook:id'

		if (audiobookId) {
			this.setState({audiobook: AudiobookApi.getAudiobookById(audiobookId)});
		}
	},

	setAudiobookState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.audiobook[field] = value;
		return this.setState({audiobook: this.state.audiobook});
	},

	audiobookFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {}; //clear errors

		if (!this.state.audiobook.title.trim().length) {
			this.state.errors.title = 'Title must not be empty';
			formIsValid = false;
		}

		if (!this.state.audiobook.author.trim().length) {
			this.state.errors.author = 'Author must not be empty';
			formIsValid = false;
		}

		if (!this.state.audiobook.description.trim().length) {
			this.state.errors.description = 'Description must not be empty';
			formIsValid = false;
		} 

		if (!this.state.audiobook.runtime.trim().length) {
			this.state.errors.runtime = 'Runtime must not be empty';
			formIsValid = false;
		}

		if (!validUrl.isUri(this.state.audiobook.link)) {
			this.state.errors.link = 'Audible store link must be a valid URL';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	saveAudiobook: function(event) {
		event.preventDefault();
		if (!this.audiobookFormIsValid()) {
			return;
		}
		AudiobookApi.saveAudiobook(this.state.audiobook);
		this.setState({dirty: false});
		toastr.success('Audiobook saved.');
		this.transitionTo('audiobooks');
	},

	render: function() {
		return (
			<AudiobookForm
				audiobook={this.state.audiobook}
				onChange={this.setAudiobookState} 
				onSave={this.saveAudiobook} 
				errors={this.state.errors}/>
		);
	}
});

module.exports = ManageAudiobookPage;