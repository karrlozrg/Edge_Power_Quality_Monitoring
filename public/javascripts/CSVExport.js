/*******************************************************************************************************************************************
 *  												  Trends config
 *******************************************************************************************************************************************/

function exportToCsv(filename, rows) {
  var processRow = function(row) {
    var finalVal = "";
    for (var j = 0; j < row.length; j++) {
      var innerValue = row[j] === null ? "" : row[j].toString();
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString();
      }
      var result = innerValue.replace(/"/g, '""');
      if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
      if (j > 0) finalVal += ",";
      finalVal += result;
    }
    return finalVal + "\n";
  };

  var csvFile = "";
  for (var i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i]);
  }

  var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

var data = [[]];


function downloadCSV(option) {
  switch (option) {
    case "Current":
      data.push(['time', 'I_L1', 'I_L2', 'I_L3']);
      for (i in dataTrendCurrent.time) {
        data.push([
          dataTrendCurrent.time[i],
          dataTrendCurrent.I_L1[i].y,
          dataTrendCurrent.I_L2[i].y,
          dataTrendCurrent.I_L3[i].y
        ]);
      }
      break;

    case "Voltage":
    data.push(["time", "U_L1_N", "U_L1_N", "U_L3_N"]);
      for (i in dataTrendVoltage.time) {
        data.push([
          dataTrendVoltage.time[i],
          dataTrendVoltage.U_L1_N[i].y,
          dataTrendVoltage.U_L2_N[i].y,
          dataTrendVoltage.U_L3_N[i].y
        ]);
      }
      break;

    case "Power":
    data.push(["time", "Total_P", "Total_Q", "Total_S"]);
      for (i in dataTrendPower.time) {
        data.push([
          dataTrendPower.time[i],
          dataTrendPower.Total_P[i].y,
          dataTrendPower.Total_Q[i].y,
          dataTrendPower.Total_S[i].y
        ]);
      }
      break;

    case "Power Factor":
    data.push(["time", "Cos_Phi_L1", "Cos_Phi_L2", "Cos_Phi_L3"]);
      for (i in dataTrendPowerF.time) {
        data.push([
          dataTrendPowerF.time[i],
          dataTrendPowerF.Cos_Phi_L1[i].y,
          dataTrendPowerF.Cos_Phi_L2[i].y,
          dataTrendPowerF.Cos_Phi_L3[i].y
        ]);
      }
      break;
  }

  exportToCsv(option + ".csv", data);
  data = [[]];
}
