/*******************************************************************************************************************************************
 *  												  Trends config
 *******************************************************************************************************************************************/

// Get elements from html
var ctxRTV = document.getElementById("chartRTVoltage");
var ctxRTI = document.getElementById("chartRTCurrent");
var ctxRTP = document.getElementById("ChartRTPower");

// Colors
var color1 = "#3e95cd";
var color2 = "#8e5ea2";
var color3 = "#3cba9f";

var configRTV = {
  type: "line",
  data: {
    //labels: [],
    datasets: [
      {
        label: "V_1",
        backgroundColor: color1,
        borderColor: color1,
        fill: false,
        yAxisID: "volts",
        pointRadius: 2
        //data: []
      },
      {
        label: "V_2",
        backgroundColor: color2,
        borderColor: color2,
        fill: false,
        yAxisID: "volts",
        pointRadius: 2
        //data: []
      },
      {
        label: "V_3",
        backgroundColor: color3,
        borderColor: color3,
        fill: false,
        yAxisID: "volts",
        pointRadius: 2
        //data: []
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "VOLTAGE"
    },
    legend: {
      position: "right"
    },
    pan: {
      enabled: false,
      mode: "x",
      limits: {
        xmin: 1,
        ymin: 1,
        ymax: 5
      }
    },
    zoom: {
      enabled: false,
      mode: "x",
      sensitivity: 1,
      limits: {
        max: 10,
        min: 0.5
      }
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          /* type: "linear", */
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Time"
          }
        }
      ],
      yAxes: [
        {
          type: "linear",
          position: "right",
          id: "volts",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volts"
          }
        }
      ]
    }
  }
};

var configRTI = {
  type: "line",
  data: {
    //labels: [],
    datasets: [
      {
        label: "I_1",
        backgroundColor: color1,
        borderColor: color1,
        fill: false,
        yAxisID: "amperes",
        pointRadius: 2,
        //data: []
      },
      {
        label: "I_2",
        backgroundColor: color2,
        borderColor: color2,
        fill: false,
        yAxisID: "amperes",
        pointRadius: 2
        //data: []
      },
      {
        label: "I_3",
        backgroundColor: color3,
        borderColor: color3,
        fill: false,
        yAxisID: "amperes",
        pointRadius: 2,
        //data: []
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "CURRENT"
    },
    legend: {
      position: "right"
    },
    pan: {
      enabled: false,
      mode: "x",
      limits: {
        xmin: 1,
        ymin: 1,
        ymax: 5
      }
    },
    zoom: {
      enabled: false,
      mode: "x",
      sensitivity: 0.5,
      limits: {
        max: 10,
        min: 0.5
      }
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          /* type: "linear", */
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Time"
          }
        }
      ],
      yAxes: [
        {
          type: "linear",
          position: "right",
          id: "amperes",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "amperes"
          }
        }
      ]
    }
  }
};

var configRTP = {
  type: "line",
  data: {
    //labels: [],
    datasets: [
      {
        label: "Active (w)",
        pointRadius: 0,
        backgroundColor: color1,
        borderColor: color1,
        fill: false,
        yAxisID: "power"
        //data: []
      },
      {
        label: "Reactive (var)",
        pointRadius: 0,
        backgroundColor: color2,
        borderColor: color2,
        fill: false,
        yAxisID: "power"
        //data: []
      },
      {
        label: "Apparent (VA)",
        pointRadius: 0,
        backgroundColor: color3,
        borderColor: color3,
        fill: false,
        yAxisID: "power"
        //data: []
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "POWER"
    },
    legend: {
      position: "right"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Time"
          }
        }
      ],
      yAxes: [
        {
          type: "linear",
          position: "right",
          id: "power",
          display: true,
          scaleLabel: {
            display: false,
            labelString: ""
          }
        }
      ]
    }
  }
};

window.trendVRT = new Chart(ctxRTV, configRTV);
window.trendIRT = new Chart(ctxRTI, configRTI);
window.trendPRT = new Chart(ctxRTP, configRTP);


/*******************************************************************************************************************************************
 *  												  Trends Update RT
 *******************************************************************************************************************************************/
