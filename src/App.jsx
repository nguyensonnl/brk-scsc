import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h3>KHAI THÁC</h3>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/thong-bao">
            <h3>Thông báo</h3>
          </Link>
        </li>
        <li>
          <Link to="/khai-thac">1. Khai thábc</Link>
        </li>
        <li>
          <Link to="/khai-thac-vun-val">2. Khai thác VUN VAL</Link>
        </li>
        <li>
          <Link to="/khai-thac-hang-lanh">3. Khai thác hàng lạnh</Link>
        </li>
        <li>
          <Link to="/rkn-rap">4. Khai thác RKN RAP</Link>
        </li>
        <li>
          <Link to="/sai-hawb-khong-hawb">5. Sai HAWB, Không HAWB</Link>
        </li>
        <li>
          <Link to="/msca">6. MSCA</Link>
        </li>
        <li>
          <Link to="fdca">7. FDCA</Link>
        </li>
        <li>
          <Link to="/khai-thac-mail">8. Khai thác mail</Link>
        </li>
      </ul>
      <h3>TÀI LIỆU</h3>
      <ul>
        <li>
          <Link to="/khoanh-mnf">1. Khoanh MNF</Link>
        </li>
        <li>
          <Link to="/mail">2. Mail</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
