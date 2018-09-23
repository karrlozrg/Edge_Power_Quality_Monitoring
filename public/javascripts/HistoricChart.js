/*******************************************************************************************************************************************
 *  												  Trends config
 *******************************************************************************************************************************************/

var ctxCurrent = document.getElementById("chartCurrent");
var ctxVoltage = document.getElementById("chartVoltage");
var ctxPower = document.getElementById("chartPower");
var ctxPowerF = document.getElementById("chartPowerFactor");

var color = "#303030";
var color1 = "#3e95cd";
var color2 = "#8e5ea2";
var color3 = "#3cba9f";

var dataTrendVoltage = {
  time: [0],
  U_L1_N: [{ x: 0, y: 0 }],
  U_L2_N: [{ x: 0, y: 0 }],
  U_L3_N: [{ x: 0, y: 0 }]
};
var dataTrendCurrent = {
  time: [0],
  I_L1: [{ x: 0, y: 0 }],
  I_L2: [{ x: 0, y: 0 }],
  I_L3: [{ x: 0, y: 0 }]
};
var dataTrendPower = {
  time: [0],
  Total_P: [{ x: 0, y: 0 }],
  Total_Q: [{ x: 0, y: 0 }],
  Total_S: [{ x: 0, y: 0 }]
};
var dataTrendPowerF = {
  time: [0],
  Cos_Phi_L1: [{ x: 0, y: 0 }],
  Cos_Phi_L2: [{ x: 0, y: 0 }],
  Cos_Phi_L3: [{ x: 0, y: 0 }]
};


