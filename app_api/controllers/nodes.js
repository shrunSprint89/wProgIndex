const path = require('path');

//API function that returns complete list of nodes
const sendAllNodes = (req, res, next) => {
  //console.log("app_api\\models\\nodes sendAllNodes()" + "==>" + "Entered function");
  const appDir = path.dirname(require.main.filename);
  //res.sendFile(path.join(appDir, 'data', 'nodes', 'WebTechOverview_d20190906.mup'));
  console.log("app_api\\models\\nodes sendAllNodes()" + "==>" + "Path of file: "+path.join(appDir, '..', 'data', 'nodes', 'WebTechOvw_WPI.txt'));
  //console.log("/home/sharan/Documents/FCE/Work_SE/Projects/WebResGuide/data/nodes/WebTechOvw_WPI.txt");
  res.sendFile(path.join(appDir, '..', 'data', 'nodes', 'WebTechOvw_WPI.txt'));
  //res.sendFile("/home/sharan/Documents/FCE/Work_SE/Projects/WebResGuide/data/nodes/WebTechOvw_WPI.txt");
  //console.log("app_api\\models\\nodes sendAllNodes()" + "==>" + "Exiting function");

};

const createNode = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};

//API function to get one specific node from DB and return it
const getNode = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};

const updateNode = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};

const deleteNode = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};



module.exports = {
  sendAllNodes,
  createNode,
  getNode,
  updateNode,
  deleteNode
};
