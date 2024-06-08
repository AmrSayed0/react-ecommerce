import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import clothingbanner from "./assets/clothingbanner.png";
import electronicsbanner from "./assets/electronicsbanner.png";
import cosmeticsbanner from "./assets/cosmeticsbanner.png";

const App = () => {
  return (
    <main className="text-tertiary">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/clothing"
            element={<Category category={"clothing"} banner={clothingbanner} />}
          />
          <Route
            path="/cosmetics"
            element={
              <Category category={"cosmetics"} banner={cosmeticsbanner} />
            }
          />
          <Route
            path="/electronics"
            element={
              <Category category={"electronics"} banner={electronicsbanner} />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* <Route path="cart-page" element={<Cart />} />
          <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} /> */}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