var configCurrent = {
  type: "line",
  data: {
    datasets: [
      {
        //data: [],
        label: "I_L1",
        backgroundColor: color1,
        borderColor: color1,
        yAxisID: "amperes",
        pointRadius: 1,
        fill: false
      },
      {
        //data: [],
        label: "I_L2",
        backgroundColor: color2,
        borderColor: color2,
        yAxisID: "amperes",
        pointRadius: 1,
        fill: false
      },
      {
        //data: [],
        label: "I_L3",
        backgroundColor: color3,
        borderColor: color3,
        yAxisID: "amperes",
        pointRadius: 1,
        fill: false
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
    pan: {
      enabled: true,
      mode: "x",
      limits: {
        xmin: 1,
        ymin: 1,
        ymax: 5
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return dataTrendCurrent.time[tooltipItem[0].index];
        }
      },
      mode: "index"
    },
    zoom: {
      enabled: true,
      mode: "x",
      sensitivity: 1,
      limits: {
        max: 10,
        min: 0.5
      }
    },
    legend: {
      position: "left"
    },
    scales: {
      xAxes: [
        {
          type: "linear",
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            callback: function(value, index, values) {
              return dataTrendCurrent.time[value];
            }
          },
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

var configVoltage = {
  type: "line",
  data: {
    datasets: [
      {
        //data: [],
        label: "U_L1_N",
        backgroundColor: color1,
        borderColor: color1,
        yAxisID: "volts",
        pointRadius: 0,
        fill: false
      },
      {
        //data: [],
        label: "U_L2_N",
        backgroundColor: color2,
        borderColor: color2,
        yAxisID: "volts",
        pointRadius: 0,
        fill: false
      },
      {
        //data: [],
        label: "U_L3_N",
        backgroundColor: color3,
        borderColor: color3,
        yAxisID: "volts",
        pointRadius: 0,
        fill: false
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
    pan: {
      enabled: true,
      mode: "x",
      limits: {
        xmin: 1,
        ymin: 1,
        ymax: 5
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return dataTrendVoltage.time[tooltipItem[0].index];
        }
      },
      mode: "index"
    },
    zoom: {
      enabled: true,
      mode: "x",
      sensitivity: 1,
      limits: {
        max: 10,
        min: 0.5
      }
    },
    legend: {
      position: "left"
    },
    scales: {
      xAxes: [
        {
          type: "linear",
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            callback: function(value, index, values) {
              return dataTrendVoltage.time[value];
            }
          },
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

var configPower = {
  type: "line",
  data: {
    datasets: [
      {
        //data: [],
        label: "Active (w)",
        backgroundColor: color1,
        borderColor: color1,
        yAxisID: "power",
        pointRadius: 0,
        fill: false
      },
      {
        //data: [],
        label: "Reactive (var)",
        backgroundColor: color2,
        borderColor: color2,
        yAxisID: "power",
        pointRadius: 0,
        fill: false
      },
      {
        //data: [],
        label: "Apparent (VA)",
        backgroundColor: color3,
        borderColor: color3,
        yAxisID: "power",
        pointRadius: 0,
        fill: false
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
    pan: {
      enabled: true,
      mode: "x",
      limits: {
        xmin: 1,
        ymin: 1,
        ymax: 5
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return dataTrendPower.time[tooltipItem[0].index];
        }
      },
      mode: "index"
    },
    zoom: {
      enabled: true,
      mode: "x",
      sensitivity: 1,
      limits: {
        max: 10,
        min: 0.5
      }
    },
    legend: {
      position: "left"
    },
    scales: {
      xAxes: [
        {
          type: "linear",
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            callback: function(value, index, values) {
              return dataTrendPower.time[value];
            }
          },
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

var configPowerF = {
  type: "line",
  data: {
    datasets: [
      {
        //data: [],
        label: "L1",
        backgroundColor: color1,
        borderColor: color1,
        yAxisID: "cos(phi)",
        pointRadius: 0,
        fill: false
      },
      {
        //data: [],
        label: "L2",
        backgroundColor: color2,
        borderColor: color2,
        yAxisID: "cos(phi)",
        pointRadius: 0,
        fill: false
      },
      {
        //data: [],
        label: "L3",
        backgroundColor: color3,
        borderColor: color3,
        yAxisID: "cos(phi)",
        pointRadius: 0,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    title: {
      display: true,
      text: "POWER FACTOR"
    },
    pan: {
      enabled: true,
      mode: "x",
      limits: {
        xmin: 1,
        ymin: 1,
        ymax: 5
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return dataTrendPowerF.time[tooltipItem[0].index];
        }
      },
      mode: "index"
    },
    zoom: {
      enabled: true,
      mode: "x",
      sensitivity: 1,
      limits: {
        max: 10,
        min: 0.5
      }
    },
    legend: {
      position: "left"
    },
    scales: {
      xAxes: [
        {
          type: "linear",
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            callback: function(value, index, values) {
              return dataTrendPowerF.time[value];
            }
          },
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
          id: "cos(phi)",
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

window.trendCurrent = new Chart(ctxCurrent, configCurrent);
window.trendVoltage = new Chart(ctxVoltage, configVoltage);
window.trendPower = new Chart(ctxPower, configPower);
window.trendPowerF = new Chart(ctxPowerF, configPowerF);

ctxCurrent.ondblclick = function() {
  window.trendCurrent.resetZoom();
};

ctxVoltage.ondblclick = function() {
  window.trendVoltage.resetZoom();
};

ctxPower.ondblclick = function() {
  window.trendPower.resetZoom();
};

ctxPowerF.ondblclick = function() {
  window.trendPowerF.resetZoom();
};

/*******************************************************************************************************************************************
 *  												  Trends Update
 *******************************************************************************************************************************************/

function addDataTrendCurrent(dataJSON) {
  dataTrendCurrent = {
    time: [0],
    I_L1: [{ x: 0, y: 0 }],
    I_L2: [{ x: 0, y: 0 }],
    I_L3: [{ x: 0, y: 0 }]
  };
  var options = {
    month: "short",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  var size = dataJSON.length;
  for (var i = 0; i < size; i++) {
    dataTrendCurrent.time[i] = new Date(dataJSON[i]._time).toLocaleString(
      "en-US",
      options
    );
    dataTrendCurrent.I_L1[i] = { x: i, y: dataJSON[i].I_L1 };
    dataTrendCurrent.I_L2[i] = { x: i, y: dataJSON[i].I_L2 };
    dataTrendCurrent.I_L3[i] = { x: i, y: dataJSON[i].I_L3 };
  }

  configCurrent.data.labels = dataTrendCurrent.time;
  configCurrent.data.datasets[0].data = dataTrendCurrent.I_L1;
  configCurrent.data.datasets[1].data = dataTrendCurrent.I_L2;
  configCurrent.data.datasets[2].data = dataTrendCurrent.I_L3;

  window.trendCurrent.update();
  updateTable("c", configCurrent);
}

function addDataTrendVoltage(dataJSON) {
  dataTrendVoltage = {
    time: [0],
    U_L1_N: [{ x: 0, y: 0 }],
    U_L2_N: [{ x: 0, y: 0 }],
    U_L3_N: [{ x: 0, y: 0 }]
  };
  var options = {
    month: "short",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  var size = dataJSON.length;
  for (var i = 0; i < size; i++) {
    dataTrendVoltage.time[i] = new Date(dataJSON[i]._time).toLocaleString(
      "en-US",
      options
    );
    dataTrendVoltage.U_L1_N[i] = { x: i, y: dataJSON[i].U_L1_N };
    dataTrendVoltage.U_L2_N[i] = { x: i, y: dataJSON[i].U_L2_N };
    dataTrendVoltage.U_L3_N[i] = { x: i, y: dataJSON[i].U_L3_N };
  }

  configVoltage.data.labels = dataTrendVoltage.time;
  configVoltage.data.datasets[0].data = dataTrendVoltage.U_L1_N;
  configVoltage.data.datasets[1].data = dataTrendVoltage.U_L2_N;
  configVoltage.data.datasets[2].data = dataTrendVoltage.U_L3_N;

  window.trendVoltage.update();
  updateTable("v", configVoltage);
}

function addDataTrendPower(dataJSON) {
  dataTrendPower = {
    time: [0],
    Total_P: [{ x: 0, y: 0 }],
    Total_Q: [{ x: 0, y: 0 }],
    Total_S: [{ x: 0, y: 0 }]
  };
  var options = {
    month: "short",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  var size = dataJSON.length;
  for (var i = 0; i < size; i++) {
    dataTrendPower.time[i] = new Date(dataJSON[i]._time).toLocaleString(
      "en-US",
      options
    );
    dataTrendPower.Total_P[i] = { x: i, y: dataJSON[i].Total_P };
    dataTrendPower.Total_Q[i] = { x: i, y: dataJSON[i].Total_Q };
    dataTrendPower.Total_S[i] = { x: i, y: dataJSON[i].Total_S };
  }

  configPower.data.labels = dataTrendPower.time;
  configPower.data.datasets[0].data = dataTrendPower.Total_P;
  configPower.data.datasets[1].data = dataTrendPower.Total_Q;
  configPower.data.datasets[2].data = dataTrendPower.Total_S;

  window.trendPower.update();
  updateTable("p", configPower);
}

function addDataTrendPowerF(dataJSON) {
  dataTrendPowerF = {
    time: [0],
    Cos_Phi_L1: [{ x: 0, y: 0 }],
    Cos_Phi_L2: [{ x: 0, y: 0 }],
    Cos_Phi_L3: [{ x: 0, y: 0 }]
  };
  var options = {
    month: "short",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  var size = dataJSON.length;
  for (var i = 0; i < size; i++) {
    dataTrendPowerF.time[i] = new Date(dataJSON[i]._time).toLocaleString(
      "en-US",
      options
    );
    dataTrendPowerF.Cos_Phi_L1[i] = { x: i, y: dataJSON[i].Cos_Phi_L1 };
    dataTrendPowerF.Cos_Phi_L2[i] = { x: i, y: dataJSON[i].Cos_Phi_L2 };
    dataTrendPowerF.Cos_Phi_L3[i] = { x: i, y: dataJSON[i].Cos_Phi_L3 };
  }

  configPowerF.data.labels = dataTrendPowerF.time;
  configPowerF.data.datasets[0].data = dataTrendPowerF.Cos_Phi_L1;
  configPowerF.data.datasets[1].data = dataTrendPowerF.Cos_Phi_L2;
  configPowerF.data.datasets[2].data = dataTrendPowerF.Cos_Phi_L3;

  window.trendPowerF.update();
  updateTable("pf", configPowerF);
}

function updateTable(option, config) {
  var cl1 = [],
    cl2 = [],
    cl3 = [];

  cl1[0] = document.getElementById(option + "L1A");
  cl1[1] = document.getElementById(option + "L1Min");
  cl1[2] = document.getElementById(option + "L1Max");

  cl2[0] = document.getElementById(option + "L2A");
  cl2[1] = document.getElementById(option + "L2Min");
  cl2[2] = document.getElementById(option + "L2Max");

  cl3[0] = document.getElementById(option + "L3A");
  cl3[1] = document.getElementById(option + "L3Min");
  cl3[2] = document.getElementById(option + "L3Max");

  var l1 = config.data.datasets[0].data.map(a => a.y);
  var l2 = config.data.datasets[1].data.map(a => a.y);
  var l3 = config.data.datasets[2].data.map(a => a.y);

  cl1[0].innerHTML = parseFloat( l1.reduce((previous, current) => (current += previous)) / l1.length ).toFixed(2);
  cl1[1].innerHTML = parseFloat(Math.min(...l1)).toFixed(2);
  cl1[2].innerHTML = parseFloat(Math.max(...l1)).toFixed(2);

  cl2[0].innerHTML = parseFloat( l2.reduce((previous, current) => (current += previous)) / l2.length ).toFixed(2);
  cl2[1].innerHTML = parseFloat(Math.min(...l2)).toFixed(2);
  cl2[2].innerHTML = parseFloat(Math.max(...l2)).toFixed(2);

  cl3[0].innerHTML = parseFloat( l3.reduce((previous, current) => (current += previous)) / l3.length ).toFixed(2);
  cl3[1].innerHTML = parseFloat(Math.min(...l3)).toFixed(2);
  cl3[2].innerHTML = parseFloat(Math.max(...l3)).toFixed(2);
}

