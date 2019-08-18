const express = require('express');
const ctrlResources = require("../controllers/resources");
const ctrlOthers = require("../controllers/others");
const router = express.Router();

/* GET home page. Resources List page */
router.get('/', ctrlResources.resourcesList);

/* GET home page. Resources List page */
router.get('/resource/new', ctrlResources.addResource);

/* GET home page. Resources List page */
router.get('/about', ctrlOthers.about);

module.exports = router;
