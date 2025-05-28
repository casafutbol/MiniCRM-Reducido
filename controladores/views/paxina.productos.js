const path = require("path");

const paxinaProductos = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/productos.html"))
}

module.exports = paxinaProductos