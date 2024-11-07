const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConversacionSchema = new Schema({
  usuarioId: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario', // Referencia al modelo Usuario
    required: true
  },
  botId: {
    type: Schema.Types.ObjectId,
    ref: 'Bot', // Referencia al modelo Bot
    required: true
  },
  mensajes: [{
    emisor: {
      type: String,
      enum: ['usuario', 'bot'],
      required: true
    },
    contenido: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
});

const Conversacion = mongoose.model('Conversacion', ConversacionSchema);

module.exports = Conversacion;
