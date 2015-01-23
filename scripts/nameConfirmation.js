var gotName = false;

while(gotName == false){
  var userName = prompt("What's your name?");
  
  if(confirm("Please click 'OK' to confirm your name is " + userName + ".")){
    alert("Thank you, " + userName + "!");
    gotName = true;
  }
}