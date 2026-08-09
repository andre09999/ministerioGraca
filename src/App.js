import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import HeaderCellphone from "./components/headercellphone";
import About from "./pages/about";
import Give from "./pages/give";
import GracaKids from "./pages/GracaKids";
import Home from "./pages/home";

const DESKTOP_BREAKPOINT = 600;

function App() {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(
    () => window.innerWidth >= DESKTOP_BREAKPOINT
  );

  useEffect(() => {
    const updateLayout = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const isKidsPage = location.pathname === "/kids";

  return (
    <div className={isKidsPage ? "transparent-background" : "raiz"}>
      {isDesktop ? <Header /> : <HeaderCellphone />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servir" element={<Give />} />
        <Route path="/kids" element={<GracaKids />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
