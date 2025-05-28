const path = require("path");

const paxinaNoUser = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/no-user.html"))
}

module.exports = paxinaNoUser