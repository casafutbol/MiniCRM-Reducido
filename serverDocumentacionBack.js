const express = require("express");
const path = require("path");

const app = express();

// USE

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "docsBACK")));

//START SERVER
app.listen(4000, function () {
 console.log("Server documentacion BACK");
});