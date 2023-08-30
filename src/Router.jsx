import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import Catalogue from "./pages/Catalogue";
import Style from "./pages/Style";
import Countries from "./pages/Countries";
import BeerPacks from "./pages/BeerPacks";
import Glasses from "./pages/Glasses";
import Crowlers from "./pages/Crowlers";
import Vouchers from "./pages/Vouchers";
import Sales from "./pages/Sales";

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
          <Route path="glasses" element={<Glasses />} />
          <Route path="crowlers" element={<Crowlers />} />
          <Route path="gift-vouchers" element={<Vouchers />} />
          <Route path="sale" element={<Sales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
