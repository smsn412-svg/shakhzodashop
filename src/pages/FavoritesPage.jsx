import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard/ProductCard";
import "./CatalogPage.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const { addToCart } = useCart();

  return (
    <main className="catalog">

  <div style={{
    marginBottom: "30px"
  }} className="products-top">
    <h2>❤️ My Favorites</h2>
  </div>

  {favorites.length === 0 ? (
    <div className="empty-favorites">
      <h3>❤️ No favorite products yet.</h3>
      <p>Click the heart icon on any product to save it here.</p>
    </div>
  ) : (
    <div className="grid">
      {favorites.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  )}

</main>
  );
}