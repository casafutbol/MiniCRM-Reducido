const path = require("path");

const paxinaLogueo = (req,res)=>{
    res.sendFile(path.join(__dirname,`../../dist/views/logueo.html`))
}

module.exports = paxinaLogueo