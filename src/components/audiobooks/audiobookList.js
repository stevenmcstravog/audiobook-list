"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AudiobookList = React.createClass({
	propTypes: {
		audiobooks: React.PropTypes.array.isRequired,
		onDelete: React.PropTypes.func.isRequired
	},

	render: function() {
		var createAudiobookRow = function(audiobook) {
			return (
				<tr key={audiobook.id}>
					<td>{audiobook.title}</td>
					<td>{audiobook.author}</td>
					<td>{audiobook.description}</td>
					<td>{audiobook.runtime}</td>
					<td><a href={audiobook.link} target="_blank">Audible Store</a></td>
					<td><Link to="manageAudiobook" className="btn btn-default" params={{id: audiobook.id}}><span className="glyphicon glyphicon-edit" aria-hidden="true"></span></Link></td>
					<td><a className="btn btn-danger" onClick={this.props.onDelete.bind(null, audiobook.id)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
				</tr>
			);
		};

		return (
			<div className="panel panel-default">
				<div className="panel-heading clearfix">
					<h4 className="pull-left">Audiobook List</h4>
					<Link to="addAudiobook" className="btn btn-primary pull-right"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add New Audiobook</Link> 
				</div>
				<div className="panel-body">
					<table className="table table-condensed">
						<thead>
							<th>Title</th>
							<th>Author</th>
							<th>Description</th>
							<th>Runtime</th>
							<th>Audible</th>
							<th></th>
							<th></th>
						</thead>
						<tbody>
							{this.props.audiobooks.map(createAudiobookRow, this)}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
});

module.exports = AudiobookList;