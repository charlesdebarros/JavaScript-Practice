function deletePassenger(name, passengerList) {
    if (passengerList.length == 0) {
        console.log("There are no entries at the moment.");
    } else {
        for (var i = 0; i < passengerList.length; i++) {
            if(passengerList[i] == name) {
                list[i] = indefined;
            } else if (i == passengerList.length - 1){
                console.log("Passenger not found!");
            }
        }
    }
    return passengerList;
}