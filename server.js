const express = require('express');
const app = express();

const tasks = [
      { id: 1, todo: 'Go for a run', time: '29/11/2017, 13:26:50', complete: true },
      { id: 2, todo: 'Do some coding', time: '29/11/2017, 13:27:50', complete: false }
    ]

app.get('/api/tasks', (req, res) => {
	// Send the tasks array to the user
	res.send(tasks)
});

app.listen(8000, () => console.log('Bulma todo api serevr listening on port 8000!'));