import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="reveal-fade">
      {/* Hero Header */}
      <section className="py-5 px-3 px-md-5 text-center bg-secondary" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container-fluid py-4" style={{ maxWidth: '800px' }}>
          <span className="text-uppercase text-muted font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>
            The Verve & Vine Story
          </span>
          <h1 className="display-4 font-serif fw-bold text-primary my-3">Cultivating architectural green spaces.</h1>
          <p className="lead text-secondary m-0" style={{ fontSize: '1.15rem' }}>
            We believe plants are living sculptures that elevate the human spirit, purify our air, and ground our indoor environments.
          </p>
        </div>
      </section>

      {/* Brand Journey */}
      <section className="py-5 px-3 px-md-5 container-fluid">
        <div className="row g-5 align-items-center py-4">
          <div className="col-12 col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80" 
              alt="Artisan plant greenhouse setting" 
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="font-serif mb-4 display-6">From a small sunroom greenhouse to a national community.</h2>
            <p className="text-secondary mb-3">
              Verve & Vine was founded in 2021 by a landscape architect and a botanical collector who noticed a gap in how plants were delivered to homes. The options were either mass-produced warehouse store greens that struggled to adapt, or overpriced nurseries with limited shipping options.
            </p>
            <p className="text-secondary mb-4">
              We started by acclimating rare Monstera and Philodendron cuttings in our small backyard sunroom, shipping them safely in custom insulated cardboard sheets. Today, we work with a network of organic greenhouses and local pot throwers across the region, while keeping the same boutique core value: quality over quantity.
            </p>
            <div className="row g-3">
              <div className="col-6 col-sm-4">
                <div className="p-3 border rounded text-center" style={{ backgroundColor: 'var(--bg-card)' }}>
                  <h3 className="font-monospace fw-bold text-accent mb-1" style={{ color: 'var(--accent-secondary)' }}>45k+</h3>
                  <small className="text-secondary">Plants Acclimated</small>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="p-3 border rounded text-center" style={{ backgroundColor: 'var(--bg-card)' }}>
                  <h3 className="font-monospace fw-bold text-accent mb-1" style={{ color: 'var(--accent-secondary)' }}>15+</h3>
                  <small className="text-secondary">Artisan Potters</small>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="p-3 border rounded text-center" style={{ backgroundColor: 'var(--bg-card)' }}>
                  <h3 className="font-monospace fw-bold text-accent mb-1" style={{ color: 'var(--accent-secondary)' }}>100%</h3>
                  <small className="text-secondary">Eco Packing</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate values / Sustainability banner */}
      <section className="py-5 px-3 px-md-5 text-white" style={{ backgroundColor: 'var(--accent-primary)' }}>
        <div className="container-fluid py-3">
          <div className="text-center mb-5">
            <span className="text-uppercase font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '2px', opacity: 0.85 }}>
              Core Philosophy
            </span>
            <h2 className="font-serif display-6 mt-2 text-white">How we do things differently</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="h-100 p-4 border border-white-50 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <i className="bi bi-tree-fill fs-3 mb-3 d-block text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                <h5 className="font-serif fw-bold text-white mb-2">Sustainable Cultivation</h5>
                <p className="m-0" style={{ opacity: 0.85, fontSize: '0.95rem' }}>
                  We do not source wild-harvested plants. All rare foliage is tissue-cultured or propagated in greenhouses, protecting delicate tropical forest ecosystems from depletion.
                </p>
              </div>
            </div>
            
            <div className="col-12 col-md-4">
              <div className="h-100 p-4 border border-white-50 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <i className="bi bi-recycle fs-3 mb-3 d-block text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                <h5 className="font-serif fw-bold text-white mb-2">Zero-Plastic Packing</h5>
                <p className="m-0" style={{ opacity: 0.85, fontSize: '0.95rem' }}>
                  Our pots are wrapped in corrugated kraft cushions. We seal dirt using biodegradable plant starch wraps and soy inks. Not a single bubble wrap sheet is used.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="h-100 p-4 border border-white-50 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <i className="bi bi-people-fill fs-3 mb-3 d-block text-accent" style={{ color: 'var(--accent-secondary)' }}></i>
                <h5 className="font-serif fw-bold text-white mb-2">Fair-Wage Craftsmanship</h5>
                <p className="m-0" style={{ opacity: 0.85, fontSize: '0.95rem' }}>
                  We collaborate with local ceramics and metal workshops, paying premium above-market commissioning fees to ensure local artistic traditions survive and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Artisans / Team */}
      <section className="py-5 px-3 px-md-5 container-fluid">
        <div className="text-center mb-5 mt-4">
          <span className="text-uppercase text-muted font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Meet Verve & Vine
          </span>
          <h2 className="font-serif display-6 mt-2">Greenhouse Designers & Craftsmen</h2>
          <p className="text-secondary mx-auto mt-2" style={{ maxWidth: '600px' }}>
            The botanical experts, clay throwers, and logistics wizards who keep your plants healthy and beautiful.
          </p>
        </div>

        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0 h-100 bg-transparent text-center">
              <div className="rounded overflow-hidden mb-3 shadow-sm" style={{ height: '280px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80" 
                  alt="Amna Qureshi" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="font-serif fw-bold m-0 text-primary">Amna Qureshi</h5>
              <small className="text-muted d-block mt-1">Co-Founder & Plant Pathologist</small>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0 h-100 bg-transparent text-center">
              <div className="rounded overflow-hidden mb-3 shadow-sm" style={{ height: '280px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80" 
                  alt="Sheraz Ahmed" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="font-serif fw-bold m-0 text-primary">Sheraz Ahmed</h5>
              <small className="text-muted d-block mt-1">Co-Founder & Landscape Architect</small>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0 h-100 bg-transparent text-center">
              <div className="rounded overflow-hidden mb-3 shadow-sm" style={{ height: '280px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80" 
                  alt="Nida Khan" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="font-serif fw-bold m-0 text-primary">Nida Khan</h5>
              <small className="text-muted d-block mt-1">Lead Ceramic Artist</small>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0 h-100 bg-transparent text-center">
              <div className="rounded overflow-hidden mb-3 shadow-sm" style={{ height: '280px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80" 
                  alt="Zohaib Hassan" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h5 className="font-serif fw-bold m-0 text-primary">Zohaib Hassan</h5>
              <small className="text-muted d-block mt-1">Logistics & Acclimation Manager</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
