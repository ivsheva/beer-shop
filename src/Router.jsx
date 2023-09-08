import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Global/Layout";
import About from "./pages/About";
import BeerPacks from "./pages/BeerPacks";
import Catalogue from "./pages/Catalogue";
import Countries from "./pages/Countries";
import Crowlers from "./pages/Crowlers";
import Glasses from "./pages/Glasses";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Sales from "./pages/Sales";
import Style from "./pages/Style";
import Vouchers from "./pages/Vouchers";

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
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route
            path=":pageType/products/:id"
            element={<ProductDetailPage />}
          />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
