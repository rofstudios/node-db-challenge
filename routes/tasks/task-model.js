let knex = require('../../data/connections');

function createTask(newTask) {
    return knex('tasks')
    .insert(newTask, "id")
}

function findById(id) {
    return knex('tasks')
    .join("projects", "projects.id", "tasks.project_id")
    .where("project_id", id)
    .select("projects.name", "projects.description")
}

function validateById(id) {
    return knex('tasks')
    .where("id", id)
}

module.exports = {
    createTask,
    findById,
}