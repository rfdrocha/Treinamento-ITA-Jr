const mongoose = require("mongoose")

//Criando um model para representar a coleção
const modeloUsuario = new mongoose.Schema({
    id:Number,
    name: String,
    email: String,
    password: String,
})

module.exports = modeloUsuario