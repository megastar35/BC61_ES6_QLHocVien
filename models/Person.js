export default class Person {
  constructor(hoTen, diaChi, maSo, email) {
    this.hoTen = hoTen;
    this.diaChi = diaChi;
    this.maSo = maSo;
    this.email = email;
  }
  renderBasicForm = function () {
    // const selectedType = userTypeSelect.value;
    let formContent = `
  <div class="col-6">
    <label for="maSo">Mã số:</label>
    <input
      type="text"
      class="form-control"
      id="maSo"
      name="maSo"
      required
    />
    <div id="invalidMaSo" class="text-danger"></div>
  </div>
  <div class="col-6">
    <label for="hoTen">Họ Tên:</label>
    <input
      type="text"
      class="form-control"
      id="hoTen"
      name="normalUserName"
      required
    />
    <div id="invalidHoTen" class="text-danger"></div>
  </div>
  <div class="col-6">
    <label for="email">Email:</label>
    <input
      type="email"
      class="form-control"
      id="email"
      name="email"
      required
    />
    <div id="invalidEmail" class="text-danger"></div>
  </div>
  <div class="col-6">
    <label for="diaChi">Địa Chỉ:</label>
    <input
      type="text"
      class="form-control"
      id="diaChi"
      name="diaChi"
      required
    />
    <div id="invalidDiaChi" class="text-danger"></div>
  </div>
          `;
    document.getElementById("formContainer").innerHTML = formContent;
  };
  renderBasicInfo = function () {
    return `
    <tr>
      <td>${this.maSo}</td>
      <td>${this.hoTen}</td>
      <td>${this.email}</td>
      <td>${this.diaChi}</td>
      <td>
      <button onclick="deletePerson('${this.maSo}')" data-id="${this.maSo}" id="btnXoaNguoiDung" class="btn btn-danger">Xoá</button>
      <button onclick="getDetailPerson('${this.maSo}')" class="btn btn-warning">Sửa</button>
      </td>
    </tr>
    `;
  };
}
