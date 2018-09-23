/*******************************************************************************************************************************************
 *  												  Socket
 *******************************************************************************************************************************************/
var token = getCookie("XSRF-TOKEN");
var host = window.location.host;
if (token != ""){
    host += "?_csrf=" + token;
}
// Connect to socket.io
var socket = io.connect(host);


/*******************************************************************************************************************************************
 *  												 Request MindSphere RT
 *******************************************************************************************************************************************/
// Cyclic Update - Request to backend
setInterval(requestMindSphereRT,5000);

function requestMindSphereRT() {
    var timeTo = new Date();//new Date("Jun 13, 2018, 17:00:00");//new Date();
    var timeFrom = new Date(); //new Date("Jun 13, 2018, 17:00:00"); //new Date();
    var h = timeFrom.getTime();
    timeFrom.setTime(h - 1000*60*60*0.2);

    var query = {
        answerName      : "ans_AllDataMindSphere",
        variableNames   : ["U_L1_N", "U_L2_N", "U_L3_N", "I_L1", "I_L2", "I_L3", "Total_P", "Total_Q", "Total_S", "Cos_Phi_L1", "Cos_Phi_L2", "Cos_Phi_L3"],
        from            : timeFrom.toISOString(),
        to              : timeTo.toISOString()
    };
    socket.emit('requestMindSphereAPI',query);
}

// Cyclic Update - Answer from backend
socket.on('ans_AllDataMindSphere',function (dataJSON) {
    addDataTrendsRT(dataJSON);
});

// First request
setTimeout(requestMindSphereRT,1000);



/*******************************************************************************************************************************************
 *  												  Request MindSphere Historic
 *******************************************************************************************************************************************/

var btnTimeC = document.getElementById("btnUpdateCurrent");
var timeStartC = document.getElementById("startDateCurrent");
var timeEndC = document.getElementById("endDateCurrent");


var btnTimeV = document.getElementById("btnUpdateVoltage");
var timeStartV = document.getElementById("startDateVoltage");
var timeEndV = document.getElementById("endDateVoltage");


var btnTimeP = document.getElementById("btnUpdatePower");
var timeStartP = document.getElementById("startDatePower");
var timeEndP = document.getElementById("endDatePower");


var btnTimePF = document.getElementById("btnUpdatePowerFactor");
var timeStartPF = document.getElementById("startDatePowerFactor");
var timeEndPF = document.getElementById("endDatePowerFactor");


btnTimeC.onclick = function() {
    requestMindSphereCurrent();
};

btnTimeV.onclick = function() {
    requestMindSphereVoltage();
};

btnTimeP.onclick = function() {
    requestMindSpherePower();
};

btnTimePF.onclick = function() {
    requestMindSpherePowerF();
};




function requestMindSphereCurrent() {
    var timeTo = new Date(timeEndC.value);
    var timeFrom = new Date(timeStartC.value);

    var query = {
        answerName      : "ans_CurrentMindSphere",
        variableNames   : ["I_L1", "I_L2", "I_L3"],
        from            : timeFrom.toISOString(),
        to              : timeTo.toISOString()
    };
    socket.emit('requestMindSphereAPI',query);
}
// Answer of current
socket.on('ans_CurrentMindSphere',function (dataJSON) {
    addDataTrendCurrent(dataJSON);
});

function requestMindSphereVoltage() {
    var timeTo = new Date(timeEndV.value);
    var timeFrom = new Date(timeStartV.value);

    var query = {
        answerName      : "ans_VoltageMindSphere",
        variableNames   : ["U_L1_N", "U_L2_N", "U_L3_N"],
        from            : timeFrom.toISOString(),
        to              : timeTo.toISOString()
    };
    socket.emit('requestMindSphereAPI',query);
}
// Answer of voltage
socket.on('ans_VoltageMindSphere',function (dataJSON) {
    addDataTrendVoltage(dataJSON);
});

function requestMindSpherePower() {
    var timeTo = new Date(timeEndP.value);
    var timeFrom = new Date(timeStartP.value);

    var query = {
        answerName      : "ans_PowerMindSphere",
        variableNames   : ["Total_P", "Total_Q", "Total_S"],
        from            : timeFrom.toISOString(),
        to              : timeTo.toISOString()
    };
    socket.emit('requestMindSphereAPI',query);
}
// Answer of power
socket.on('ans_PowerMindSphere',function (dataJSON) {
    addDataTrendPower(dataJSON);
});

function requestMindSpherePowerF() {
    var timeTo = new Date(timeEndPF.value);
    var timeFrom = new Date(timeStartPF.value);

    var query = {
        answerName      : "ans_PowerFMindSphere",
        variableNames   : ["Cos_Phi_L1", "Cos_Phi_L2", "Cos_Phi_L3"],
        from            : timeFrom.toISOString(),
        to              : timeTo.toISOString()
    };
    socket.emit('requestMindSphereAPI',query);
}
// Answer of power factor
socket.on('ans_PowerFMindSphere',function (dataJSON) {
    addDataTrendPowerF(dataJSON);
});














