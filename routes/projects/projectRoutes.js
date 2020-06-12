let express = require('express');

let knex = require('../../data/connections');
let taskRoutes = require('../tasks/taskRoutes');

let router = express.Router();

router.use('/:id/tasks', taskRoutes);

router.get('/', (req, res) => {
    res.status(200).json({ message: "in projects router /"});
})

module.exports = router;
