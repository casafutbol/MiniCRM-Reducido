const path = require("path");

const paxinaGraficas = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/graficas.html"))
}

module.exports = paxinaGraficas