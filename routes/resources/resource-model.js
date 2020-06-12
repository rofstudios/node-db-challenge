let knex = require('../../data/connections');

function findAllResources() {
    return knex('resources') // grabs all from resources table
}

function create(resource) {
    return knex('resources')
    .insert(resource, "id")
}

module.exports = {
    findAllResources,
    create,
}