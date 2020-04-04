// แปลง Code ดังกล่าวเป็น
// if-else statement

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

while (true) {
  let browser = prompt("Please enter your browser ")
  if (browser == "Edge") {
    alert(`You have got the ${browser}`)
    break;
  } else if (browser == "Chrome"||"Firfox"||"Safari"||"Opera" ) {
    alert( `You have got the ${browser} Okay we support these browsers too` );
    break;
  } else {
    alert( `You have got the ${browser} We hope that this page looks ok! ` );
  }
}
