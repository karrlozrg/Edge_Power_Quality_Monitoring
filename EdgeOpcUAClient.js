
var nodeopcua = require('node-opcua');
var async = require("async");

const client = new nodeopcua.OPCUAClient();
var endpointUrl= "opc.tcp://md1y180c:62541/Quickstarts/ReferenceServer";

var the_session;
var datatemp= {EdgeData:{voltage: 0.0,current: 0.0}};

function connect(endpoint, substime , edgeCallBack,...nodeids ) {
    endpointUrl=endpoint;
    async.series([

            // step 1 : connect to
            function(callback)  {
                client.connect(endpointUrl,function (err) {
                    if(err) {
                        console.log(" cannot connect to endpoint :" , endpointUrl );
                    } else {
                        console.log("connected !");
                    }
                    callback(err);
                });
            },

            // step 2 : createSession
            function(callback) {
                client.createSession( function(err,session) {
                    if(!err) {
                        the_session = session;
                    }
                    callback(err);
                });
            },

            //EdgeStep: read each certain time
            function (callback) {

                    setInterval(() => {
                        the_session.readVariableValue(nodeids[0], function (err, dataValue) {
                                datatemp.EdgeData.voltage=dataValue.value.value;
                            });
                        the_session.readVariableValue(nodeids[1], function (err, dataValue) {
                            datatemp.EdgeData.current=dataValue.value.value;
                        });
                        edgeCallBack(datatemp);
                         }, substime);
            },

        ],
        function(err) {
            if (err) {
                console.log(" failure ",err);
            } else {
                console.log("done!");
            }
            client.disconnect(function(){});
        }) ;
}

module.exports.connect=connect;