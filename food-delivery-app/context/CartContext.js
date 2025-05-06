import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Adicionar item ao carrinho
  const addToCart = (product, quantity = 1) => {
    setCart(currentCart => {
      // Verificar se o produto já está no carrinho
      const existingItemIndex = currentCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Se já estiver, aumenta a quantidade
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Se não estiver, adiciona ao carrinho
        return [...currentCart, { ...product, quantity }];
      }
    });
  };
  
  // Remover item do carrinho
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };
  
  // Alterar quantidade de um item
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(currentCart => 
      currentCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  // Limpar o carrinho
  const clearCart = () => {
    setCart([]);
  };
  
  // Calcular total do carrinho
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // Calcular quantidade total de itens
  const getItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal,
      getItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};