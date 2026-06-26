import React from 'react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Simulate checkout
    alert("Thank you for your purchase! A confirmation email has been sent to you.");
    clearCart();
    onClose();
    
    // Trigger success toast
    window.dispatchEvent(new CustomEvent('toast', { detail: 'Order placed successfully!' }));
  };

  return (
    <>
      <div className={`drawer-backdrop ${isOpen ? 'show' : ''}`} onClick={onClose} />
      <div className={`drawer-custom ${isOpen ? 'show' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-header">
          <h4 className="m-0 font-serif">Shopping Bag ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h4>
          <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        </div>
        
        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-bag-x text-muted" style={{ fontSize: '3rem' }}></i>
              <p className="mt-3 text-secondary">Your shopping bag is empty.</p>
              <button className="btn btn-outline-primary btn-sm mt-3" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.product.id} className="row g-0 py-3 border-bottom align-items-center">
                  <div className="col-3">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="img-fluid rounded" 
                      style={{ height: '70px', width: '70px', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback image source if not yet generated
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=150&auto=format&fit=crop&q=60';
                      }}
                    />
                  </div>
                  <div className="col-6 px-2">
                    <h6 className="m-0 text-truncate font-serif">{item.product.name}</h6>
                    <small className="text-muted d-block">${item.product.price} each</small>
                    
                    {/* Quantity selectors */}
                    <div className="d-flex align-items-center mt-2">
                      <button 
                        className="btn btn-sm btn-light py-0 px-2 border" 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-2 font-monospace" style={{ fontSize: '0.9rem' }}>{item.quantity}</span>
                      <button 
                        className="btn btn-sm btn-light py-0 px-2 border" 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <p className="fw-semibold m-0">${item.product.price * item.quantity}</p>
                    <button 
                      className="btn btn-link text-danger p-0 mt-1" 
                      style={{ fontSize: '0.85rem', textDecoration: 'none' }}
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="d-flex justify-content-between mb-2">
              <span className="text-secondary">Subtotal</span>
              <span className="fw-semibold">${cartTotal}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-secondary">Shipping</span>
              <span className="text-success fw-medium">Free</span>
            </div>
            <div className="d-flex justify-content-between border-top pt-3 mb-4">
              <span className="fw-bold h5 font-serif">Total</span>
              <span className="fw-bold h5 font-serif">${cartTotal}</span>
            </div>
            <button className="btn btn-primary w-100 py-3" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
