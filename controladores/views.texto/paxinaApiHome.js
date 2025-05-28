const { paxinaTextoHome } = require("../../paxinas.texto")

const paxinaApiHome = (req,res)=>{
    res.send(paxinaTextoHome)
}

module.exports = paxinaApiHome