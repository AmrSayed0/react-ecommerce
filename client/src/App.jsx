import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="text-tertiary">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Category />} />
          <Route path="/cosmetics" element={<Category />} />
          <Route path="/electronics" element={<Category />} />
          <Route path="/products" element={<Product />}>
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
