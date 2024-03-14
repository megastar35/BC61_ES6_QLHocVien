import Person from "./Person.js";

export default class Employee extends Person {
  constructor(hoTen, diaChi, maSo, email, soNgayLam, Luong) {
    super(hoTen, diaChi, maSo, email);
    this.soNgayLam = soNgayLam;
    this.Luong = Luong;
  }
  tinhLuong = function () {
    return Number(this.luong) * Number(this.soNgayLam);
  };
  renderEmployeeForm = function () {
    let formContent = `
  <div class="col-6 mt-4">
    <label for="luong">Lương</label>
    <input
      type="number"
      class="form-control"
      id="luong"
      name="luong"
      required
    />
    <div id="invalidLuong" class="invalid-warning"></div>
  </div>
  <div class="col-6 mt-4">
    <label for="soNgayLam">Số ngày làm</label>
    <input
      type="number"
      class="form-control"
      id="soNgayLam"
      name="soNgayLam"
      required
    />
    <div id="invalidSoNgayLam" class="invalid-warning"></div>

  </div>
          `;
    document.getElementById("formContainer").innerHTML += formContent;
  };
  renderEmployeeTable = function () {
    return `
    <tr >
      <td>${this.maSo}</td>
      <td>${this.hoTen}</td>
      <td>${this.email}</td>
      <td>${this.diaChi}</td>
      <td>${this.luong}</td>
      <td>${this.soNgayLam}</td>
      <td>${this.tinhLuong()}</td>
    </tr>
  `;
  };
}
