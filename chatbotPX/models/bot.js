const mongoose = require('mongoose');
const { Schema } = mongoose;

const BotSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: String,
  intenciones: [{
    type: Schema.Types.ObjectId,
    ref: 'Intencion'
  }],
  conversaciones: [{
    type: Schema.Types.ObjectId,
    ref: 'Conversacion'
  }]
});

const Bot = mongoose.model('Bot', BotSchema);

module.exports = Bot;