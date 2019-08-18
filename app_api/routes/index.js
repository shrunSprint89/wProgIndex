const express = require('express');
const router = express.Router();
const apiCtrlResources = require("../controllers/resources");

/* GET home page. Resources List page */
router.route('/resources')
      .post(apiCtrlResources.createResource)
      .get(apiCtrlResources.listAllResources);

/* GET home page. Resources List page */
router.route('/resources/:resourceID')
      .get(apiCtrlResources.getResource)
      .put(apiCtrlResources.updateResource)
      .delete(apiCtrlResources.deleteResource);

module.exports = router;
