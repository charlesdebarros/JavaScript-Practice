var passengerList = [];
var name = "";

function addPassenger ( name, list ) {
    var list = [];
    if (list.length == 0) {
        list.push(name);
    } else {
        for (var i = 0; i < list.length; i++) {
            if(list[i] == undefined){
                list[i] = name;
                return list;
            } else if (i == list.length - 1) {
                list.push(name);
                return list;
            }
        }
    }
}

passengerList = addPassenger("Gregg Pollack", passengerList );
passengerList = addPassenger("Ashley Smith", passengerList );
passengerList = addPassenger("Jon Friskics", passengerList );

function deletePassenger ( name, passengerList ) {      
    if (passengerList.length == 0){
        console.log("passengerList is empty!");
    } else {
        for (var i = 0; i < passengerList.length; i++) {         
            if(passengerList[i] == name){    
                passengerList[i] = undefined;
                return passengerList;
            } else if (i == passengerList.length - 1) {
                console.log("Passenger not found!");
            }
        }
    }
    return passengerList;
}

document.write(passengerList);

