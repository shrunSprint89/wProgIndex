const express = require('express');
const router = express.Router();

const apiCtrlNodes = require("../controllers/nodes");

//commenting out since we aren't using resources list from DB for now. Taking map from a file for now.
//const apiCtrlResources = require("../controllers/resources");

//commenting out since we aren't using resources list from DB for now. Taking map from a file for now.
/* GET home page. Resources List page */
/*router.route('/resources')
      .post(apiCtrlResources.createResource)
      .get(apiCtrlResources.listAllResources);
*/
/* GET home page. Resources List page */
/*router.route('/resources/:resourceID')
      .get(apiCtrlResources.getResource)
      .put(apiCtrlResources.updateResource)
      .delete(apiCtrlResources.deleteResource);
*/

/* Send nodes file */
router.route('/nodes')
      .get(apiCtrlNodes.sendAllNodes);


module.exports = router;
