import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenWishlist }) => {
  const { theme, toggleTheme } = useTheme();
  const { cartCount, wishlist } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3 px-3 px-md-5">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand font-serif fw-bold fs-3 text-primary d-flex align-items-center" to="/">
          <i className="bi bi-flower1 me-2 text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
          Verve & Vine
        </Link>

        {/* Hamburger Toggler */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-primary fs-3"></i>
        </button>

        {/* Links & Controls */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-md-3">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-2 font-serif text-secondary ${isActive ? 'text-primary fw-semibold border-bottom border-2 border-success' : ''}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-2 font-serif text-secondary ${isActive ? 'text-primary fw-semibold border-bottom border-2 border-success' : ''}`} to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-2 font-serif text-secondary ${isActive ? 'text-primary fw-semibold border-bottom border-2 border-success' : ''}`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link px-2 font-serif text-secondary ${isActive ? 'text-primary fw-semibold border-bottom border-2 border-success' : ''}`} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {/* Search Toggle */}
            <div className="position-relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="d-flex align-items-center bg-card border rounded px-2" style={{ width: '220px' }}>
                  <input 
                    type="text" 
                    placeholder="Search plants..." 
                    className="form-control form-control-sm border-0 bg-transparent px-1 shadow-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button type="submit" className="btn btn-link p-0 text-muted">
                    <i className="bi bi-search"></i>
                  </button>
                  <button type="button" className="btn btn-link p-0 text-muted ms-2" onClick={() => setSearchOpen(false)}>
                    <i className="bi bi-x"></i>
                  </button>
                </form>
              ) : (
                <button className="theme-switch" onClick={() => setSearchOpen(true)} aria-label="Search">
                  <i className="bi bi-search"></i>
                </button>
              )}
            </div>

            {/* Dark Mode Switch */}
            <button className="theme-switch" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>}
            </button>

            {/* Wishlist Button */}
            <button className="theme-switch position-relative" onClick={onOpenWishlist} aria-label="Wishlist">
              <i className="bi bi-heart"></i>
              {wishlist.length > 0 && (
                <span className="header-badge">{wishlist.length}</span>
              )}
            </button>

            {/* Cart Button */}
            <button className="theme-switch position-relative" onClick={onOpenCart} aria-label="Cart">
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
                <span className="header-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
