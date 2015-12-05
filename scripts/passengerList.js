var passengerList = [];

function addPassenger ( name, list ) {
  if ( list.length == 0 ) {
    list.push(name);
  } else {
    for ( var i = 0; i < list.length; i++ ) {
      if ( typeof list[i] == 'undefined' ) {
        list[i] = name;
        return list;
      } else if ( i == list.length - 1) {
        list.push(name);
        return list;
      }
    }
  }
}

function deletePassenger ( name, list ){
  if ( list.length == 0 ) {
    console.log("List is empty!");
  } else {
    for ( var i = 0; i < list.length; i++ ) {
      if ( list[i] == name ) {
        list[i] = undefined;
        return list;
      } else if ( i == list.length -1) {
        console.log("Passenger not found!");
      }
    }
  }
  return list;
}

passengerList < addPassenger("Camilla Calico", passengerList);
passengerList < addPassenger("Ashlee Asencio", passengerList);
passengerList < addPassenger("Rocio Romain", passengerList);

console.log(passengerList);

passengerList = deletePassenger("Ashlee Asencio", passengerList);
passengerList = deletePassenger("Ashlee Asencio", passengerList); // generated a 'passenger not found message'


console.log(passengerList);