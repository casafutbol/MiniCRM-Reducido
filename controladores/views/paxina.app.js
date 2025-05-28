const path = require("path");
/**
 * @author Pepito Rodriguez
 * @param {Object} req variable Request
 * @param {Object} res variable Response que ten por defecto Node, que fará a resposta o cliente 
 * @returns @param res.status.sendFile envía a páxina de app.html
 */
const paxinaApp = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../../dist/views/app.html"))
}

module.exports = paxinaApp