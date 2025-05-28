const path = require("path");

const paxinaInvoices = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/invoices.html"))
}

module.exports = paxinaInvoices