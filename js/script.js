  /* This function calculates the exchange rate for CAD to AUD. 
*/

function calculate() {
  // input
  let CAD_AUD = document.getElementById('CAD-to-AUD-here').value;
  //let CAD_GBP = parseInt(document.getElementById('CAD-to-GBP-here').value);

  // naming constants and stuff
  //const AUD_RATE = 1.0667808;
  //const GBP_RATE = 0.6101231;
  //let AUDConversion = CAD_AUD * AUD_RATE;
  //let GBPConversion = CAD_GBP * GBP_RATE;

  // remember to use .toFixed(2) to round to two decimal places
//testing
document.getElementById('AUDResults').innerHTML = "testing"
  
  // output for CAD to AUD
  document.getElementById('AUDConversion').innerHTML = "insert words here" + AUDConversion.toFixed(2) + "yes"

  // output for CAD to GBP
 // document.getElementById('GBPConversion').innerHTML = "insert words here"
}