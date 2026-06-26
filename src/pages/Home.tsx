import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  // Get featured products
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="reveal-fade">
      {/* Hero Section */}
      <section className="hero-wrapper mx-3 mx-md-5 my-4 py-5 px-4 px-md-5 d-flex align-items-center" style={{ minHeight: '480px', position: 'relative' }}>
        <div className="row w-100 align-items-center g-4">
          <div className="col-12 col-lg-6">
            <span className="text-uppercase fw-semibold font-monospace text-muted mb-2 d-inline-block" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>
              Boutique Botanical Design
            </span>
            <h1 className="display-4 font-serif fw-bold text-primary mb-3" style={{ lineHeight: '1.2' }}>
              Bring the serenity of nature indoors.
            </h1>
            <p className="lead text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
              Transform your living space with our hand-picked rare foliage, architectural planters, and premium organic botanical styling elements.
            </p>
            <div className="d-flex gap-3">
              <Link to="/shop" className="btn btn-primary px-4 py-3">
                Explore Collection
              </Link>
              <Link to="/about" className="btn btn-outline-primary px-4 py-3">
                Our Story
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center position-relative">
            <img 
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80" 
              alt="Premium botanical aesthetic plants in terracotta" 
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '420px', width: '100%', objectFit: 'cover', borderRadius: '12px' }}
            />
            {/* Float badge */}
            <div 
              className="position-absolute bg-white text-dark p-3 shadow rounded d-none d-md-flex align-items-center gap-3"
              style={{ bottom: '-20px', left: '20px', borderLeft: '4px solid var(--accent-primary)' }}
            >
              <i className="bi bi-patch-check-fill text-success fs-3"></i>
              <div className="text-start">
                <span className="d-block fw-bold" style={{ fontSize: '0.85rem' }}>100% Sustainably Packed</span>
                <small className="text-muted" style={{ fontSize: '0.75rem' }}>Biodegradable shipping materials</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category circular links */}
      <section className="py-5 px-3 px-md-5">
        <div className="container-fluid">
          <div className="text-center mb-5">
            <h2 className="font-serif display-6 mb-2">Curated Collections</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Filter by department to find the perfect green accent or design item for your styling projects.
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {/* Category 1 */}
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <Link to="/shop?category=Plants" className="text-decoration-none text-primary d-block card-hover-scale">
                <div 
                  className="rounded-circle mx-auto mb-3 overflow-hidden shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: '180px', height: '180px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=300&auto=format&fit=crop&q=80" 
                    alt="Plants category" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h5 className="font-serif fw-bold m-0 fs-5">Exotic Plants</h5>
                <small className="text-muted">Rare & common indoor foliage</small>
              </Link>
            </div>

            {/* Category 2 */}
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <Link to="/shop?category=Planters" className="text-decoration-none text-primary d-block card-hover-scale">
                <div 
                  className="rounded-circle mx-auto mb-3 overflow-hidden shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: '180px', height: '180px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&auto=format&fit=crop&q=80" 
                    alt="Planters category" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h5 className="font-serif fw-bold m-0 fs-5">Artisanal Planters</h5>
                <small className="text-muted">Hand-thrown clay & concrete pots</small>
              </Link>
            </div>

            {/* Category 3 */}
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <Link to="/shop?category=Accessories" className="text-decoration-none text-primary d-block card-hover-scale">
                <div 
                  className="rounded-circle mx-auto mb-3 overflow-hidden shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: '180px', height: '180px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&auto=format&fit=crop&q=80" 
                    alt="Accessories category" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h5 className="font-serif fw-bold m-0 fs-5">Care & Tools</h5>
                <small className="text-muted">Hangers, brass cans & organic oils</small>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5 px-3 px-md-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-fluid">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
            <div className="text-center text-md-start">
              <h2 className="font-serif display-6 mb-2">Featured Arrivals</h2>
              <p className="text-secondary m-0">Handselected, healthy botanical specimens and premium crafts.</p>
            </div>
            <Link to="/shop" className="btn btn-outline-primary mt-3 mt-md-0">
              View All Products
            </Link>
          </div>

          <div className="row g-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-5 px-3 px-md-5 my-3">
        <div className="container-fluid">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80" 
                alt="Styling room with plants" 
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-md-6">
              <span className="text-uppercase fw-semibold font-monospace text-muted mb-2 d-inline-block" style={{ fontSize: '0.8rem' }}>
                Our Green Philosophy
              </span>
              <h2 className="font-serif mb-4 display-6">Plants make rooms feel alive.</h2>
              <div className="d-flex gap-3 mb-4">
                <div className="text-accent fs-3" style={{ color: 'var(--accent-secondary)' }}>
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>
                <div>
                  <h5 className="font-serif fw-bold">Careful Greenhouse Acclimation</h5>
                  <p className="text-secondary">All rare foliage is acclimated for a minimum of 4 weeks in our local boutique glasshouses before shipping, ensuring they transition smoothly to your indoor ambient climate.</p>
                </div>
              </div>
              
              <div className="d-flex gap-3 mb-4">
                <div className="text-accent fs-3" style={{ color: 'var(--accent-secondary)' }}>
                  <i className="bi bi-box-seam-fill"></i>
                </div>
                <div>
                  <h5 className="font-serif fw-bold">Eco-Insulated Safe Shipping</h5>
                  <p className="text-secondary">We wrap all pots in recycled crinkle board and lock roots in wet moss bags. In winter, heat pads are automatically included in package envelopes free of charge.</p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="text-accent fs-3" style={{ color: 'var(--accent-secondary)' }}>
                  <i className="bi bi-award-fill"></i>
                </div>
                <div>
                  <h5 className="font-serif fw-bold">Bespoke Artisan Collaboration</h5>
                  <p className="text-secondary">Our ceramic and sandstone pots are created in micro-batches in collaboration with local clay throwers and designers, keeping carbon footprint minimal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 px-3 px-md-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-fluid">
          <div className="text-center mb-5">
            <h2 className="font-serif display-6 mb-2">Loved by Collectors</h2>
            <p className="text-secondary">Real reviews from our community of plant parents and interior stylists.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card border-0 p-4 shadow-sm h-100">
                <div className="d-flex gap-1 text-warning mb-3">
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                </div>
                <p className="text-secondary mb-4 italic">
                  "I was terrified of ordering a $185 Monstera Albo online, but Verve & Vine packaged it perfectly. It arrived fresh, hydrated, and is already putting out massive leaves! Truly premium."
                </p>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle overflow-hidden bg-muted" style={{ width: '45px', height: '45px' }}>
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Sarah J" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h6 className="m-0 fw-bold font-serif">Sarah Jenkins</h6>
                    <small className="text-muted">Botanical Stylist</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card border-0 p-4 shadow-sm h-100">
                <div className="d-flex gap-1 text-warning mb-3">
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                </div>
                <p className="text-secondary mb-4 italic">
                  "The clay arch pots have an incredible sand matte texture that I haven't found anywhere else. The drainage saucer setup is so clean. They complement my mid-century modern shelves beautifully."
                </p>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle overflow-hidden bg-muted" style={{ width: '45px', height: '45px' }}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="David K" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h6 className="m-0 fw-bold font-serif">David Kross</h6>
                    <small className="text-muted">Architect</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card border-0 p-4 shadow-sm h-100">
                <div className="d-flex gap-1 text-warning mb-3">
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                  <i className="bi bi-star-fill text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                </div>
                <p className="text-secondary mb-4 italic">
                  "Fast shipping, premium support care manuals, and stunning aesthetics. The brass watering can feels solid and has a lovely weight. It's essentially a sculpture on my sideboard."
                </p>
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle overflow-hidden bg-muted" style={{ width: '45px', height: '45px' }}>
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="Avery M" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h6 className="m-0 fw-bold font-serif">Avery Martinez</h6>
                    <small className="text-muted">Interior Designer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
