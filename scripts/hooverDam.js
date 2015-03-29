var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++){
  if (currentGen % 2 == 0){
    if (currentGen <= 4){
      totalMW += 62;
    	console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    } else if ( currentGen <= totalGen){
      totalMW += 124;
    	console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    };
  } else {
    	console.log("Generator #" + currentGen + " is off.");
  };
};

// function changePowerTotal(totalPower, genID, genStatus, genPower) {
//   if (genStatus == "on") {
//     totalPower += genPower;
//     alert("Generator #" + genID + " is now " + genStatus + ", adding " + genPower + " MW, for a total of " + totalPower + " MW!");
//   } else if (genStatus == "off") {
//     totalPower -= genPower;
//     alert("Generator #" + genID + " is now " + genStatus + ", removing " + genPower + " MW, for a total of " + totalPower + " MW!");
//   }
//   return totalPower;
// }