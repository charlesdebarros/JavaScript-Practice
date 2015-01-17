var maximum = 20, minimum = 1;
var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var trainsOperational = randomNumber ;
var lateDeparture = trainNumber == randomNumber
var totalTrains = 20;


for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= trainsOperational) {
        document.write("Train # " + trainNumber + " is running." + "<br>");
    } else if (trainNumber == 8 || trainNumber == 17) {
        document.write("Train # " + trainNumber + " begins running at noon." + "<br>");
    } else {
        document.write("Train # " + trainNumber + " is not operational." + "<br>");
    }
};
