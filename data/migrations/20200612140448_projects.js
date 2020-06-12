// The changes to the database, this is the initial commit
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments(); // sets primary key, integer type and auto increments
        tbl.string('name', 128).notNullable(); // makes it a required field
        tbl.string('description', 255).nullable(); // not a required field
        tbl.boolean('completed').notNullable().defaultTo(false); // required, default is false
    })
    .createTable('tasks', tbl => {
        tbl.increments(); // sets primary key, integer type and auto increments
        tbl.integer('project_id')
            .unsigned() // avoids negative integers and opens use for large nums
            .notNullable()
            .references('id') // foreing key pt1
            .inTable('projects') // foreighn key pt2
            .onUpdate('CASCADE') // updates db on changes
            .onDelete('CASCADE') // updates db on delete
        tbl.string('description', 255).notNullable()
        tbl.string('notes', 255).nullable()
        tbl.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments(); // sets primary key, integer type and auto increments
        tbl.string('name', 128).notNullable().unique();
        tbl.string('description', 255).nullable();
    })
};
// how to undo the changes on the up and revert it, must be done in reverse order.
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
