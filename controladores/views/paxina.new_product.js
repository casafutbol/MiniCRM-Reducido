const path = require("path");

const paxinaNewProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/new_product.html"))
}

module.exports = paxinaNewProduct