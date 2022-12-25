import CategoryPage from "./components/pages/CategoryPage";
import ProductPage from "./components/pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Address from "./components/Address";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="CategoryPage" element={<CategoryPage />} />
        <Route path="ProductPage" element={<ProductPage />} />
        <Route path="Address" element={<Address/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
