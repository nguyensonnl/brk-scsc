const FDCA = () => {
  return (
    <div className="main">
      <h3>1. FDCA DEST SGN</h3>
      <h3>2. FDCA WRONG DEST</h3>
      <ol>
        <li>Cân ký</li>
        <li>
          Chụp hình: talon, xung quanh kiện hàng, các giấy tờ có trên kiện hàng,
          ký đã cân lô hàng, biên bản cùng kiện hàng copy thư mục chuyến bay
        </li>
        <li>Lập biên bản wrong dest, dán lên kiện hàng</li>
        <li>
          Thao tác trên handhelds:
          <ol>
            <li>Vào chuyến bay</li>
            <li>CHọn keys</li>
            <li>CHọn awb: nhập awb</li>
            <li>Nhập số ký</li>
            <li>Hỏi có muốn tạo new awb?Yest</li>
            <li>Nhận rồi dán group vào lô hàng</li>
          </ol>
        </li>
        <li>Add group lô hàng</li>
        <li>Chỉnh sửa dest cho lô hàng</li>
        <li>Biên bản fdca</li>
        <li>Biên bản hq</li>
        <li>Gửi mail, mark máy</li>
        <li>Check list</li>
        <li>Ghi sổ</li>
      </ol>
    </div>
  );
};
export default FDCA;
