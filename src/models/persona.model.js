// crear modelo de persona
const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    dni: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Persona', PersonaSchema);