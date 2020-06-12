
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    // .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "lambda back end project",
          description: "new lambda project",
          completed: false
        },
        {
          name: "vercel",
          description: "learning how to use versel",
          completed: true
        },
        {
          name: "github",
          description: "new github project",
          completed: false
        },
        {
          name: "css and html",
          description: "learning css and html",
          completed: true
        },
        {
          name: "pre-processing",
          description: "learning pre-processing",
          completed: false
        },
        {
          name: "react",
          description: "learning react",
          completed: true
        }
      ]);
    });
};
