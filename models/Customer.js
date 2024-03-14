import Person from "./Person.js";

export default class Customer extends Person {
  constructor(hoTen, diaChi, maSo, email, tenCongTy, triGiaHoaDon, danhGia) {
    super(hoTen, diaChi, maSo, email);
    this.tenCongTy = tenCongTy;
    this.triGiaHoaDon = triGiaHoaDon;
    this.danhGia = danhGia;
  }
  renderCustomerForm = function () {
    let formContent = `
  <div class="col-6 mt-4">
    <label for="tenCongTy">Tên công ty</label>
    <input
      type="text"
      class="form-control"
      id="tenCongTy"
      name="tenCongTy"
      required
    />
    <div id="invalidCongTy" class="invalid-warning"></div>
  </div>
  <div class="col-6 mt-4">
    <label for="triGiaHoaDon">Trị giá hóa đơn</label>
    <input
      type="text"
      class="form-control"
      id="triGiaHoaDon"
      name="triGiaHoaDon"
      required
    />
    <div id="invalidTriGiaHoaDon" class="invalid-warning"></div>
  </div>
  <div class="col-12 mt-4">
  <label for="danhGia">Đánh giá</label>
  <input
    type="text"
    class="form-control"
    id="danhGia"
    name="danhGia"
    required
  />
  <div id="invalidDanhGia" class="invalid-warning"></div>
</div>
          `;
    document.getElementById("formContainer").innerHTML += formContent;
  };
  renderCustomerTable = function () {
    return `
    <tr >
      <td>${this.maSo}</td>
      <td>${this.hoTen}</td>
      <td>${this.email}</td>
      <td>${this.diaChi}</td>
      <td>${this.tenCongTy}</td>
      <td>${this.triGiaHoaDon}</td>
      <td>${this.danhGia}</td>
    </tr>
  `;
  };
}
