var request = require("superagent");

var timeSeriesUrlBase = "https://gateway.eu1.mindsphere.io/api/iottimeseries/v3/timeseries/";

function MindSphereAPI() {
    this.authHeader = "";
}

var api = new MindSphereAPI();

MindSphereAPI.prototype.getTimeSeries = function (assetId, aspectName, from, to, variableNames, payload, intervalS, callback){

    var _from = new Date(from);
    var _to = new Date(to);
    var dateDiff = (_to - _from)/1000;
    var recursive = 0;
    //console.log("dateDiff: " + dateDiff);

    if(dateDiff >= intervalS) {
        _to.setTime( _from.getTime() + 1000*intervalS );
        from = _to.toISOString();
        recursive = 1;
    }

    var URLTimeSeries = createURLTimeSeries(assetId,aspectName,_from.toISOString(),_to.toISOString(),variableNames);

    api.getRequestAPI(URLTimeSeries, recursive, payload, function(timeSeries){
        payload = payload.concat(timeSeries);
        if (recursive == 1){
            api.getTimeSeries(assetId, aspectName, from, to, variableNames, payload, intervalS, callback);
        } else {
            callback(payload);
        }
    });
}

MindSphereAPI.prototype.getRequestAPI = function (URLTimeSeries,recursive, payload,callback) {
    request
        .get(URLTimeSeries)
        .set('Authorization', this.authHeader)
        .set('Accept', 'application/json')
        .then(function(data) {
            callback(data.body);
        }).catch(function(err)  {
            console.error(err.message, err.status);
        });
}


function createURLTimeSeries(assetId, aspectName, from, to, variableNames){
    var timeSeriesUrl = timeSeriesUrlBase + assetId + "/" + aspectName;
    var urlVariableNames = "";
    variableNames.forEach( function (value, index) {
        if(index != 0) {
            urlVariableNames += ",";
        }
        urlVariableNames += value;
    });

    /* Create the final URL */
    timeSeriesUrl += "?from="   + from
                   + "&to="     + to
                   + "&select=" + urlVariableNames;

    return timeSeriesUrl;
}

module.exports = api;