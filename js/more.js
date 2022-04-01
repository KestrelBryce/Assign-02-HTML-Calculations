  /* This function calculates the exchange rate for CAD to GBP. 
*/

function calculate() {
  // input
  let CAD_GBP = parseInt(document.getElementById('CAD-to-GBP-here').value)

  // naming constants and stuff
  const GBP_RATE = 0.6101231;
  let GBPConversion = CAD_GBP * GBP_RATE

  // use .toFixed(2) to round to two decimal places

  // output for CAD to GBP
  document.getElementById('GBPConversion').innerHTML = "insert words here"
}