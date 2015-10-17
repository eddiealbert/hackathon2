'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: 'A product name is required'
	},
	description: {
		type: String,
		required: 'A description is required'
	},
	fileType: {
		type: String,
		required: 'A file type is required'
	},
	fileName: {
		type: String,
		required: 'A file name is required'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Product', ProductSchema);