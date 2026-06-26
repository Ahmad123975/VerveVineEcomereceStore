import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Map saved items back to fresh product definitions to prevent stale pricing/info
        return parsed.map((item: any) => {
          const freshProduct = products.find(p => p.id === item.productId);
          return freshProduct ? { product: freshProduct, quantity: item.quantity } : null;
        }).filter(Boolean) as CartItem[];
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      try {
        const ids = JSON.parse(saved) as string[];
        return ids.map(id => products.find(p => p.id === id)).filter(Boolean) as Product[];
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
    return [];
  });

  // Sync to local storage
  useEffect(() => {
    const minifiedCart = cart.map(item => ({ productId: item.product.id, quantity: item.quantity }));
    localStorage.setItem('cart', JSON.stringify(minifiedCart));
  }, [cart]);

  useEffect(() => {
    const ids = wishlist.map(p => p.id);
    localStorage.setItem('wishlist', JSON.stringify(ids));
  }, [wishlist]);

  // Operations
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        // Enforce stock limits
        const newQty = Math.min(existing.quantity + quantity, product.stock);
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: newQty } : item);
      }
      return [...prev, { product, quantity: Math.min(quantity, product.stock) }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) => {
      const item = prev.find(i => i.product.id === productId);
      if (!item) return prev;
      const finalQty = Math.min(quantity, item.product.stock);
      return prev.map(i => i.product.id === productId ? { ...i, quantity: finalQty } : i);
    });
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(p => p.id === productId);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
