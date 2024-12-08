function KhaiThac() {
  return (
    <div className="main">
      <h3>Các vấn đề khai thác</h3>
      <ul>
        <li>
          Lô hàng có 2 hawb, hawb A trên hệ thống có 2 kiện, hawb B có 1 kiện,
          thực tế hawb A có 3 kiện, hawb B không có kiện nào (shiping mark của
          hawb B) <br></br>- Nhận 1 pc hawb B vào hawb A <br></br>- Hawb A mark:
          thực tế nhận 3 pcs, nhận tạm 1 pc vào hawb B <br></br>- Hawb B mark:
          sai hawb, hawb trên hàng - Làm sai hawb bình thường
        </li>
      </ul>

      <h3>Các vấn đề bất thường khi khai thác</h3>
      <ol>
        <li>
          <div>Dư FHL:</div>
          <div>
            1. Kiểm tra talon, nếu không có HAWB: Nhận hàng theo MAWB (add group
            theo mawb: location).
          </div>
          <div>
            2. Kiểm tra talon, nếu có hawb: Nhận hàng theo hawb bình thường.
          </div>
        </li>
        <li>
          <div>
            Hệ thống hiển thị MAWB và HAWB 1pc, thực tế 4 pcs, tài liệu mark:
            lệnh kiện, mawb 1pc, hawb 4 pcs
          </div>
          <div>
            Gọi tài liệu consol hawb bao nhiêu kiện, bao nhiêu ký, để nhận theo
            tài liệu
          </div>
        </li>
      </ol>
    </div>
  );
}

export default KhaiThac;
