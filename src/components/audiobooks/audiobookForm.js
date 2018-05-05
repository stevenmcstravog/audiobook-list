"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var TextAreaInput = require('../common/textAreaInput');
var Link = require('react-router').Link;

var AudiobookForm = React.createClass({
	propTypes: {
		audiobook: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

	render: function() {
		return (
			<div className="row">
				<form className="col-md-6">
					<h1>Manage Audiobook</h1>
					<TextInput 
						name="title"
						label="Title"
						value={this.props.audiobook.title} 
						onChange={this.props.onChange} 
						error={this.props.errors.title} />

					<TextInput 
						name="author"
						label="Author"
						value={this.props.audiobook.author} 
						onChange={this.props.onChange} 
						error={this.props.errors.author} />

					<TextAreaInput
						name="description"
						label="Description"
						rows="5"
						value={this.props.audiobook.description} 
						onChange={this.props.onChange} 
						error={this.props.errors.description} />

					<TextInput
						name="runtime"
						label="Runtime"
						value={this.props.audiobook.runtime} 
						onChange={this.props.onChange} 
						error={this.props.errors.runtime} />

					<TextInput
						name="link"
						label="Audible Store Link"
						value={this.props.audiobook.link} 
						onChange={this.props.onChange} 
						error={this.props.errors.link} />

					<div className="btn-toolbar">
						<input type="submit" value="Save" className="btn btn-success pull-right" onClick={this.props.onSave} />
						<Link to="audiobooks" type="button" className="btn btn-default pull-right">Close</Link>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = AudiobookForm;