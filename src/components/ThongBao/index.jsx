const ThongBao = () => {
  return (
    <div className="main">
      <h3>Thông báo</h3>
      <ol>
        <li>Talon trên thùng RKN, RAP không có HAWB, nhưng trên hàng thì sẽ có: nhận hàng theo hawb bình thường.</li>
        <li>No FHL, dư FHL: Nếu trên hàng có HAWB thì nhận theo HAWB, không HAWB thì nhận theo MAWB (vào location add group).</li>
        <li>
          Lô hàng Transit VJ, nếu không có mail không xả, thì nhắn Zalo cho
          group VJ, rồi báo gửi mail gấp để khai thác.
        </li>
        <li>
          Lô hàng yêu cầu chuyển lạnh có thời gian cụ thể, sau khi move lạnh, remark đã move cho
          tracing tính phí, vd: lô hàng về ngày 10/12 move 15 - 25, nhưng yêu cầu 12/12 move 2 - 8.
        </li>
      </ol>
    </div>
  );
};

export default ThongBao;
