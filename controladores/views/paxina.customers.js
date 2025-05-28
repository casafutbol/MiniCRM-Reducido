const path = require("path");

const paxinaCustomers = (req, res) => {
    res.sendFile("customers.html", {
        root: path.join(__dirname, "../../dist/views")
    });
};

module.exports = paxinaCustomers;