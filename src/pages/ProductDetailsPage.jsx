import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetailsPage.css";

const API_URL = "https://fakestoreapi.com/products";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/${id}`);

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="product-page">

      <div className="product-card">

        <div className="product-image-box">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-content">

          <span className="product-category">
            {product.category}
          </span>

          <h1 className="product-title">
            {product.title}
          </h1>

          <div className="product-rating">
            ⭐ {product.rating.rate} ({product.rating.count} Reviews)
          </div>

          <h2 className="product-price">
            ${product.price}
          </h2>

          <p className="product-description">
            {product.description}
          </p>

          <button
            className="product-btn"
            onClick={() => addToCart(product)}
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </main>
  );
}

