const express = require("express");
const path = require("path");
require("dotenv").config(); // Carga de variables de entorno

const {
  paxinaNoUser,
  paxinaLogueo,
  paxinaInvoices,
  paxinaCesta,
  paxinaCustomers,
  paxinaGraficas,
  paxinaNewProduct,
  paxinaHome,
  paxinaAxustes,
  paxinaApp,
} = require("./controladores/views");

const { logueo, isUser } = require("./middleware");

const app = express();

// Middleware para leer formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estáticos (frontend compilado)
app.use(express.static(path.join(__dirname, "dist")));

// Rutas GET
app.get("/recibo-datos-do-servidor", (req, res) => {
  res.send({
    mensaxe: {
      dato1: "Juanito",
      dato2: "pepito",
      dato3: 3,
    },
  });
});

app.get("/logueo", paxinaLogueo);
app.get("/no-user", paxinaNoUser);
app.get("/home", paxinaHome);
app.get("/invoices", paxinaInvoices);
app.get("/cesta", paxinaCesta);
app.get("/clientes", paxinaCustomers);
app.get("/graficas", paxinaGraficas);
app.get("/productos", paxinaNewProduct);
app.get("/axustes", paxinaAxustes);
app.get("/api/home", isUser, (req, res) => {
  res.send({ msg: "Home segura con isUser" });
});

// Rutas POST
app.post("/logueandome", (req, res) => {
  console.log("recibo dato no server", req.body);
  const condicion = req.body.nome2 === "Israel" && req.body.apelido2 === "mariano";
  if (condicion) {
    // Autenticación correcta
    paxinaHome(req, res);
  } else {
    res.redirect("/no-user");
  }
});

app.post("/envio-datos-o-servidor", (req, res) => {
  console.log("req.body ", req.body);
  res.send({ mensaxe: "datos enviados" });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("✅ Servidor en http://localhost:3000");
});