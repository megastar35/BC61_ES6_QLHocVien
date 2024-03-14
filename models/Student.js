import Person from "./Person.js";

export default class Student extends Person {
  constructor(hoTen, diaChi, maSo, email, toan, hoa, ly) {
    super(hoTen, diaChi, maSo, email);
    this.toan = toan;
    this.hoa = hoa;
    this.ly = ly;
  }
  tinhDiemTrungBinh = function () {
    return (Number(this.toan) + Number(this.hoa) + Number(this.ly)) / 3;
  };
  renderStudentList = function () {
    return `
    <tr>
    <td>${this.maSo}</td>
    <td>${this.hoTen}</td>
    <td>${this.email}</td>
    <td>${this.diaChi}</td>
    <td>${this.toan}</td>
    <td>${this.ly}</td>
    <td>${this.hoa}</td>
    <td>${this.tinhDiemTrungBinh()}</td>
    </tr>`;
  };
  renderStudentForm() {
    let formContent = `
  <div class="col-4 mt-4">
    <label for="toan">Toán</label>
    <input
      type="number"
      class="form-control"
      id="toan"
      name="toan"
      max="10"
      required
    />
    <span id="spanToan" class="text-danger"></span>
  </div>
  <div class="col-4 mt-4">
    <label for="hoa">Hóa</label>
    <input
      type="number"
      class="form-control"
      id="hoa"
      name="hoa"
      max="10"
      required
    />
    <span id="spanHoa" class="text-danger"></span>
  </div>
  <div class="col-4 mt-4">
    <label for="ly">Lý</label>
    <input
      type="number"
      class="form-control"
      id="ly"
      name="ly"
      max="10"
      required
    />
    <span id="spanLy" class="text-danger"></span>

  </div>
    
  `;
    document.getElementById("formContainer").innerHTML += formContent;
  }
}
