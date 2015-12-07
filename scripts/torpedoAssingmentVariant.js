function makeTorpedoAssigner(passengerArray){
  return function(name){
    for (var i = 0; i < passengerArray.length; i++){
      if(passengerArray[i] == name) {
        alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo #" + (i+1) + "!");
      }
    }
  };
};

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Chewie");