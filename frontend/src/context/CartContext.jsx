import React, { createContext, useEffect, useState } from "react";

export let CartProvider = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add course to cart
  const addToCart = (course) => {
    const alreadyExists = cart.some((item) => item.id === course.id);

    if (alreadyExists) {
      return false;
    }

    setCart([...cart, course]);
    return true;
  };

  // Remove course from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Total price
  const totalPrice = cart.reduce((total, course) => {
    return total + Number(course.cPrice);
  }, 0);

  return (
    <CartProvider.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartProvider.Provider>
  );
};

export default CartContext;