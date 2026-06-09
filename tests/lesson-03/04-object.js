// 1. Tạo một object car với thuộc tính name = "Toyota", model = "Corolla", year = 2021. Sau đó in ra năm sản xuất của chiếc xe.
const car = {
  name: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(`Năm sản xuất của xe ${car.name}: ${car.year}`);

// 2. Tạo một object person có thuộc tính name, address (là một object có các thuộc tính street, city, country). Sau đó in ra tên đường của người này.
const person = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
console.log(`Địa chỉ của ${person.name}: ${person.address.street}`);

// 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính name và grades (là một object có các thuộc tính math, english).
const student = {
  name: "Alice",
  grades: {
    math: 85,
    english: 90,
  },
};
console.log(`Điểm môn Toán của ${student.name}: ${student.grades["math"]}`);
console.log(`Điểm môn Anh của ${student.name}: ${student.grades.english}`);

// 4. Tạo một object setting để quản lý cài đặt của ứng dụng. Object setting nên có các thuộc tính như volume, brightness. Thay đổi volume và in ra object setting sau khi thay đổi.
const setting = {
  volume: 50,
  brightness: 70,
};
setting.volume = 80;
console.log(setting);

// 5. Tạo một object bike và sau đó thêm thuộc tính color vào object đo.
let bike = {
  brand: "Giant",
};
bike.color = "Red";
console.log(bike);

// 6. Tạo một object employee với thuộc tính: name, age và xóa thuộc tính age khỏi object này.
let employee = {
  name: "Bob",
  age: 30,
};
delete employee.age;
console.log(employee);

/* 7. Một trường học có các lớp học và học sinh như sau:
    - classA: An, Bình, Châu
    - classB: Đào, Hương, Giang
    Hãy viết code để đáp ứng yêu cầu sau:
    - Khai báo tên biến: school
    - Tên class là tên thuộc tính, giá trị của các thuộc tính là một mảng chứa tên học sinh
*/
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
