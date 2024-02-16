import NavbarComponent from "./components/shared/NavbarComponent";
import { CartContextProvider } from "./components/Contexts/CartContext";
import FooterComponent from "./components/shared/FooterComponent";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/CardComponent";
import Login from './components/Pages/Login';
import CardDetails from './components/Pages/CardDetails';
import NotFound from "./components/Pages/NotFound";
import { ProductContextProvider } from "./components/Contexts/ProductContext";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsFetch } from "./components/Redux/slice/ProductSlice";
import "./App.css";
import Cart from "./components/Pages/Cart";
import Contact from "./components/Pages/contact us/Contact";


function App() {
  // TODO: Dispatch Data in ReduxToolKit Store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsFetch());
  })
  return (
    <div style={{
      height: "inherit",
    }} >
      <CartContextProvider>
        <ProductContextProvider>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="cardDetails/:id" element={<CardDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FooterComponent />
        </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
