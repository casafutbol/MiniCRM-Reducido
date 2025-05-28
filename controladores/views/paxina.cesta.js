const path = require("path");

const paxinaCesta = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/cesta.html"))
}

module.exports = paxinaCesta