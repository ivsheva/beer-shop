import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Catalogue from "./pages/Catalogue";
import Style from "./pages/Style";
import Countries from "./pages/Countries";
import BeerPacks from "./pages/BeerPacks";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="all-beers" element={<Catalogue />} />
          <Route path="style" element={<Style />} />
          <Route path="countries" element={<Countries />} />
          <Route path="beer-packs" element={<BeerPacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
