function KhaiThac() {
  return (
    <div className="main">
      <h3>Các vấn đề khai thác</h3>
      <ol>
        <li>
          Lô hàng trên hệ thống 7pcs, thực tế có 6pcs, nhưng nhận 7pcs, các uld
          còn lại xem có lô đó không, uld nhận 110%, uld khác nhận 90%, các uld
          bù trừ cho nhau
        </li>
        <li>
          ULD đã move ETV thì không vào được, phải move lại BRK mới vào lại ULD
          được.
        </li>
        <li>Lô hàng transit, nhận xong ghi sổ, mark máy</li>
        <li>
          Các chuyến transit, nếu không có mail xả, thì xả khai thác bình thường
        </li>
        <li>
          Khi khai thác lô hàng có chất trên nhiều ULD, khi xả xuống mâm thì vẫn
          còn chỗ thì sẽ dồn lô hàng của người khác lên mâm của mình khi khai
          thác thì nên vào uld của họ nhận tiếp lô hàng đang khai thác
        </li>
        <li>Chuồng cu vàng không nên để lô lan</li>
        <li>
          Thực tế ULD có hàng, nhưng trên hệ thống thì chưa có ULD đó, gọi ramp
          nhập lại ULD, có ULD trên hệ thống nhưng không có hàng chờ tài liệu
          nhập hàng vào ULD
        </li>
        <li>Chú ý đếm số kiện</li>
        <li>
          Chú ý hàng có taping, retaped, opened, torn opened, wet, đặc biệt các
          lô hàng thời trang, thương hiệu lớn
        </li>
        <li>
          CX có lô OIA nhiều hawb, đếm kỹ, phân loại hawb đúng, đặc biệt hay về
          part
        </li>
        <li>
          EK có lô hàng nhiều HAWB, nên chú ý đếm kỹ, phân loại HAWB đúng, đặc
          biệt là hay về part
        </li>
        <li>
          Lô hàng có 2 hawb, hawb A trên hệ thống có 2 kiện, hawb B có 1 kiện,
          thực tế hawb A có 3 kiện, hawb B không có kiện nào (shiping mark của
          hawb B) <br></br>- Nhận 1 pc hawb B vào hawb A <br></br>- Hawb A mark:
          thực tế nhận 3 pcs, nhận tạm 1 pc vào hawb B <br></br>- Hawb B mark:
          sai hawb, hawb trên hàng - Làm sai hawb bình thường
        </li>
        <li>
          Lệnh kiện, lệnh ký, dư FHL, mawb thì 6pcs, hawb 4pcs, hệ thống
          handhelds 6pcs, gọi tài liệu kiểm tra, nhận theo thực tế, nhận theo ký
          hệ thống
        </li>
        <li>
          Lô hàng bị ướt từ bên ori, họ dán keo dẻo lên kiện hàng rồi chất lên
          uld, chụp hình, lập biên bản, cân lại
        </li>
      </ol>

      <h3>Hàng Transit</h3>
      <ol>
        <li>
          Hàng transit đã dlv, gửi điện sita manual, gửi điện sita lẫn lập biên
          bản bằng tay.
        </li>
      </ol>

      <h3>Chú ý khi khai thác</h3>
      <ol type="1">
        <li>
          Nhận biên bản bàn giao từ ramp, nếu có bất thường thì báo cho cả team
          khai thác biết.
        </li>
        <li>
          Tài liệu mark lô hàng có code DGR, nhận hàng kiểm tra, nếu có thì
          remark nguy hiểm lô hàng cho tài liệu biết
        </li>
        <li>
          Tài liệu mark lô hàng có code lạnh, nhưng trên hàng có 2 nhiệt độ,
          nhận theo nhiệt độ ưu tiên, mark máy, gửi mail
        </li>
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
