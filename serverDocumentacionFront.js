const express = require("express");
const path = require("path");

const app = express();

// USE

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "docsFRONT")));

//START SERVER
app.listen(5000, function () {
 console.log("Server documentacion FRONT");
});