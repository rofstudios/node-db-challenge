let express = require('express');

let taskModel = require('./task-model');

let router = express.Router({
    mergeParams: true,
});

router.post('/', (req, res) => {
    let id = req.params.id
    let newTask = req.body;
    
    if(!newTask.description) {
        res.status(400).json({ errorMessage: "Invalid data, include name" })
    } else {
        taskModel.createTask({ newTask, project_id: id})
        .then(newTaskId => {
            res.status(201).json(newTaskId);
        })
        .catch(err => {
            res.status(500).json({ err })
        })
    }
})

router.get('/', (req, res) => {
    id = req.params.id;
    taskModel.findById(id)
    .then(request => {
        res.status(200).json(request)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;