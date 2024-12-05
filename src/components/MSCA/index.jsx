const MSCA = () => {
  return (
    <div className="main">
      <div>1. Kiểm, đếm lại lô hàng</div>
      <div>2. Kiểm tra các lô hàng khác có trên mâm lô hàng bị MSCA</div>
      <div>3. Cân lại, chụp hình, copy chuyến bay</div>
      <div>
        4. Vào bill - messages - keyword: n "nếu không có địa chỉ thì copy từ
        excel" - send
      </div>
      <div>
        5. Lập biên bản MSCA: Vào bill - messages - keyword: c - điền thông tin:
        số kiện thực nhận, số ký thực nhận, số kiện thiếu, số ký kiện thiếu,
        MSCA 1 PC LDIN BULK/ULD - print: 2 bản - save word copy dest folder 2024
        tên chuyến bay
      </div>
      <div>
        6. Lập biên bản hải quan: Vào completed flights - nhập tên, số hiệu
        chuyến bay - messages - keyword: HQ MSCA - Điền thông tin form - print -
        chỉnh sửa thông tin - save word copy dest folder 2024 tên chuyến bay
      </div>
      <div>7. Check lists - Tích vào mục thứ 3 - Điền thông tin - send</div>
      <div>8. Ghi sổ MSCA</div>
      <div>
        9. Gửi sai khác: Hỏi hàng hóa định danh - copy số định danh - hàng hóa
        sai khác: điền thông tin - send
      </div>
    </div>
  );
};

export default MSCA;
