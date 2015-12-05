function buildCoveTicketMaster(transport){
  var passengerNumber = 0;
  return function(name){
    passengerNumber++;
    alert("Here is your transportation ticket via the " + transport + ".\n" + 
          "Welcome to the Cold Closures Cove, " + name + "!\n" + 
          "You are passenger #" + passengerNumber + ".");
  }
};

var getSubmarineTicket = buildCoveTicketMaster("Submarine");

getSubmarineTicket("Mario");
getSubmarineTicket("Bob");