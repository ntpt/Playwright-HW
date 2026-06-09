// 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}   
console.log(`Tổng từ 1 đến 100: ${sum}`);

//2 In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
  console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 3. Tạo một mảng chửa các số lẻ từ 1 đến 99
let oddNumbers = [];  
for (let i = 1; i < 100; i += 2) {
  oddNumbers.push(i);
}   
console.log(`Các số lẻ từ 1 đến 99: ${oddNumbers}`);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự
const username = "user";
for (let i = 1; i <= 10; i++) {
  console.log(`${
    username + i
    }@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc mang doanh thu như sau {"month": 2, "total": 100}
const revenues = [
    { month: 1, total: 100 },
    { month: 2, total: 150 }, 
    { month: 3, total: 200 },
    { month: 4, total: 250 },   
    { month: 5, total: 300 },
    { month: 6, total: 350 },
    { month: 7, total: 400 },   
    { month: 8, total: 450 },
    { month: 9, total: 500 },
    { month: 10, total: 550 },
    { month: 11, total: 600 },
    { month: 12, total: 650 },
];
let totalRevenue = 0;
for (let i = 0; i < revenues.length; i++) {
    totalRevenue += revenues[i].total;
}
console.log(`Tổng doanh thu của 12 tháng: ${totalRevenue}`);
