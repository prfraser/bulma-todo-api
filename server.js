const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const tasks = [
      { id: 1, todo: 'Buy BTC', time: '29/11/2017, 13:26:50', complete: true },
      { id: 2, todo: 'Do some coding', time: '29/11/2017, 13:27:50', complete: false }
		]

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
	// Send the tasks array to the user
	res.send(tasks)
});

app.post('/api/tasks', (req, res) => {
	console.log(req.body)
	let task = req.body
	tasks.push(task)
	res.send(task)
})

app.listen(8000, () => console.log('Bulma todo api serevr listening on port 8000!'));