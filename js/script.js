  /* This function calculates the exchange rate for CAD to AUD and CAD to GBP. 
*/

function calculateAUD() {
  // input
  let CAD_AUD = document.getElementById('CAD-to-AUD-here').value;
  
  // naming constants and stuff
  const AUD_RATE = 1.0667808;
  let AUDConversion = CAD_AUD * AUD_RATE;

  // remember to use .toFixed(2) to round to two decimal places
  
 // output for CAD to AUD
document.getElementById('AUDResults').innerHTML = "Your Canadian dollars add up to $" + AUDConversion.toFixed(2) + " Australian dollars."
}

function calculateGBP() {
  // input
  let CAD_GBP = (document.getElementById('CAD-to-GBP-here').value);

  // naming constants and stuff
  const GBP_RATE = 0.6101231;
  let GBPConversion = CAD_GBP * GBP_RATE;

  // remember to use .toFixed(2) to round to two decimal places
  
 // output for CAD to GBP
document.getElementById('GBPResults').innerHTML = "Your Canadian dollars add up to £" + GBPConversion.toFixed(2) + " British pounds."
}