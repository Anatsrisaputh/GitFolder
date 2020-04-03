// 5. ให้เขียนระบบ login
// ให้ใช้ prompt ในการถามใครเป็นคน login
// ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
// วิธีเช็ค Password
// ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”
// ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
// ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
// ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”


let login = prompt(" who are you ");
if (login == "Admin") {
  let password = prompt("Enter your password");
  if (password == "codecamp#5") {
    alert("Welcome");
  } else if (password == "" || null) {
    alert("Cancle");
  } else {
    alert(" Wrong Password ");
  }
} else if (login == "" || null) {
  alert("Cancle");
} else {
  (login != "Admin")
  alert("I don't know who you are");
}
