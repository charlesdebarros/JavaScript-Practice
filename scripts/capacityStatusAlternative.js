function capacityStatus(numPassengers, capacity){
  if (numPassengers == capacity) {
    noSeats();
  } else {
    seatsAvailable();
  }

  function noSeats (){
    alert("No seats available!");
    return false;
  }

  function seatsAvailable(){
    alert("There are " + (capacity - numPassengers) + " seats left!");
    return true;
  }
};
capacityStatus(20, 60);