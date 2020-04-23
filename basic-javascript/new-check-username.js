let input = prompt('who are you')
if (input == "admin") {
  pass = prompt("what your password");
  if (pass == "codecamp5") {
    alert("welcome");
  } else if (pass == "" || pass == null) {
    alert("Cancle");
  } else alert("wrong password");

} else if (input == null) {
  alert("Cancle")
} else {
  alert("I don't know who you are")
}
