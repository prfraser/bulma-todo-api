const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Task = require('./models/task');

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
	// Send the tasks array to the user
	Task.find().then((result) => {
		console.log(result)
		res.send(result)
	})
});

app.post('/api/tasks', (req, res) => {
	console.log(req.body)
	let task = new Task ({ todo: req.body.todo, time: new Date(), complete: req.body.complete })
	task.save((err, task) => {
	  if (err) {
	    console.log(err);
	  } else {
	    console.log('Task created');
	  }
	  res.send(task);
	})
})

app.listen(8000, () => console.log('Bulma todo api serevr listening on port 8000!'));