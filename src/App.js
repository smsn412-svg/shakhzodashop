import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import DealsPage from "./pages/DealsPage";
import AboutPage from "./pages/AboutPage";

import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider, useCart } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

function MainApp() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const { toast } = useCart();

  return (
    <main className="container">
      <Header
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              search={search}
              category={category}
              setCategory={setCategory}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetailsPage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />

        <Route
          path="/deals"
          element={<DealsPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>

      <Footer />

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </main>
  );
}

export default App;