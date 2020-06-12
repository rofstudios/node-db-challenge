let knex = require('../../data/connections');

function findAllProjects() {
    return knex('projects') //grabs the whole table and returns it
}

function create(project) {
    return knex('projects')
    .insert(project, "id")
    // .then((id => {
    //     return findProjectById(id)
    // }))
}

function findProjectById(id) {
    return knex('projects')
    .where({ id })
    .first()
}

// function findAllResources() {
//     return knex('resources')
// }

module.exports = {
    findAllProjects,
    create,
    findProjectById,
    // findAllResources,
}