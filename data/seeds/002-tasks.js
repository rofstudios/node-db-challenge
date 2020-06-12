
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    // .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          description: "learning to build a web api",
          notes: "none",
          completed: true
        },
        {
          project_id: 1,
          description: "learning about data persistence",
          notes: "none",
          completed: true
        },
        {
          project_id: 1,
          description: "learning how to authenticate and test backend",
          notes: "",
          completed: true
        },
        {
          project_id: 1,
          description: "start back end build week",
          notes: "",
          completed: false
        },
        {
          project_id: 2,
          description: "learning about vercel",
          notes: "none",
          completed: true
        },
        {
          project_id: 2,
          description: "host on vercels",
          notes: "none",
          completed: true
        },
        {
          project_id: 3,
          description: "using github",
          notes: "",
          completed: true
        },
        {
          project_id: 4,
          description: "research html and css",
          notes: "none",
          completed: true
        },
        {
          project_id: 4,
          description: "create a page with html",
          notes: "none",
          completed: true
        },
        {
          project_id: 4,
          description: "style html page with css",
          notes: "none",
          completed: true
        }
      ]);
    });
};
