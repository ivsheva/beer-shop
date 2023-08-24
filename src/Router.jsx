import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
