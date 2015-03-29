var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear level: LOW\nStill wanna ride?");
  } else if ( fear >= 200 && fear >= 300){
    return confirm("Fear level: MEDIUM\nThink you'll make it?");
  } else {
    return confirm("Fear level: HIGH\nHave a death wish?");      
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);