var express = require('express');
var router = express.Router();

var socketApi = require('../sockets/socketApi.js');
var mindSphereAPI = require('../MindSphere/MindSphereAPI.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    mindSphereAPI.authHeader = req.get("authorization");  /* Get authorization header*/
    res.render('index');
});


/* Sockets Handle. */
socketApi.io.on('connection', function(socket){
    socket.on('requestMindSphereAPI', function(query){
        mindSphereAPI.getTimeSeries("cbb1d3d8555946be9258ba5affe0eb1a", "AutFabEnergy", query.from, query.to, query.variableNames, [], 9000, function(timeSeries){
            socket.emit(query.answerName, timeSeries);
        });
    });
});


module.exports = router;

