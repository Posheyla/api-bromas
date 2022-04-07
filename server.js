const express = require("express");
const app = express();

require("./config/config");

app.use(express.json());

const todasLasBromas = require("./rutas/rutaBroma");
todasLasBromas(app);

app.listen( 8080, () =>{
    console.log("El servidor se encuentra corriendo en el puerto 8080");
} )