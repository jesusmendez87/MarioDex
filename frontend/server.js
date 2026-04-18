import mongoose from  'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import modelPersonaje from './src/app/models/modelPersonaje.js';

dotenv.config();
const app = express();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('¡¡¡Conectado a MongoDB!!!'))
  .catch((err) => console.log('Error al conectarse a MongoDB :(', err));

app.use(express.json());

// Esto habilita CORS para Angular
app.use(cors());

// get pockemons

app.get('/api/personajes', async(req, res) =>{
try{const personaje = await modelPersonaje.find();
    res.json(personaje);
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.post('/api/personaje', async (req, res)=> {
const{ nombre, tipo, nivel} = req.body;
try{

  const newPersonaje = new modelPersonaje({nombre, tipo, nivel});
  await newPersonaje.save();
  res.status(201).json(newPersonaje);
}
catch (error) {
    console.error('Error al crear el personaje:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }

});




const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
