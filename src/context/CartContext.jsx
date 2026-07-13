import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [toast, setToast] = useState("")
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 LOCALSTORAGEGA SAQLASH
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ➕ ADD TO CART
  const addToCart = (product) => {
  setCartItems((prev) => {
    const exists = prev.find((item) => item.id === product.id);

    if (exists) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [...prev, { ...product, qty: 1 }];
  });

  setToast("Added to cart 🛒");

  setTimeout(() => setToast(""), 1500);
};
  // ❌ REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // ➕ INCREASE
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // 💰 TOTAL PRICE
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 🛒 TOTAL COUNT
  const cartCount = cartItems.reduce(
    (count, item) => count + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cartTotal,
        cartCount,
        toast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🔥 CUSTOM HOOK
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart faqat CartProvider ichida ishlaydi!");
  }

  return context;
};