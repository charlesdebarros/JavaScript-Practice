var colour = prompt("What's your favourite primary colour?", "Type your favourite colour here:");

switch(colour){
  case 'red': 
    console.log("Red is a beutiful color!");
    break;

  case 'blue':
    console.log("That's my favourite colour, too!");
    break;

  case 'yellow':
    console.log("OMG! Yellow is amazing!!!");
    break;

    default:
      console.log("I don't think that's a primary colour!");
    break;
}