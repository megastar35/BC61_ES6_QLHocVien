import ListPerson from "./models/ListPerson.js";
import Person from "./models/Person.js";
import Student from "./models/Student.js";
import Customer from "./models/Customer.js";
import Employee from "./models/Employee.js";

let student = new Student();
let employee = new Employee();
let customer = new Customer();

let listPerson = new ListPerson();
let userTypeSelect = document.getElementById("loaiDoiTuong");

const renderFormInput = () => {
  const selectedType = userTypeSelect.value;
  // console.log(selectedType);
  // let formContent = "";
  if (selectedType === "student") {
    student.renderBasicForm();
    student.renderStudentForm();
  } else if (selectedType === "employee") {
    employee.renderBasicForm();
    employee.renderEmployeeForm();
  } else if (selectedType === "customer") {
    customer.renderBasicForm();
    customer.renderCustomerForm();
  } else if (selectedType === "none") {
    document.getElementById("formContainer").innerHTML = "";
  }
  // document.getElementById("formContainer").innerHTML = formContent;
};
userTypeSelect.addEventListener(
  "change",
  renderFormInput.bind(userTypeSelect.value)
);
document.getElementById("btnThem").onclick = function () {
  const arrField = document.querySelectorAll("#formContainer input");
  console.log(arrField);

  let person = new Person();
  arrField.forEach((field, index) => {
    let { id, value } = field;
    person[id] = value;
  });
  // let isValid = true;
  // isValid = checkEmptyValue(person.maSo, "spanMaSo");
  // if (isValid) {
  // }
  listPerson.addPerson(person);
  renderPersonList();
  document.getElementById("personForm").reset();
  saveDataLocal();
};
// hàm render danh sách person
const renderPersonList = (arr = listPerson.personList) => {
  let content = "";
  let tableHeader = `
  <tr>
  <th scope="col">Mã số</th>
  <th scope="col">Họ tên</th>
  <th scope="col">Email</th>
  <th scope="col">Địa chỉ</th>
  <th scope="col">Hành động</th>
</tr>`;
  arr.forEach((person, index) => {
    let pers = new Person();
    pers = { ...pers, ...person };
    // const { maSo, hoTen, email, diaChi } = pers;
    // console.log(pers);
    content += `${pers.renderBasicInfo()}`;
  });
  document.getElementById("theadList").innerHTML = tableHeader;
  document.getElementById("tbodyList").innerHTML = content;
};
const renderEmployeeList = (arr = listPerson.personList) => {
  let content = "";
  let tableHeader = ` 
  <tr>
    <td>Mã số</td>
    <td>Họ tên</td>
    <td>Email</td>
    <td>Địa chỉ</td>
    <td>Lương theo ngày</td>
    <td>Số ngày làm</td>
    <td>Tổng lương</td>
</tr>`;
  arr.forEach((person, index) => {
    // console.log(person);
    if ("luong" in person) {
      let employee = new Employee();
      employee = { ...employee, ...person };
      content += `${employee.renderEmployeeTable()}`;
    }
  });
  document.getElementById("theadList").innerHTML = tableHeader;
  document.getElementById("tbodyList").innerHTML = content;
};
const renderStudentList = (arr = listPerson.personList) => {
  let content = "";
  let tableHeader = ` 
  <tr>
    <td>Mã số</td>
    <td>Họ tên</td>
    <td>Email</td>
    <td>Địa chỉ</td>
    <td>Điểm Toán</td>
    <td>Điểm Lý</td>
    <td>Điểm Hóa</td>
    <td>Điểm Trung Bình</td>
</tr>`;
  arr.forEach((person, index) => {
    // console.log(person);
    if ("toan" in person) {
      let student = new Student();
      student = { ...student, ...person };
      content += `${student.renderStudentList()}`;
    }
  });
  document.getElementById("theadList").innerHTML = tableHeader;
  document.getElementById("tbodyList").innerHTML = content;
};
const renderCustomerList = (arr = listPerson.personList) => {
  let content = "";
  let tableHeader = ` 
  <tr>
    <td>Mã số</td>
    <td>Họ tên</td>
    <td>Email</td>
    <td>Địa chỉ</td>
    <td>Tên công ty</td>
    <td>Trị giá hóa đơn</td>
    <td>Đánh Giá</td>
</tr>`;
  arr.forEach((person, index) => {
    // console.log(person);
    if ("tenCongTy" in person) {
      let customer = new Customer();
      customer = { ...customer, ...person };
      content += `${customer.renderCustomerTable()}`;
    }
  });
  document.getElementById("theadList").innerHTML = tableHeader;
  document.getElementById("tbodyList").innerHTML = content;
};

