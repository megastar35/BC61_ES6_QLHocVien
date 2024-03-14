class Customer extends Person {
  constructor(hoTen, diaChi, maSo, email, tenCongTy, triGiaHoaDon, danhGia) {
    super(hoTen, diaChi, maSo, email);
    this.tenCongTy = tenCongTy;
    this.triGiaHoaDon = triGiaHoaDon;
    this.danhGia = danhGia;
  }
  renderCustomerForm() {}
}
