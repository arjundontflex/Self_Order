import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LOGIN1 from "./pages/l-o-g-i-n1";
import Bevereges from "./pages/bevereges";
import STARTERS from "./pages/s-t-a-r-t-e-r-s";
import HOME from "./pages/h-o-m-e";
import WELCOME from "./pages/w-e-l-c-o-m-e";
import LOGIN2 from "./pages/l-o-g-i-n2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bevereges":
        title = "";
        metaDescription = "";
        break;
      case "/starters":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/welcome":
        title = "";
        metaDescription = "";
        break;
      case "/login2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LOGIN1 />} />
      <Route path="/bevereges" element={<Bevereges />} />
      <Route path="/starters" element={<STARTERS />} />
      <Route path="/home" element={<HOME />} />
      <Route path="/welcome" element={<WELCOME />} />
      <Route path="/login2" element={<LOGIN2 />} />
    </Routes>
  );
}
export default App;
