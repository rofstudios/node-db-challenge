let express = require('express');

// let knex = require('../../data/connections');
let projects = require('./project-model');
let taskRoutes = require('../tasks/taskRoutes'); // calls in the external functions
// that connect to db

let router = express.Router();


router.use('/:id/tasks', taskRoutes);

router.get('/', (req, res) => {
    projects.findAllProjects()// takes care of GET: /api/projects call
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "no data found" })
    })
})

router.post('/', (req, res) => {
    newProject = req.body;
    if(!newProject.name) {
        res.status(400).json({ errorMessage: "Please provide a name for project"})
    } else {
        projects.create(newProject)
        // .then(newProject => {
        //     // res.status(201).json(projects.findProjectById(projectId));
        //     res.status(201).json(newProject);
        // })
        .then(returnedID => {
            res.status(201).json(returnedID);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not create new project" });
        })
    }
})


module.exports = router;
