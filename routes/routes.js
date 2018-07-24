const fs = require('fs');

exports.getData = function(req, res) {
    // res.status(200).send("Welcome to our restful API");

    let rawdata = fs.readFileSync('./data/data.json');  
    let jsonFile = JSON.parse(rawdata);  

    var keys = Object.keys(jsonFile);
    var data = jsonFile[keys[keys.length * Math.random() << 0]];

    res.status(200).send(data);
};

