let input;
if (input = prompt("Please insert your age")) {
  input >= 18 && input <= 60;
  alert(`Your age is ${input} and your age not over limit`)
} else {
  alert(`Your age is ${input} and your age over limit`)
}
function ageRang() {
  let age = prompt("Please input your age")
  if (age >= 18 && age <=60) {
    alert(`Your age is ${age} and your age not over limit`)
  } else {
    alert(`Your age is ${age} and your age  over limit`)
  }
}