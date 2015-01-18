var passengerList =[];
var name;

function addPassenger(name, passengerList) {
    if (passengerList.length == 0) {
        passengerList.push(name);
    } else {
        for (var i = 0; i < passengerList.legnth; i++) {
            if (passengerList[i] == undefined) {
                passengerList[i] = name;
                console.log(passengerList);
                return passengerList;
            } else if (i == passengerList.length - 1) {
                passengerList.push(name);
                console.log(passengerList);
                return passengerList;
            }
        }
    }
}

passengerList = addPassenger("Bob", passengerList);
