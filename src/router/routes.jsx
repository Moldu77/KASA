import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Accueil from "../pages/accueil";
import Apropos from "../pages/a-propos";
import Logement from "../pages/logement";
import Page404 from "../pages/page404";

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        </BrowserRouter>
    )
}