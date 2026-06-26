import React from 'react';
import { useCart } from '../context/CartContext';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCart: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ isOpen, onClose, onOpenCart }) => {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    addToCart(item, 1);
    toggleWishlist(item); // remove from wishlist
    onClose();
    onOpenCart(); // open cart to show it
    window.dispatchEvent(new CustomEvent('toast', { detail: `${item.name} moved to bag!` }));
  };

  return (
    <>
      <div className={`drawer-backdrop ${isOpen ? 'show' : ''}`} onClick={onClose} />
      <div className={`drawer-custom ${isOpen ? 'show' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-header">
          <h4 className="m-0 font-serif">Your Wishlist ({wishlist.length})</h4>
          <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        </div>
        
        <div className="drawer-body">
          {wishlist.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-heart text-muted" style={{ fontSize: '3rem' }}></i>
              <p className="mt-3 text-secondary">Your wishlist is currently empty.</p>
              <button className="btn btn-outline-primary btn-sm mt-3" onClick={onClose}>
                Browse Products
              </button>
            </div>
          ) : (
            <div className="wishlist-items">
              {wishlist.map((item) => (
                <div key={item.id} className="row g-0 py-3 border-bottom align-items-center">
                  <div className="col-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded" 
                      style={{ height: '70px', width: '70px', objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=150&auto=format&fit=crop&q=60';
                      }}
                    />
                  </div>
                  <div className="col-6 px-2">
                    <h6 className="m-0 text-truncate font-serif">{item.name}</h6>
                    <small className="text-muted d-block">${item.price}</small>
                    <small className={`fw-medium ${item.stock > 0 ? 'text-success' : 'text-danger'}`}>
                      {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </small>
                  </div>
                  <div className="col-3 text-end d-flex flex-column gap-2">
                    {item.stock > 0 ? (
                      <button 
                        className="btn btn-primary btn-sm px-2 py-1"
                        style={{ fontSize: '0.75rem' }}
                        onClick={() => handleMoveToCart(item)}
                      >
                        Add to Bag
                      </button>
                    ) : (
                      <button 
                        className="btn btn-secondary btn-sm px-2 py-1 disabled"
                        style={{ fontSize: '0.75rem' }}
                        disabled
                      >
                        Sold Out
                      </button>
                    )}
                    <button 
                      className="btn btn-link text-muted p-0" 
                      style={{ fontSize: '0.8rem', textDecoration: 'none' }}
                      onClick={() => toggleWishlist(item)}
                    >
                      <i className="bi bi-trash3 me-1"></i>Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
