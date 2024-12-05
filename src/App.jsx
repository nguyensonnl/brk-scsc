import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h3>Danh sách các công việc làm</h3>
      <ul>
        <li>
          <Link to="/khai-thac">1. Khai thác</Link>
        </li>
        <li>
          <Link to="/khai-thac-vun-val">2. Khai thác vul val</Link>
        </li>
        <li>
          <Link to="/khai-thac-hang-lanh">3. Khai thác hàng lạnh</Link>
        </li>
        <li>
          <Link to="/khai-thac-mail">4. Khai thác mail</Link>
        </li>
        <li>
          <Link to="/rkn-rap">5. RKN RAP</Link>
        </li>
        <li>
          <Link to="/khoanh-mnf">6. Khoanh MNF</Link>
        </li>
        <li>
          <Link to="/mail">7. Mail</Link>
        </li>
        <li>
          <Link to="/sai-hawb-khong-hawb">8. Sai HAWB, Không HAWB</Link>
        </li>
        <li>
          <Link to="/msca">9. MSCA</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
