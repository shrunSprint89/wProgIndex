const resourcesList = (req, res, next) => {
  res.render('resourcesList', { title: 'Resources List' });
};

const addResource = (req, res, next) => {
  res.render('resourcesList', { title: 'Add resource' });
};



module.exports = {
  resourcesList,
  addResource
};
