document.write("<h2>" + "'E' Counter: " + "</h2>" + "<br>");

function countE() {
    var phrase = prompt("Which phrase would you like to examine?");
    if (typeof(phrase) != "string") {
        alert("That's not a valid entry!");
        return false;
    } else {
        var countE = 0;
        for (var index = 0; index < phrase.length; index++){
            if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E' ) {
                countE++;
            }
        }
        document.write("There are " + countE + " E's in \"" + phrase + "\".");
        return true;
    }
}

countE();