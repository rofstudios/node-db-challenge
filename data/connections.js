let knex = require('knex');

let knexfile = require('../knexfile');

let config = knexfile.development;
console.log(config, 'config');

module.exports = knex(config);