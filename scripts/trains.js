var maximum = 20, minimum = 1;
var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var trainsOperational = randomNumber ;
var totalTrains = 20;

for (var runningTrain = 1; runningTrain <= trainsOperational; runningTrain++){
   document.write("Train # " + runningTrain + " is running." + "<br>");
};

document.write("However...");

for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++){
  document.write("Train # " + stoppedTrain + " is not operational." + "<br>");
};