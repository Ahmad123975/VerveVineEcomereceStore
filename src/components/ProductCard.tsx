import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { StarRating } from './StarRating';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.stock > 0) {
      addToCart(product, 1);
      window.dispatchEvent(new CustomEvent('toast', { detail: `${product.name} added to bag!` }));
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
    const msg = isWishlisted ? 'Removed from wishlist!' : 'Added to wishlist!';
    window.dispatchEvent(new CustomEvent('toast', { detail: msg }));
  };

  return (
    <div className="card h-100 position-relative border-0 shadow-sm" style={{ overflow: 'hidden' }}>
      {/* Wishlist Heart Toggle in Corner */}
      <button 
        onClick={handleWishlistToggle}
        className="position-absolute border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
        style={{
          top: '15px',
          right: '15px',
          width: '36px',
          height: '36px',
          zIndex: 10,
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <i className={`bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart text-secondary'}`} style={{ fontSize: '1rem' }}></i>
      </button>

      {/* Product Image Wrapper */}
      <Link to={`/product/${product.id}`} className="product-card-img-wrapper d-block text-center">
        {product.stock === 0 && (
          <span 
            className="position-absolute bg-dark text-white px-2 py-1 uppercase font-monospace rounded-1"
            style={{ top: '15px', left: '15px', fontSize: '0.65rem', zIndex: 10, letterSpacing: '1px' }}
          >
            Sold Out
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-img img-fluid"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&auto=format&fit=crop&q=60';
          }}
        />
        
        {/* Quick Action Overlay (Desktop Only / Touch triggers on hover) */}
        <div className="product-card-action-overlay">
          {product.stock > 0 && (
            <button 
              onClick={handleAddToCart}
              className="overlay-btn" 
              title="Add to Bag"
              aria-label="Add to Bag"
            >
              <i className="bi bi-bag-plus"></i>
            </button>
          )}
          <Link 
            to={`/product/${product.id}`} 
            className="overlay-btn text-decoration-none" 
            title="View Details"
            aria-label="View Details"
          >
            <i className="bi bi-eye"></i>
          </Link>
        </div>
      </Link>

      {/* Card Info */}
      <div className="card-body p-3 d-flex flex-column justify-content-between" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="text-uppercase text-muted" style={{ fontSize: '0.7rem', letterSpacing: '0.5px', fontWeight: 600 }}>
              {product.category}
            </span>
            <span className="badge-custom" style={{ color: 'var(--text-primary)' }}>{product.subcategory}</span>
          </div>
          <Link to={`/product/${product.id}`} className="text-decoration-none text-primary">
            <h5 className="card-title font-serif m-0 fs-6 text-truncate" title={product.name}>
              {product.name}
            </h5>
          </Link>
        </div>
        
        <div className="mt-2 pt-2 border-top d-flex justify-content-between align-items-center" style={{ borderTopColor: 'var(--border-light) !important' }}>
          <span className="fw-semibold h6 m-0 font-monospace text-primary">
            ${product.price}
          </span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
};
