import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Sync state with URL params
  useEffect(() => {
    const cats = searchParams.getAll('category');
    if (cats.length > 0) {
      setSelectedCategories(cats);
    } else {
      setSelectedCategories([]);
    }

    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery('');
    }
  }, [searchParams]);

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      let updated;
      if (prev.includes(category)) {
        updated = prev.filter(c => c !== category);
      } else {
        updated = [...prev, category];
      }

      // Update URL parameters
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('category');
      updated.forEach(c => newParams.append('category', c));
      setSearchParams(newParams);

      return updated;
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(200);
    setSortOption('featured');
    setSearchQuery('');
    setSearchParams(new URLSearchParams());
  };

  // Derived filtered & sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category check
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
          return false;
        }
        // Price check
        if (product.price > maxPrice) {
          return false;
        }
        // Search query check
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(query);
          const matchesDesc = product.description.toLowerCase().includes(query);
          const matchesCat = product.category.toLowerCase().includes(query);
          const matchesSub = product.subcategory.toLowerCase().includes(query);
          if (!matchesName && !matchesDesc && !matchesCat && !matchesSub) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'featured':
          default:
            return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        }
      });
  }, [selectedCategories, maxPrice, searchQuery, sortOption]);

  return (
    <div className="container-fluid py-4 px-3 px-md-5 reveal-fade">
      {/* Page Title & Breadcrumb */}
      <div className="text-center my-4 py-3">
        <span className="text-uppercase text-muted font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
          Explore Verve & Vine
        </span>
        <h1 className="display-5 font-serif fw-bold text-primary m-0 mt-2">Boutique catalog</h1>
      </div>

      <div className="row g-4">
        {/* Sidebar Filters - Desktop */}
        <div className={`col-lg-3 d-none d-lg-block`}>
          <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
            <div className="card border-0 shadow-sm p-4" style={{ backgroundColor: 'var(--bg-card)' }}>
              <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                <h5 className="font-serif fw-bold m-0">Filters</h5>
                <button 
                  onClick={handleClearFilters} 
                  className="btn btn-link text-muted p-0 font-monospace text-decoration-none"
                  style={{ fontSize: '0.8rem' }}
                >
                  Clear All
                </button>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <h6 className="font-serif fw-bold text-primary mb-3">Departments</h6>
                <div className="d-flex flex-column gap-2">
                  {['Plants', 'Planters', 'Accessories'].map(cat => (
                    <label key={cat} className="d-flex align-items-center gap-2 text-secondary" style={{ cursor: 'pointer', fontSize: '0.95rem' }}>
                      <input 
                        type="checkbox" 
                        className="form-check-input"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Slider */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="font-serif fw-bold text-primary m-0">Max Price</h6>
                  <span className="font-monospace text-accent fw-bold">${maxPrice}</span>
                </div>
                <input 
                  type="range" 
                  className="form-range" 
                  min="20" 
                  max="200" 
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.75rem' }}>
                  <span>$20</span>
                  <span>$200</span>
                </div>
              </div>

              {/* Search Bar inside Filters */}
              <div>
                <h6 className="font-serif fw-bold text-primary mb-3">Keyword Search</h6>
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="Search catalog..." 
                    className="form-control form-control-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      className="btn btn-outline-secondary btn-sm" 
                      onClick={() => setSearchQuery('')}
                      type="button"
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Items */}
        <div className="col-12 col-lg-9">
          {/* Top sorting and active indicators */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3 pb-3 border-bottom" style={{ borderColor: 'var(--border-light)' }}>
            <div className="text-secondary" style={{ fontSize: '0.95rem' }}>
              Showing <span className="fw-semibold text-primary">{filteredProducts.length}</span> results
            </div>

            <div className="d-flex align-items-center gap-3">
              {/* Mobile Filter Trigger */}
              <button 
                className="btn btn-secondary btn-sm d-lg-none d-flex align-items-center gap-2"
                onClick={() => setShowMobileFilters(true)}
              >
                <i className="bi bi-sliders"></i> Filters
              </button>

              {/* Sort Selector */}
              <div className="d-flex align-items-center gap-2">
                <label htmlFor="sort" className="text-muted d-none d-sm-block text-nowrap" style={{ fontSize: '0.9rem' }}>Sort By</label>
                <select 
                  id="sort" 
                  className="form-select form-select-sm" 
                  style={{ width: '160px' }}
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(selectedCategories.length > 0 || searchQuery || maxPrice < 200) && (
            <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
              <span className="text-muted font-monospace" style={{ fontSize: '0.8rem' }}>Active:</span>
              {selectedCategories.map(cat => (
                <span key={cat} className="badge bg-secondary text-primary d-flex align-items-center gap-2 py-2 px-3 rounded-pill" style={{ fontSize: '0.8rem' }}>
                  {cat}
                  <i className="bi bi-x-circle-fill text-muted" style={{ cursor: 'pointer' }} onClick={() => handleCategoryChange(cat)}></i>
                </span>
              ))}
              {maxPrice < 200 && (
                <span className="badge bg-secondary text-primary d-flex align-items-center gap-2 py-2 px-3 rounded-pill" style={{ fontSize: '0.8rem' }}>
                  Under ${maxPrice}
                  <i className="bi bi-x-circle-fill text-muted" style={{ cursor: 'pointer' }} onClick={() => setMaxPrice(200)}></i>
                </span>
              )}
              {searchQuery && (
                <span className="badge bg-secondary text-primary d-flex align-items-center gap-2 py-2 px-3 rounded-pill" style={{ fontSize: '0.8rem' }}>
                  Search: "{searchQuery}"
                  <i className="bi bi-x-circle-fill text-muted" style={{ cursor: 'pointer' }} onClick={() => setSearchQuery('')}></i>
                </span>
              )}
              <button onClick={handleClearFilters} className="btn btn-link text-danger p-0 ms-2 font-monospace text-decoration-none" style={{ fontSize: '0.8rem' }}>
                Reset
              </button>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-5 my-5 card border-0 shadow-sm" style={{ backgroundColor: 'var(--bg-card)' }}>
              <i className="bi bi-search text-muted" style={{ fontSize: '4rem' }}></i>
              <h3 className="font-serif mt-3 text-primary">No Products Found</h3>
              <p className="text-secondary mx-auto mt-2 mb-4" style={{ maxWidth: '400px' }}>
                We couldn't find any botanical design matches matching your criteria. Try adjusting your filters.
              </p>
              <div>
                <button onClick={handleClearFilters} className="btn btn-primary">
                  View Full Catalog
                </button>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Collapsible Mobile Filters Drawer */}
      {showMobileFilters && (
        <>
          <div className="drawer-backdrop show" onClick={() => setShowMobileFilters(false)}></div>
          <div className="drawer-custom show" style={{ zIndex: 1100 }}>
            <div className="drawer-header">
              <h4 className="m-0 font-serif">Filters</h4>
              <button type="button" className="btn-close" onClick={() => setShowMobileFilters(false)}></button>
            </div>
            
            <div className="drawer-body">
              {/* Categories */}
              <div className="mb-4">
                <h6 className="font-serif fw-bold text-primary mb-3">Departments</h6>
                <div className="d-flex flex-column gap-2">
                  {['Plants', 'Planters', 'Accessories'].map(cat => (
                    <label key={cat} className="d-flex align-items-center gap-2 text-secondary" style={{ cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        className="form-check-input"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Slider */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="font-serif fw-bold text-primary m-0">Max Price</h6>
                  <span className="font-monospace text-accent fw-bold">${maxPrice}</span>
                </div>
                <input 
                  type="range" 
                  className="form-range" 
                  min="20" 
                  max="200" 
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.75rem' }}>
                  <span>$20</span>
                  <span>$200</span>
                </div>
              </div>

              {/* Keyword Search */}
              <div>
                <h6 className="font-serif fw-bold text-primary mb-3">Keyword Search</h6>
                <input 
                  type="text" 
                  placeholder="Search catalog..." 
                  className="form-control"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="drawer-footer">
              <button className="btn btn-primary w-100 mb-2" onClick={() => setShowMobileFilters(false)}>
                Apply Filters
              </button>
              <button className="btn btn-secondary w-100" onClick={() => { handleClearFilters(); setShowMobileFilters(false); }}>
                Clear All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
