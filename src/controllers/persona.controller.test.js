const { addPersona } = require('./persona.controller');
const Persona = require('../models/persona.model');

describe('addPersona', () => {
  it('should create a new persona and return it in the response', async () => {
    const req = {
      body: {
        nombre: 'John',
        apellido: 'Doe',
        edad: 30,
        dni: '123456789'
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const saveMock = jest.fn().mockResolvedValueOnce();
    jest.spyOn(Persona.prototype, 'save').mockImplementationOnce(saveMock);

    await addPersona(req, res);

    expect(saveMock).toHaveBeenCalledWith();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ persona: expect.any(Object) });
  });

  it('should handle errors and return them in the response', async () => {
    const req = {
      body: {
        nombre: 'John',
        apellido: 'Doe',
        edad: 30,
        dni: '123456789'
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const errorMock = new Error('Some error');
    jest.spyOn(Persona.prototype, 'save').mockRejectedValueOnce(errorMock);

    await addPersona(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: errorMock });
  });
});