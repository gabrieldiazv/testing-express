const Persona = require("../models/persona.model");

// arrow function addPersona
const addPersona = async (req, res) => {
  const { nombre, apellido, edad, dni } = req.body;

  const persona = new Persona({ nombre, apellido, edad, dni });

  try {
    await persona.save();
    res.status(201).json({ persona });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  addPersona,
};
