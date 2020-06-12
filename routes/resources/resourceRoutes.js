let express = require('express')

let resourceModel = require('./resource-model');

let router = express.Router();

router.get('/', (req, res) => {
    resourceModel.findAllResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(err => {
        res.status(500).json({ error: "Could not retrieve data" })
    })
})

router.post('/', (req, res) => {
    newResource = req.body;
    if(!newResource.name) {
        res.status(400).json({ errorMessage: "Please provide a name for resource"})
    } else {
        resourceModel.create(newResource)
        .then(returnedID => {
            res.status(201).json(returnedID);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not create new resource" });
        })
    }
})

module.exports = router;