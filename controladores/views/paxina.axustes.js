const path = require("path");

const paxinaAxustes = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/axustes.html"))
}

module.exports = paxinaAxustes