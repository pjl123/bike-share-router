var https = require('https');

module.exports.getStationData = function() {
  return new Promise(getStationJson);
}

function getStationJson(resolve, reject) {
  https.get('https://www.rideindego.com/stations/json/', function(res){
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
        responseString += data;
    });

    res.on('end', function() {
      var responseObject = JSON.parse(responseString);
      resolve(responseObject);
    });
  })
  .on('error', function(err) {
    reject(err);
  });
}