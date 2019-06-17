const mongoose = require('mongoose');

const { Schema } = mongoose;

const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = { limit: 12 };

const PetSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String },
  id: { type: Number },
  price: { type: Number },
  description: { type: String },
},
{
  timestamps: true,
});

PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