// Hàm giúp lưu trữ dữ liệu xuống localStorage
function saveDataLocal() {
  let stringData = JSON.stringify(listPerson.personList);
  localStorage.setItem("AcademyList", stringData);
  renderTableList();
}

// Hàm giúp lấy dữ liệu từ localStorage
function getDataLocal() {
  let stringData = localStorage.getItem("AcademyList");
  // kiểm tra nếu không bị null thì thêm dữ liệu vào mảng
  if (stringData) {
    listPerson.personList = JSON.parse(stringData);
    renderPersonList();
  }
}
getDataLocal();

// Viết hàm xử lí khi người dùng click vào nút xoá, sẽ lấy id cần xoá ra và thực hiện xoá bằng phương thức deletePerson
const deletePerson = (id) => {
  let index = listPerson.personList.findIndex((person, index) => {
    return person.maSo == id;
  });
  if (index != -1) {
    listPerson.delPerson(index);
    saveDataLocal();
    renderPersonList();
  }
};
// Hàm giúp lấy thông tin món ăn trong mảng
const getDetailPerson = (id) => {
  // tìm phần tử trong mảng
  let person = listPerson.personList.find((per, index) => {
    return per.maSo == id;
  });
  if ("toan" in person) {
    student.renderBasicForm();
    student.renderStudentForm();
  } else if ("luong" in person) {
    employee.renderBasicForm();
    employee.renderEmployeeForm();
  } else if ("tenCongTy" in person) {
    customer.renderBasicForm();
    customer.renderCustomerForm();
  }
  // gọi tới tất cả input, select
  let arrField = document.querySelectorAll("form input");
  arrField.forEach((item, index) => {
    let { id } = item;
    item.value = person[id];
  });

  document.getElementById("maSo").readOnly = true;
};
// Hàm cập nhật thông tin người dùng
const updatePerson = () => {
  let arrField = document.querySelectorAll("form input");
  let person = new Person();
  arrField.forEach((item, index) => {
    let { id, value } = item;
    person[id] = value;
  });
  // tìm kiếm phần tử trong mảng
  let index = listPerson.personList.findIndex((item, index) => {
    return item.maSo == person.maSo;
  });
  if (index != -1) {
    listPerson.updatePerson(person, index);
    document.getElementById("personForm").reset();
    renderPersonList();
    employee.renderEmployeeTable();
    saveDataLocal();
    document.getElementById("maSo").readOnly = false;
  }
};
document.getElementById("btnCapNhat").onclick = updatePerson;

let seleTypeTable = document.getElementById("seleTableType");
const changeTableList = () => {
  const seleTypeValue = seleTypeTable.value;
  const newList = [];
  // console.log(first);
  if (seleTypeValue === "employee") {
    renderEmployeeList();
  } else if (seleTypeValue === "student") {
    renderStudentList();
  } else if (seleTypeValue === "customer") {
    renderCustomerList();
  } else if (seleTypeValue === "person") {
    renderPersonList();
  }
};
seleTypeTable.addEventListener(
  "change",
  changeTableList.bind(seleTypeTable.value)
);

const renderTableList = () => {};
window.onload = () => {
  window.deletePerson = (id) => {
    console.log(id);
    deletePerson(id);
  };
  window.getDetailPerson = (id) => {
    getDetailPerson(id);
  };
};
