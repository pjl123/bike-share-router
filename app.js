var express = require('express');
var station = require('./services/station-service');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  station.getStationData()
  .then(data => {
    response.send(data);
  })
  .catch(err => {
    response.send(err);
  })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})