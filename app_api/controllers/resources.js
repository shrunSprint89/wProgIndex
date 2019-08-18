const mongoose = require('mongoose');
const resourceModel = mongoose.model('Resource');

//API function that returns complete list of resources
const listAllResources = (req, res, next) => {
  resourceModel.find(
    {},
    '-pictures',
    {sort: {'helpfulness':1} , limit: 20},
    (error, result) => {
      let status, message, resources;
      if(error){
        console.error("Error while querying db for resource list. Error value returned");
        status = 404;
        message = '"Error while querying db for resource list. Error value returned';
        resources = [];
      }else if(!result){
        console.error("Error while querying db for resource list. No Result value returned");
        status = 404;
        message = 'Error while querying db for resource list. No Result value returned';
        resources = [];
      }else{
        console.error(`Resources fetched successfully: ${result}`);
        status = 200;
        message = '';
        resources = result;
      }
      return res.status(status).json(resources);
    }
  );

  // res.status(200)
  //   .json({
  //     'status':'success'
  //   });
};

const createResource = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};

//API function to get one specific resource from DB and return it
const getResource = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};

const updateResource = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};

const deleteResource = (req, res, next) => {
  res.status(200)
    .json({
      'status':'success'
    });
};



module.exports = {
  listAllResources,
  createResource,
  getResource,
  updateResource,
  deleteResource
};
