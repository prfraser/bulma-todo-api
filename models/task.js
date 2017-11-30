const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const Task = db.model('Task', { 
	todo: { type: String },
	time: { type: String },
	complete: { type: Boolean }
});

module.exports = Task;