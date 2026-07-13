import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"
import ProductCard from "../components/ProductCard/ProductCard"
import {
  FiHome,
  FiCpu,
  FiAward,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi"
import "./CatalogPage.css"

const API_URL = "https://fakestoreapi.com/products"

export default function CatalogPage({ search, category, setCategory }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { addToCart } = useCart()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const url =
          category === "all"
            ? API_URL
            : `${API_URL}/category/${category}`

        const res = await fetch(url)

        if (!res.ok) throw new Error("Error loading products")

        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category])

  if (loading) return <div className="loader">Loading...</div>
  if (error) return <div className="error">{error}</div>

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes((search || "").toLowerCase())
  )

  return (
    <main className="catalog">

  <div className="shop-layout">

    <aside className="sidebar">

  <h3>Categories</h3>

  <button
    className={category === "all" ? "active" : ""}
    onClick={() => setCategory("all")}
  >
    <FiHome />
    <span>All Products</span>
  </button>

  <button
    className={category === "electronics" ? "active" : ""}
    onClick={() => setCategory("electronics")}
  >
    <FiCpu />
    <span>Electronics</span>
  </button>

  <button
    className={category === "jewelery" ? "active" : ""}
    onClick={() => setCategory("jewelery")}
  >
    <FiAward />
    <span>Jewelery</span>
  </button>

  <button
    className={category === "men's clothing" ? "active" : ""}
    onClick={() => setCategory("men's clothing")}
  >
    <FiUser />
    <span>Men's Clothing</span>
  </button>

  <button
    className={category === "women's clothing" ? "active" : ""}
    onClick={() => setCategory("women's clothing")}
  >
    <FiShoppingCart />
    <span>Women's Clothing</span>
  </button>

</aside>
    <section className="products-area">

      <div className="products-top">
</div>

      <div className="grid">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </section>

  </div>

</main>
  )
}