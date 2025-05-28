const path = require("path");

const paxinaClientes = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/clientes.html"))
}

module.exports = paxinaClientes