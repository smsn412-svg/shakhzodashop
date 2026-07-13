import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductCard from "../components/ProductCard/ProductCard";
import "./DealsPage.css";

const API_URL = "https://fakestoreapi.com/products";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400",
    title: "Mega Summer Sale",
    text: "Up to 50% OFF on selected products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1400",
    title: "Fashion Collection",
    text: "Discover the latest fashion trends",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1400",
    title: "Latest Electronics",
    text: "Best gadgets at unbeatable prices",
  },
];

export default function DealsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);

  // Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Products
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const deals = products.slice(0, 4);

  return (
    <main className="deals-page">

      {/* Hero Slider */}
      <div
        className="hero-slider"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="overlay">
          <h1>{slides[currentSlide].title}</h1>

          <p>{slides[currentSlide].text}</p>

          <Link to="/" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <button
          className="slider-btn left"
          onClick={prevSlide}
        >
          <FiChevronLeft />
        </button>

        <button
          className="slider-btn right"
          onClick={nextSlide}
        >
          <FiChevronRight />
        </button>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={
                index === currentSlide
                  ? "dot active"
                  : "dot"
              }
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Promo Cards */}
      <section className="promo-section">

        <div className="promo-card">
          <h3>🚚 Free Shipping</h3>
          <p>Free delivery on orders over $100.</p>
        </div>

        <div className="promo-card">
          <h3>⚡ Big Discounts</h3>
          <p>Save up to 50% on selected products.</p>
        </div>

        <div className="promo-card">
          <h3>🔒 Secure Payment</h3>
          <p>100% secure online payment system.</p>
        </div>

        <div className="promo-card">
          <h3>🎁 New Arrivals</h3>
          <p>Discover our newest collections today.</p>
        </div>

      </section>

      {/* Special Offers */}
      <section className="special-offers">

        <h2>🔥 Special Offers</h2>

        <div className="offers-grid">

          {deals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>
          <section className="cta-section">

  <h2>Ready to Discover More?</h2>

  <p>
    Explore hundreds of amazing products with the best prices.
  </p>

  <Link to="/" className="cta-btn">
    Explore Products
  </Link>

</section>

    </main>
  );
}
