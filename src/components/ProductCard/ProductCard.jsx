import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useFavorites } from "../../context/FavoritesContext";
import "./ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(product.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <article className="card">

      <button
        className="favorite-btn"
        onClick={handleFavorite}
      >
        <FiHeart className={favorite ? "heart active" : "heart"} />
      </button>

      <Link
        to={`/product/${product.id}`}
        className="image-box"
      >
        <img
          src={product.image}
          alt={product.title}
        />
      </Link>

      <p className="category">
        {product.category}
      </p>

      <Link
        to={`/product/${product.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h3>{product.title}</h3>
      </Link>

      <div className="rating">
        ⭐ {product.rating.rate}
        <span> ({product.rating.count})</span>
      </div>

      <p className="price">
        ${product.price.toFixed(2)}
      </p>

      <button
        className="cart-btn"
        onClick={() => addToCart(product)}
      >
        <FiShoppingCart />
        <span>Add to Cart</span>
      </button>

    </article>
  );
}