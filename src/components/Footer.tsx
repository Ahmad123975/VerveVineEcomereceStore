import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      window.dispatchEvent(new CustomEvent('toast', { detail: 'Thank you for subscribing to our newsletter!' }));
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="py-5 px-3 px-md-5 mt-auto border-top" style={{ backgroundColor: 'var(--bg-secondary)', borderTopColor: 'var(--border-color)' }}>
      <div className="container-fluid">
        <div className="row g-4 justify-content-between">
          {/* Brand & Mission */}
          <div className="col-12 col-md-4">
            <h4 className="font-serif fw-bold mb-3 d-flex align-items-center" style={{ color: 'var(--text-primary)' }}>
              <i className="bi bi-flower1 me-2 text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
              Verve & Vine
            </h4>
            <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
              Cultivating serene spaces through carefully curated rare indoor plants, hand-thrown ceramics, and minimalist home styling accessories. Committed to sustainable sourcing and shipping.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-5" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-secondary fs-5" aria-label="Pinterest"><i className="bi bi-pinterest"></i></a>
              <a href="#" className="text-secondary fs-5" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-secondary fs-5" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* Quick Shop Links */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold text-primary mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Shop</h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
              <li><Link to="/shop?category=Plants" className="text-secondary">Indoor Plants</Link></li>
              <li><Link to="/shop?category=Plants&subcategory=Rare%20Plants" className="text-secondary">Rare Collectibles</Link></li>
              <li><Link to="/shop?category=Planters" className="text-secondary">Artisanal Planters</Link></li>
              <li><Link to="/shop?category=Accessories" className="text-secondary">Botanical Tools</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold text-primary mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Information</h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
              <li><Link to="/about" className="text-secondary">Our Story</Link></li>
              <li><Link to="/about" className="text-secondary">Sustainability</Link></li>
              <li><Link to="/contact" className="text-secondary">FAQs & Help</Link></li>
              <li><Link to="/contact" className="text-secondary">Get In Touch</Link></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="col-12 col-md-3">
            <h6 className="text-uppercase fw-bold text-primary mb-3" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Newsletter</h6>
            <p className="text-secondary mb-3" style={{ fontSize: '0.9rem' }}>
              Join our botanical community. Receive care tips, shop updates, and 10% off your first purchase.
            </p>
            {subscribed ? (
              <div className="alert alert-success py-2 px-3" style={{ fontSize: '0.85rem' }}>
                <i className="bi bi-check-circle-fill me-2"></i>Subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="form-control form-control-sm"
                  style={{ fontSize: '0.85rem' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm py-2 px-3" style={{ fontSize: '0.85rem' }}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="row mt-5 pt-4 border-top" style={{ borderTopColor: 'var(--border-color)', fontSize: '0.85rem' }}>
          <div className="col-12 col-md-6 text-center text-md-start text-secondary mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} Verve & Vine. All rights reserved. Made for premium plant lovers.
          </div>
          <div className="col-12 col-md-6 text-center text-md-end text-secondary d-flex justify-content-center justify-content-md-end gap-3">
            <a href="#" className="text-secondary">Privacy Policy</a>
            <a href="#" className="text-secondary">Terms of Service</a>
            <a href="#" className="text-secondary">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
