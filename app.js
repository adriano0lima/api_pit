const express = require("express");
const app = express();

app.use(express.json());


const index = require('./index')



//Import Routes
const carrinho = require("./routes/carrinho");
const categoria = require("./routes/categoria");
const perfil = require("./routes/perfil");
const produto = require("./routes/produto");
const usuario = require("./routes/usuario");




//Set Routes
app.use('/', carrinho);
app.use('/', categoria);
app.use('/', perfil);
app.use('/', produto);
app.use('/', usuario);


app.listen(3333, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});