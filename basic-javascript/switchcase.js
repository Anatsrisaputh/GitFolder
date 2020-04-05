// แปลง Code ดังกล่าวเป็น
// if-else statement

switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Okay we support these browsers too');
    break;

  default:
    alert('We hope that this page looks ok!');
}

while (true) {
  let browser = prompt("Please enter your browser ")
  if (browser === "Edge") {
    alert(`You have got the ${browser}`)
    break;
  } else if (browser === "Chrome" || browser === "Firfox" || browser === "Safari" || browser === "Opera") {
    alert(`You have got the ${browser} Okay we support these browsers too`);
    break;
  } else if (browser == null) {
    alert("Cancle");
    break;
  } else {
    alert(`You have got the ${browser} We hope that this page looks ok! `);
  }
}

// แปลง Code ดังกล่าวเป็น
// Switch case

let a = +prompt('a?', '');

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert('2,3');
}

let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1)
    break;

  case 2:
    alert("2,3");
    break;
  case 3:
    alert("2,3");
    break;
  default:
    alert(`${a} Not in rank number`);
    break;
}