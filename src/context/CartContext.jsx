import React from "react";

export const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, increment the quantity
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    // Log the state of the cart
    console.log(cart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
