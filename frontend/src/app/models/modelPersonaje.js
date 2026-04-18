import mongoose from 'mongoose';

const personajeSchema = new mongoose.Schema({

  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  nivel: { type: String, required: false },

});

export default mongoose.model('Personaje', personajeSchema);
