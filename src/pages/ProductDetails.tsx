import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import type { Product, Review } from '../data/products';
import { useCart } from '../context/CartContext';
import { StarRating } from '../components/StarRating';
import { ProductCard } from '../components/ProductCard';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // Find product
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [activeImage, setActiveImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping'>('desc');
  
  // Dynamic reviews state
  const [localReviews, setLocalReviews] = useState<Review[]>([]);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
    if (foundProduct) {
      setActiveImage(foundProduct.image);
      setLocalReviews(foundProduct.reviews);
      setQuantity(1);
      setReviewSubmitted(false);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container py-5 text-center my-5 reveal-fade">
        <i className="bi bi-exclamation-triangle text-muted" style={{ fontSize: '4rem' }}></i>
        <h2 className="font-serif mt-3">Product Not Found</h2>
        <p className="text-secondary">The plant or item you are looking for might have been retired or doesn't exist.</p>
        <Link to="/shop" className="btn btn-primary mt-3">
          Back to Catalog
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    window.dispatchEvent(new CustomEvent('toast', { detail: `${quantity}x ${product.name} added to bag!` }));
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    const msg = isWishlisted ? 'Removed from wishlist!' : 'Added to wishlist!';
    window.dispatchEvent(new CustomEvent('toast', { detail: msg }));
  };

  // Related products (from same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough related in same category, grab any other products
  if (relatedProducts.length < 4) {
    const fillProducts = products
      .filter(p => p.id !== product.id && !relatedProducts.some(rp => rp.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...fillProducts);
  }

  // Handle Review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newReview: Review = {
      id: `r-local-${Date.now()}`,
      name: newReviewName,
      rating: newReviewRating,
      comment: newReviewComment,
      date: new Date().toISOString().split('T')[0]
    };

    setLocalReviews(prev => [newReview, ...prev]);
    setNewReviewName('');
    setNewReviewComment('');
    setNewReviewRating(5);
    setReviewSubmitted(true);
    
    // Update overall rating dynamically for user visual
    const totalRating = localReviews.reduce((sum, r) => sum + r.rating, 0) + newReviewRating;
    const newAverage = totalRating / (localReviews.length + 1);
    product.rating = Number(newAverage.toFixed(1)); // temporarily update in memory

    window.dispatchEvent(new CustomEvent('toast', { detail: 'Thank you for your review!' }));
  };

  return (
    <div className="container-fluid py-5 px-3 px-md-5 reveal-fade">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb font-monospace" style={{ fontSize: '0.8rem' }}>
          <li className="breadcrumb-item"><Link to="/" className="text-secondary">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/shop" className="text-secondary">Shop</Link></li>
          <li className="breadcrumb-item"><Link to={`/shop?category=${product.category}`} className="text-secondary">{product.category}</Link></li>
          <li className="breadcrumb-item active text-primary" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      {/* Main product display */}
      <div className="row g-5">
        {/* Left column: Images */}
        <div className="col-12 col-md-6">
          <div className="card border-0 bg-transparent">
            {/* Active Image */}
            <div className="text-center bg-secondary rounded overflow-hidden mb-3" style={{ height: '480px', maxHeight: '100%' }}>
              <img 
                src={activeImage} 
                alt={product.name} 
                className="img-fluid w-100 h-100" 
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80';
                }}
              />
            </div>

            {/* Alternates */}
            <div className="row g-2">
              {product.images.map((img, idx) => (
                <div key={idx} className="col-3" style={{ cursor: 'pointer' }} onClick={() => setActiveImage(img)}>
                  <div className={`rounded border overflow-hidden ${activeImage === img ? 'border-success border-2 shadow-sm' : 'border-color'}`} style={{ height: '80px' }}>
                    <img 
                      src={img} 
                      alt={`View ${idx + 1}`} 
                      className="img-fluid w-100 h-100" 
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=150&auto=format&fit=crop&q=60';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Purchase info */}
        <div className="col-12 col-md-6">
          <div className="d-flex flex-column h-100 justify-content-between">
            <div>
              {/* Product header & tags */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-uppercase text-muted font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 600 }}>
                  {product.category} &bull; {product.subcategory}
                </span>
                {product.stock > 0 ? (
                  <span className="badge bg-success-subtle text-success py-1 px-2 rounded font-monospace" style={{ fontSize: '0.75rem' }}>
                    In Stock
                  </span>
                ) : (
                  <span className="badge bg-danger-subtle text-danger py-1 px-2 rounded font-monospace" style={{ fontSize: '0.75rem' }}>
                    Sold Out
                  </span>
                )}
              </div>
              
              <h1 className="font-serif fw-bold display-6 mb-2 text-primary">{product.name}</h1>
              
              {/* Rating and price */}
              <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
                <StarRating rating={product.rating} showText />
                <a href="#reviews" className="text-secondary" style={{ fontSize: '0.85rem' }}>
                  ({localReviews.length} customer reviews)
                </a>
              </div>

              <h2 className="font-monospace fw-bold text-accent mb-4" style={{ color: 'var(--accent-secondary)' }}>
                ${product.price}
              </h2>

              <p className="text-secondary mb-4 leading-relaxed">
                {product.description}
              </p>
              
              {/* Add to Cart Actions */}
              {product.stock > 0 ? (
                <div className="mb-4">
                  {product.stock <= 5 && (
                    <div className="alert alert-warning py-2 px-3 mb-3 font-monospace" style={{ fontSize: '0.8rem' }}>
                      <i className="bi bi-clock-history me-2"></i>Only {product.stock} items left in stock. Order soon!
                    </div>
                  )}

                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    {/* Quantity selectors */}
                    <div className="d-flex align-items-center border rounded bg-card p-1">
                      <button 
                        className="btn btn-sm btn-link text-secondary p-0 px-2 text-decoration-none" 
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      >
                        <i className="bi bi-dash fs-5"></i>
                      </button>
                      <span className="px-3 font-monospace fw-semibold">{quantity}</span>
                      <button 
                        className="btn btn-sm btn-link text-secondary p-0 px-2 text-decoration-none" 
                        onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                        disabled={quantity >= product.stock}
                      >
                        <i className="bi bi-plus fs-5"></i>
                      </button>
                    </div>

                    <button className="btn btn-primary py-3 px-4 flex-grow-1" onClick={handleAddToCart}>
                      <i className="bi bi-bag-plus me-2"></i>Add to Shopping Bag
                    </button>

                    <button 
                      className={`btn py-3 px-3 border ${isWishlisted ? 'btn-danger border-danger text-white' : 'btn-outline-secondary'}`}
                      onClick={handleWishlistToggle}
                      aria-label="Add to Wishlist"
                    >
                      <i className={`bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <button className="btn btn-secondary py-3 px-4 w-100 disabled" disabled>
                    <i className="bi bi-emoji-frown me-2"></i>Temporarily Sold Out
                  </button>
                </div>
              )}
            </div>

            {/* Spec details / Tabs */}
            <div className="mt-4">
              <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'desc' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('desc')}
                  >
                    Information
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'specs' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('specs')}
                  >
                    Care & Specifications
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('shipping')}
                  >
                    Sustainable Shipping
                  </button>
                </li>
              </ul>

              <div className="tab-content" style={{ fontSize: '0.95rem' }}>
                {activeTab === 'desc' && (
                  <div className="py-2 text-secondary">
                    <p className="mb-2">Every item from Verve & Vine is vetted for exceptional quality, visual balance, and style longevity. We work directly with growers and craftsmen to source unique design objects.</p>
                    <p className="m-0">Your plant is backed by our <strong>30-Day Guarantee</strong>. If it displays health issues within 30 days of arrival, we will provide a free replacement or store credit.</p>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="py-2 text-secondary">
                    <table className="table table-sm table-borderless text-secondary m-0">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, val]) => (
                          <tr key={key}>
                            <td className="fw-semibold text-primary py-1 ps-0" style={{ width: '130px' }}>{key}:</td>
                            <td className="py-1">{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="py-2 text-secondary">
                    <p className="mb-2"><strong>Root-lock hydration</strong>: Plants are secured inside insulated compostable packaging bags wrapped in coco coir to retain correct moisture levels during transit.</p>
                    <p className="m-0"><strong>Standard Climate Shipping</strong>: Flat rate $8 (Free for orders over $50). Dispatched within 2 business days via express climate-controlled cargo networks.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Reviews section */}
      <section id="reviews" className="my-5 pt-5 border-top" style={{ borderColor: 'var(--border-light)' }}>
        <div className="row g-5">
          {/* Reviews list */}
          <div className="col-12 col-lg-7">
            <h3 className="font-serif fw-bold text-primary mb-4">Customer Reviews</h3>
            {localReviews.length === 0 ? (
              <p className="text-secondary italic">No reviews yet for this product. Be the first to share your experience!</p>
            ) : (
              <div className="d-flex flex-column gap-4">
                {localReviews.map((review) => (
                  <div key={review.id} className="pb-4 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="fw-bold m-0 font-serif">{review.name}</h6>
                      <span className="text-muted font-monospace" style={{ fontSize: '0.8rem' }}>{review.date}</span>
                    </div>
                    <div className="mb-2">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-secondary m-0" style={{ fontSize: '0.95rem' }}>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Write a review form */}
          <div className="col-12 col-lg-5">
            <div className="card p-4 border-0 shadow-sm" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h4 className="font-serif fw-bold text-primary mb-3">Add Your Review</h4>
              {reviewSubmitted ? (
                <div className="alert alert-success py-3 text-center">
                  <i className="bi bi-patch-check-fill fs-2 d-block mb-2"></i>
                  <h6 className="fw-bold m-0">Review Submitted Successfully!</h6>
                  <p className="text-secondary small mt-1 mb-3">Your feedback is live and visible. Thank you!</p>
                  <button className="btn btn-outline-primary btn-sm" onClick={() => setReviewSubmitted(false)}>
                    Write another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="d-flex flex-column gap-3">
                  <div>
                    <label htmlFor="rev-name" className="form-label text-secondary small">Your Name</label>
                    <input 
                      id="rev-name"
                      type="text" 
                      className="form-control form-control-sm"
                      placeholder="e.g. Jane Doe"
                      value={newReviewName}
                      onChange={(e) => setNewReviewName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="rev-rating" className="form-label text-secondary small d-block">Rating</label>
                    <select 
                      id="rev-rating"
                      className="form-select form-select-sm"
                      style={{ width: '120px' }}
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(Number(e.target.value))}
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rev-comment" className="form-label text-secondary small">Comments</label>
                    <textarea 
                      id="rev-comment"
                      className="form-control form-control-sm"
                      rows={4}
                      placeholder="Describe your plant condition, packaging, care..."
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="my-5 pt-5 border-top" style={{ borderColor: 'var(--border-light)' }}>
        <h3 className="font-serif fw-bold text-center text-primary mb-5 display-6">Related botanical finds</h3>
        <div className="row g-4">
          {relatedProducts.map(p => (
            <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
