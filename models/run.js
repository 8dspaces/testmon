var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    paginate = require('mongoose-paginate'),
    Test = require('./test')

var Run = new Schema({
  tests: [{ type: Schema.Types.ObjectId, ref: 'Test' }]
}, {
  discriminatorKey: 'kind'
})

Run.plugin(paginate)
module.exports = Test.discriminator('Run', Run)
