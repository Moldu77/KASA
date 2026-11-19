import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/APropos";
import Logement from "../pages/Logement";
import Page404 from "../pages/Page404";
import Layout from "../components/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
