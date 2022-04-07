const express= require ('express');

const ControladorBromas = require("../controladores/controladorBroma");

module.exports = app => {
    app.get("/api/jokes/", ControladorBromas.findAllJokes);
    app.get("/api/jokes/random/", ControladorBromas.findJokeRandomly);
    app.post("/api/jokes/new", ControladorBromas.createNewJoke);
    app.get("/api/jokes/:id", ControladorBromas.findJokeById);
    app.put("/api/jokes/update/:id", ControladorBromas.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", ControladorBromas.deleteExistingJoke);
};
