const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/conexion");
const {
  getToken,
  createUserInAzureAD,
} = require("../controllers/graph.controller");

class Server {
  constructor() {
    this.app = express();
    this.puerto = 8080;
    this.paths = {
      google: "api/google",
    };

    // this.conectarDB();
    // this.obtenerToken();
    this.crearUsuario();
  }

  async crearUsuario() {
    const userToCreate = {
      accountEnabled: true,
      displayName: "erik7",
      mailNickname: "erik.7",
      userPrincipalName: "erik.q.retamal@gmail.com",
      passwordProfile: {
        password: "YourStrongPassword123!",
        forceChangePasswordNextSignIn: false,
      },
    };
    const createdUser = await createUserInAzureAD(userToCreate);
    console.log("User created successfully:", createdUser);
  }

  async obtenerToken() {
    getToken();
  }

  async conectarDB() {
    await dbConnection();
  }

  //middlewares
  middlewares() {
    //lectura y parseo del body
    this.app.use(express.json());

    //CORS
    this.app.use(cors());

    //directorio publico
    this.app.use(express.static("public"));
  }

  //rutas
  routes() {}
  //escuchar peticiones
  listen() {
    this.app.listen(this.puerto, () => {
      console.log("Servidor corriendo en puerto", this.puerto);
    });
  }
}

module.exports = Server;
