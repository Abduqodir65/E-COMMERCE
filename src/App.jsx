import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { Footer, Header, Sidebar } from "./components";

import CartProvider from "./contexts/CartContext";

const App = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div>
      <CartProvider>
        <Header handleSidebarOpen={() => setSideBarOpen(true)} />
        <Sidebar
          isOpen={isSideBarOpen}
          handleClose={() => setSideBarOpen(false)}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
