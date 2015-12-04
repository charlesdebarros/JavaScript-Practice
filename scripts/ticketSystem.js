var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55],["Cedar Coaster", 20],["Ferris Wheel of Firs", 90]];
    
var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

// allRides -> the array of the rides and their waiting time
// passRides -> the array of the next available Fast Pass rides
// pick -> the actual ride for which our customer would like a ticket.

var wantsRide = "Cedar Coaster";

buildTicket(parkRides, fastPassQueue, wantsRide)();

function buildTicket (allRides, passRides, pick){
	if (passRides[0] == pick){
		var pass = passRides.shift();
		return function(){alert("Quick! You've got a Fast Pass to " + pass + "!");}; // this function is treated as an expression and being returned directly.
	} else {
		for(var i = 0; i < allRides.length; i++){
			if(allRides[i][0] == pick){
				return function(){ alert("A ticket is printing for " + pick + "!\n" + "Your wait time is about " + allRides[i][1] + " minutes.");
				};
			}
		}
	}
}

ticket();