function addDataTrendsRT(dataJSON) {
    var dataTrend = {
        "time"      : [0],
        "U_L1_N"    : [0],
        "U_L2_N"    : [0],
        "U_L3_N"    : [0],
        "I_L1"      : [0],
        "I_L2"      : [0],
        "I_L3"      : [0],
        "Total_P"   : [0],
        "Total_Q"   : [0],
        "Total_S"   : [0],
        "Cos_Phi_L1":  0,
        "Cos_Phi_L2":  0,
        "Cos_Phi_L3":  0
    };

    var size = dataJSON.length;
    //console.log(dataJSON);

    //var options = { month: 'short', day: 'numeric',hour12: false, hour:'numeric', minute: 'numeric', second: 'numeric'};
    var options = { hour12: false, hour:'numeric', minute: 'numeric', second: 'numeric'};

    for (var i = 0; i < size; i++) {
        dataTrend.time[i]       = (new Date(dataJSON[i]._time)).toLocaleString('en-US',options);
        dataTrend.U_L1_N[i]     = dataJSON[i].U_L1_N;
        dataTrend.U_L2_N[i]     = dataJSON[i].U_L2_N;
        dataTrend.U_L3_N[i]     = dataJSON[i].U_L3_N;
        dataTrend.I_L1[i]       = dataJSON[i].I_L1;
        dataTrend.I_L2[i]       = dataJSON[i].I_L2;
        dataTrend.I_L3[i]       = dataJSON[i].I_L3;
        dataTrend.Total_P[i]    = dataJSON[i].Total_P;
        dataTrend.Total_Q[i]    = dataJSON[i].Total_Q;
        dataTrend.Total_S[i]    = dataJSON[i].Total_S;
        dataTrend.Cos_Phi_L1    = dataJSON[i].Cos_Phi_L1;
        dataTrend.Cos_Phi_L2    = dataJSON[i].Cos_Phi_L2;
        dataTrend.Cos_Phi_L3    = dataJSON[i].Cos_Phi_L3;
    }

    configRTV.data.labels =  dataTrend.time;
    configRTV.data.datasets[0].data = dataTrend.U_L1_N;
    configRTV.data.datasets[1].data = dataTrend.U_L2_N;
    configRTV.data.datasets[2].data = dataTrend.U_L3_N;

    configRTI.data.labels =  dataTrend.time;
    configRTI.data.datasets[0].data = dataTrend.I_L1;
    configRTI.data.datasets[1].data = dataTrend.I_L2;
    configRTI.data.datasets[2].data = dataTrend.I_L3;

    configRTP.data.labels =  dataTrend.time;
    configRTP.data.datasets[0].data = dataTrend.Total_P;
    configRTP.data.datasets[1].data = dataTrend.Total_Q;
    configRTP.data.datasets[2].data = dataTrend.Total_S;

    window.trendVRT.update();
    window.trendIRT.update();
    window.trendPRT.update();

    updateTableRT('v', configRTV);
    updateTableRT('c', configRTI);
    updateTableRT('p', configRTP);

    g1.refresh(dataTrend.Cos_Phi_L1*100);
    g2.refresh(dataTrend.Cos_Phi_L2*100);
    g3.refresh(dataTrend.Cos_Phi_L3*100);

}


/*******************************************************************************************************************************************
 *  												  Statistics
 *******************************************************************************************************************************************/

var btnStatCurrent = document.getElementById("btnStatCurrent");
var btnStatVoltage = document.getElementById("btnStatVoltage");
var btnStatPower = document.getElementById("btnStatPower");

btnStatCurrent.onclick = function() {
  hideShowTable(document.getElementById("tbCurrentRT"));
  if (this.innerHTML == "hide statistics") {
    this.innerHTML = "show statistics";
  } else {
    this.innerHTML = "hide statistics";
  }
};

btnStatVoltage.onclick = function() {
  hideShowTable(document.getElementById("tbVoltageRT"));
  if (this.innerHTML == "hide statistics") {
    this.innerHTML = "show statistics";
  } else {
    this.innerHTML = "hide statistics";
  }
};

btnStatPower.onclick = function() {
  hideShowTable(document.getElementById("tbPowerRT"));
  if (this.innerHTML == "hide statistics") {
    this.innerHTML = "show statistics";
  } else {
    this.innerHTML = "hide statistics";
  }
};

function hideShowTable(tableID) {
  console.log(tableID);
  if (tableID.style.display == "none") {
    tableID.style.display = "";
  } else {
    tableID.style.display = "none";
  }
}

/*******************************************************************************************************************************************
 *  												 Fill Statistics
 *******************************************************************************************************************************************/
function updateTableRT(option, config){
    var cl1 = [],
        cl2 = [],
        cl3 = [];

    cl1[0] = document.getElementById(option + "L1ART");
    cl1[1] = document.getElementById(option + "L1MinRT");
    cl1[2] = document.getElementById(option + "L1MaxRT");

    cl2[0] = document.getElementById(option + "L2ART");
    cl2[1] = document.getElementById(option + "L2MinRT");
    cl2[2] = document.getElementById(option + "L2MaxRT");

    cl3[0] = document.getElementById(option + "L3ART");
    cl3[1] = document.getElementById(option + "L3MinRT");
    cl3[2] = document.getElementById(option + "L3MaxRT");

    var l1 = config.data.datasets[0].data;
    var l2 = config.data.datasets[1].data;
    var l3 = config.data.datasets[2].data;

    cl1[0].innerHTML = parseFloat(l1.reduce((previous, current) => current+= previous) / l1.length).toFixed(2);
    cl1[1].innerHTML = parseFloat(Math.min(...l1)).toFixed(2);
    cl1[2].innerHTML = parseFloat(Math.max(...l1)).toFixed(2);

    cl2[0].innerHTML = parseFloat(l2.reduce((previous, current) => current+= previous) / l2.length).toFixed(2);
    cl2[1].innerHTML = parseFloat(Math.min(...l2)).toFixed(2);
    cl2[2].innerHTML = parseFloat(Math.max(...l2)).toFixed(2);

    cl3[0].innerHTML = parseFloat(l3.reduce((previous, current) => current+= previous) / l3.length).toFixed(2);
    cl3[1].innerHTML = parseFloat(Math.min(...l3)).toFixed(2);
    cl3[2].innerHTML = parseFloat(Math.max(...l3)).toFixed(2);
}