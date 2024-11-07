const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  preferencias: {
    idioma: {
      type: String,
      default: 'es'
    },
    tema: {
      type: String,
      enum: ['claro', 'oscuro']
    }
  },
  conversaciones: [{
    type: Schema.Types.ObjectId,
    ref: 'Conversacion'
  }]
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;