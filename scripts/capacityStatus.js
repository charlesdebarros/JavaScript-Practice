function capacityStatus(numPassengers, capacity){
  var noSeats = function(){
    alert("No seats available!");
    return false;
  }
  var seatsAvailable = function(){
    alert("There are " + (capacity - numPassengers) + " seats left!");
    return true;
  }

  if (numPassengers == capacity) {
    noSeats();
  } else {
    seatsAvailable();
  }
};

capacityStatus(60, 60);