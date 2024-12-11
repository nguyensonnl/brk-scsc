const KhaiThacHangLanh = () => {
  return (
    <div className="main">
      <h3>Khai Thác Hàng Lạnh</h3>
      <ol>
        <li>
          Điện đổ code per, bill không nhiệt độ, nhiệt độ trên hàng: 0 - 2 deg,
          move theo hàng, nếu là lô cá hồi, thì linh động nếu các kho 2 - 8 hết
          chỗ thì move sang 0 - 2 deg
        </li>
        <li>
          Lô hàng có mawb: 2 - 8, hawb: 15 - 25
          <ol>
            <li>
              Kiểm tra nhiệt độ trên hàng nếu có thì ưu tiên nhiệt độ trên hàng.
            </li>
            <li>
              Kiêm tra nhiệt độ trên hàng nếu không có thì ưu tiên nhiệt độ cao
              hơn.
            </li>
            <li>Kiểm tra các mục trong bill, điện FWB, FHL</li>
            <li>Mark máy,Gửi mail xác định nhiệt độ</li>
          </ol>
        </li>
        <li>
          Các lô hàng có code ice, per mà trên hàng không có nhiệt độ, vào bill
          xem các mục có trong bill.
        </li>
        <li>AVI, keep cool: move AVI</li>
        <li>AVI, 2 - 8 deg: nếu lấy hàng luôn thì move AVI</li>
        <li>
          Dry Ice tài liệu mark: code col, dry ice, brk xem nhiệt độ trện hàng:
          nhiệt độ trên hàng freeze upon arrival: move frz
        </li>
      </ol>
    </div>
  );
};

export default KhaiThacHangLanh;
