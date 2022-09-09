export const addToCart = (cartItems, addItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addItem, quantity: 1 }];
};

export const removeFromCart = (cartItems, addItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addItem.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== addItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === addItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
