
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    // .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "www",
          description: "vast information on the www",
        },
        {
          name: "keyboard",
          description: "a must for coding",
        },
        {
          name: "mouse",
          description: "not the real one, also for coding",
        },
        {
          name: "whiteboard",
          description: "useful for planning and referencing",
        },
        {
          name: "LoL",
          description: "personal pref. :'D",
        }
      ]);
    });
};
