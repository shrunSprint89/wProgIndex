const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  categoryTags: [String],
  subjectTags: [String],
  helpfulness: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  description: String,
  pictures: Buffer,
  link: String,
  addDate: Date
});

mongoose.model('Resource', resourceSchema);
