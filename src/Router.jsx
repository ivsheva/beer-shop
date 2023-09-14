import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Global/Layout";
import About from "./pages/service/About";
import BeerPacks from "./pages/products/BeerPacks";
import Catalogue from "./pages/products/Catalogue";
import Countries from "./pages/products/Countries";
import Crowlers from "./pages/products/Crowlers";
import Glasses from "./pages/products/Glasses";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Sales from "./pages/products/Sales";
import Style from "./pages/products/Style";
import Vouchers from "./pages/products/Vouchers";
import Questions from "./pages/service/Questions";
import PaymentMethods from "./pages/service/PaymentMethods";
import Conditions from "./pages/service/Conditions";
import PrivacyPolicy from "./pages/service/PrivacyPolicy";
import Coupon from "./pages/service/Coupon";
import ErrorPage from "./pages/ErrorPage";

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
          <Route path="service/about-us" element={<About />} />
          <Route path="service/faq" element={<Questions />} />
          <Route
            path="service/how-can-i-pay-for-my-order"
            element={<PaymentMethods />}
          />
          <Route path="service/terms-and-conditions" element={<Conditions />} />
          <Route path="service/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="service/i-love-beerdome-sale" element={<Coupon />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
