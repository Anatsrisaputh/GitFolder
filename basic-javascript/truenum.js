// ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
// ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 
// โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก 
// ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น

let trueNumber = 19;
let random;
while (true) {
  random = prompt(Number);
 if (random == trueNumber) {
   alert("Correct!!!");
   break;
 } else if (random > trueNumber) {
   alert("Too hight");
 } else {
   alert("Too low");
 }
}
