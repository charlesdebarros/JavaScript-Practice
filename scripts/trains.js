var maximum = 20, minimum = 1;
var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var totalTrains = 20;
var trainsOperational = randomNumber ;
var dayOfWeek = new Date(); 

if (trainsOperational > 0) {
    if (trainsOperational == totalTrains){
        document.write("All trains are operational at this time. Have a great day!" + "<br>");
    } else {
        for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
            if (trainNumber <= trainsOperational && trainNumber != 3) {
                document.write("Train # " + trainNumber + " is running." + "<br>");
            } else if (trainNumber == 8 || trainNumber == 17) {
                document.write("Train # " + trainNumber + " begins running at noon." + "<br>");
            } else if (trainNumber == 3 && dayOfWeek.getDate() != 0) {
                document.write("Train # 3 only runs on Sundays." + "<br>");
            } else {
                document.write("Train # " + trainNumber + " is not operational." + "<br>");
            }
        }
    }
} else {
    document.write("No trains are operation at the moment. Apologies for that." + "<br>");
};

document.write("<br>Today is " + dayOfWeek.toDateString() + ".");
