import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import "./Header.css";

export default function Header({
  search,
  setSearch,
  category,
  setCategory,
}) {
  const { cartCount } = useCart();

  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="logo">
        <HiOutlineShoppingBag />
        <span>ShakhzodaShop</span>
      </Link>

      {/* Navigation */}
      <nav className="nav">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/deals">Deals</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      {/* Search */}
      <div className="search">
        <FiSearch />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right */}
      <div className="actions">

        <Link to="/favorites" className="icon">
          <FiHeart />
        </Link>

        <Link to="/cart" className="cart">
          <FiShoppingCart />
          <span>{cartCount}</span>
        </Link>

      </div>

    </header>
  );
}