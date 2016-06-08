var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    paginate = require('mongoose-paginate'),
    plugin = require('./plugin');

var transform = (doc, ret, options) => {
  delete ret.__v;
  delete ret.createdAt;
  delete ret.updatedAt;
};

var Run = new Schema({
  name: String,
  meta: {},
  tests: [{ type: Schema.Types.ObjectId, ref: 'Test' }],

  project: { type: String, ref: 'Project' }
}, {
  timestamps: true,
  toJSON: {
    transform
  }
});

Run.plugin(paginate);
Run.plugin(plugin.status);
Run.plugin(plugin.attachment);

module.exports = mongoose.model('Run', Run);
