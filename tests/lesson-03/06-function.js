// 1. Viết hàm multipl nhận 2 số a và b, in ra kết quả của a nhân b. Gọi hàm với 2 cặp giá trị khác nhau
function multipl(a, b) {
  const result = a * b;
  console.log(`Kết quả của ${a} nhân ${b} là: ${result}`);
}
multipl(5, 3);
multipl(7, 4);

// 2. Viết hàm findMin nhận 3 tham số a, b, c và trả về giá trị nhỏ nhất trong 3 số đó. Gọi hàm và in với 2 bộ số khác nhau
function findMin(a, b, c) {
  const min = Math.min(a, b, c);
  console.log(`Giá trị nhỏ nhất trong ${a}, ${b}, ${c} là: ${min}`);
}
findMin(5, 3, 8);
findMin(7, -4, 2);

/* 3. Viết hàm getTopStudents nhận 2 tham số
- students: mảng các object, mỗi object có 2 thuộc tính name và grade
- threshold: số điểm tối thiểu để được xem là top
Hàm trả về mảng mới chứa tên của các sinh viên có điểm lớn hơn hoặc bằng threshold. Gọi hàm với danh sách thực tế và in ra kết quả
*/
function getTopStudents(students, threshold) {
  let topStudents = [];   
    for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= threshold) {
      topStudents.push(students[i].name);
    }
    }
    return topStudents;
}
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 78 },
  { name: "Charlie", grade: 92 },
  { name: "David", grade: 65 },
];
const threshold = 80;
const topStudents = getTopStudents(students, threshold);
console.log(`Các sinh viên có điểm lớn hơn hoặc bằng ${threshold}: ${topStudents}`);

/* 4. Viết hàm calculateArea nhận 3 tham số 
- principal: số tiền gửi ban đầu (số)
- rate: lãi suất hàng năm (số thập phân)
- years: số năm gởi
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: total = principal + (principal * rate * years)/100. Gọi hàm với các giá trị thực tế và in ra kết quả
*/
function calculateInterest(principal, rate, years) {
  return principal + (principal * rate * years) / 100;
}

const principal = 1000000;
const rate = 4.5;
const years = 3;

console.log(
  `Tổng tiền sau ${years} năm: ${calculateInterest(principal, rate, years)}`
);