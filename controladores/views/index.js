/**
 * @author Pepito Rodriguez
 * @param paxinaApp é a páxina de app
 * @exports paxinasViews este ficheiro exporta as páxinas de views
 */
const paxinaApp = require("./paxina.app.js")
const paxinaAxustes = require("./paxina.axustes.js")
const paxinaClientes = require("./paxina.clientes.js")
const paxinaInvoices = require("./paxina.invoices.js")
const paxinaLogueo = require("./paxina.logueo.js")
const paxinaNoUser = require("./paxina.no-user.js")
const paxinaProductos = require("./paxina.productos.js")
const paxinaCesta = require("./paxina.cesta.js")
const paxinaCustomers = require("./paxina.customers.js")
const paxinaGraficas = require("./paxina.graficas.js")
const paxinaNewProduct = require("./paxina.new_product.js")
const paxinaHome = require("./paxina.home.js")

module.exports = {
    paxinaApp,
    paxinaNoUser,
    paxinaLogueo,
    paxinaAxustes,
    paxinaClientes,
    paxinaProductos,
    paxinaInvoices,
    paxinaCesta,
    paxinaCustomers,
    paxinaGraficas,
    paxinaNewProduct,
    paxinaHome
}

