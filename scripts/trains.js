var maximum = 20, minimum = 1;
var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var trainsOperational = randomNumber ;
var totalTrains = 20;


for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= trainsOperational) {
    document.write("Train # " + trainNumber + " is running." + "<br>");
    } else {
    document.write("Train # " + trainNumber + " is not operational." + "<br>");
    }
};
