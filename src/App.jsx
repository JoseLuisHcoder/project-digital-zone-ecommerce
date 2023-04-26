import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { getAllProducts } from "./store/slices/product.slice";
import ProductInfo from "./pages/ProductInfo";
import Login from "./pages/Login";
import Header from "./components/shared/Header";
import Cart from "./pages/Cart";
import Purchases from "./pages/Purchases";
import ProtectedRoutes from "./components/shared/ProtectedRoutes";
import Footer from "./components/shared/Footer";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  //This code is for create new user

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/users`;

    const data = {
      firstName: "Ronaldinho",
      lastName: "Gaucho",
      email: "datatest@gmail.com",
      password: "data123",
      phone: "1234567890",
    };

    axios
      .post(URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>

        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
