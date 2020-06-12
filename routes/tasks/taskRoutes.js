let express = require('express');

let knex = require('../../data/connections');

let router = express.Router({
    mergeParams: true,
});

router.get('/', (req, res) => {
    res.status(200).json({ message: "in tasks router /"});
})

module.exports = router;