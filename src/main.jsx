import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFoud/index.jsx";
import KhaiThac from "./components/KhaiThac/index.jsx";
import KhaiThacVunVal from "./components/KhaiThacVunVal/index.jsx";
import KhaiThacHangLanh from "./components/KhaiThacHangLanh/index.jsx";
import KhaiThacMail from "./components/KhaiThacMail/index.jsx";
import KhoanhMNF from "./components/KhoanhMNF/index.jsx";
import Mail from "./components/Mail/index.jsx";
import RKNRAP from "./components/RKNRAP/index.jsx";
import SaiHAWB from "./components/SaiHAWB/index.jsx";
import MSCA from "./components/MSCA/index.jsx";
import ThongBao from "./components/ThongBao/index.jsx";
import FDCA from "./components/FDCA/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/khai-thac" element={<KhaiThac />}></Route>
        <Route path="/khai-thac-vun-val" element={<KhaiThacVunVal />}></Route>
        <Route
          path="/khai-thac-hang-lanh"
          element={<KhaiThacHangLanh />}
        ></Route>
        <Route path="/khai-thac-mail" element={<KhaiThacMail />}></Route>
        <Route path="/khoanh-mnf" element={<KhoanhMNF />}></Route>
        <Route path="/mail" element={<Mail />}></Route>
        <Route path="/rkn-rap" element={<RKNRAP />}></Route>
        <Route path="/sai-hawb-khong-hawb" element={<SaiHAWB />}></Route>
        <Route path="/msca" element={<MSCA />}></Route>
        <Route path="/thong-bao" element={<ThongBao />}></Route>
        <Route path='/fdca" element={<FDCA />}></Routes>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
