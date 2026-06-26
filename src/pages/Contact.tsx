import React, { useState } from 'react';

export const Contact: React.FC = () => {
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('care');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.dispatchEvent(new CustomEvent('toast', { detail: 'Message sent successfully!' }));
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('care');
      setMessage('');
    }, 1800);
  };

  return (
    <div className="container-fluid py-4 px-3 px-md-5 reveal-fade">
      {/* Header */}
      <div className="text-center my-4 py-3">
        <span className="text-uppercase text-muted font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
          Customer Support
        </span>
        <h1 className="display-5 font-serif fw-bold text-primary m-0 mt-2">Get in touch</h1>
      </div>

      <div className="row g-5">
        {/* Left Column: Contact details & Map */}
        <div className="col-12 col-lg-5">
          <h3 className="font-serif fw-bold text-primary mb-4">Contact Details</h3>
          
          <div className="d-flex flex-column gap-4 mb-5">
            {/* Address */}
            <div className="d-flex gap-3">
              <div className="text-accent fs-4" style={{ color: 'var(--accent-secondary)' }}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold text-primary mb-1">Our Greenhouse Boutique</h6>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem' }}>
                  842 Botanical Way, Suite C<br />
                  Portland, Oregon 97205
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="d-flex gap-3">
              <div className="text-accent fs-4" style={{ color: 'var(--accent-secondary)' }}>
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold text-primary mb-1">Electronic Mail</h6>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem' }}>
                  hello@verveandvine.com<br />
                  support@verveandvine.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="d-flex gap-3">
              <div className="text-accent fs-4" style={{ color: 'var(--accent-secondary)' }}>
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold text-primary mb-1">Telephone</h6>
                <p className="text-secondary m-0" style={{ fontSize: '0.95rem' }}>
                  +1 (503) 555-0142<br />
                  Mon - Fri: 9:00 AM - 5:00 PM PST
                </p>
              </div>
            </div>
          </div>

          {/* Styled Map Card */}
          <div className="card p-3 border-0 bg-secondary" style={{ borderRadius: '8px' }}>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-map-fill text-muted fs-2"></i>
              <div className="text-start">
                <span className="d-block fw-bold" style={{ fontSize: '0.9rem' }}>Want to visit?</span>
                <small className="text-secondary" style={{ fontSize: '0.8rem' }}>We host public greenhouse tours on Saturdays. Reservations required.</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="col-12 col-lg-7">
          <div className="card p-4 p-md-5 border-0 shadow-sm" style={{ backgroundColor: 'var(--bg-card)' }}>
            <h3 className="font-serif fw-bold text-primary mb-4">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-5">
                <i className="bi bi-envelope-check-fill text-success" style={{ fontSize: '4rem' }}></i>
                <h4 className="font-serif fw-bold text-primary mt-3">Message Received!</h4>
                <p className="text-secondary mx-auto mt-2 mb-4" style={{ maxWidth: '400px', fontSize: '0.95rem' }}>
                  Thank you for writing to us. Our greenhouse care experts will review your request and get back to you within 24 business hours.
                </p>
                <button className="btn btn-outline-primary" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-12 col-sm-6">
                    <label htmlFor="con-name" className="form-label text-secondary small fw-medium">Your Name</label>
                    <input 
                      id="con-name"
                      type="text" 
                      className="form-control" 
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  {/* Email */}
                  <div className="col-12 col-sm-6">
                    <label htmlFor="con-email" className="form-label text-secondary small fw-medium">Email Address</label>
                    <input 
                      id="con-email"
                      type="email" 
                      className="form-control" 
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label htmlFor="con-subject" className="form-label text-secondary small fw-medium">Inquiry Topic</label>
                  <select 
                    id="con-subject"
                    className="form-select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={isSubmitting}
                  >
                    <option value="care">Plant Care Advice & Guides</option>
                    <option value="order">Order Tracking & Returns</option>
                    <option value="rare">Rare Specimen Inquiries</option>
                    <option value="artisan">Artisan Ceramics Custom Requests</option>
                    <option value="other">General Questions</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="con-message" className="form-label text-secondary small fw-medium">Your Message</label>
                  <textarea 
                    id="con-message"
                    className="form-control" 
                    rows={6} 
                    placeholder="Tell us details about your plant, order number, or care question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary py-3 mt-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Transmitting Message...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2"></i>Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <section className="my-5 pt-5 border-top" style={{ borderColor: 'var(--border-light)' }}>
        <div className="text-center mb-5">
          <span className="text-uppercase text-muted font-monospace" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
            Frequently Asked Questions
          </span>
          <h2 className="font-serif display-6 mt-2">Help & General Care Guides</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8">
            <div className="accordion accordion-flush" id="faqAccordion">
              {/* FAQ 1 */}
              <div className="accordion-item border rounded mb-3 overflow-hidden">
                <h2 className="accordion-header" id="headingOne">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="false" 
                    aria-controls="collapseOne"
                  >
                    What happens if my plant arrives damaged?
                  </button>
                </h2>
                <div 
                  id="collapseOne" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingOne" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We offer a 30-Day Guarantee on all botanical specimens. If your plant arrives damaged or displays signs of significant stress, simply snap a picture and email it to support@verveandvine.com. We will immediately issue a replacement or full store credit, no return shipment needed.
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item border rounded mb-3 overflow-hidden">
                <h2 className="accordion-header" id="headingTwo">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="false" 
                    aria-controls="collapseTwo"
                  >
                    How do you wrap plants to withstand shipping?
                  </button>
                </h2>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingTwo" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We use a multi-step root protection process. We wrap root balls in damp sphagnum moss inside compostable starch bags to lock hydration. The foliage is surrounded by a stiff, custom-sized recyclable crinkle board sleeve that stops movement. During cold winter periods, we include organic warmth pads to shield roots from freezing.
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item border rounded mb-3 overflow-hidden">
                <h2 className="accordion-header" id="headingThree">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="false" 
                    aria-controls="collapseThree"
                  >
                    Are your pots and accessories drainage-safe?
                  </button>
                </h2>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingThree" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes! All our hand-thrown terracotta, sandstone, and concrete pots are equipped with custom drainage holes and include a matching detachable saucer. We believe drainage is critical to plant health, preventing root rot and soil mineral build-ups.
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item border rounded mb-3 overflow-hidden">
                <h2 className="accordion-header" id="headingFour">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFour"
                  >
                    Where do you get your rare specimens?
                  </button>
                </h2>
                <div 
                  id="collapseFour" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingFour" 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    All rare plants, like our Monstera Albo and Calathea Orbifolia, are grown through tissue culture or propagated cuttings at our partner certified organic greenhouses in Oregon. We do not extract plants from wild tropical forests, adhering strictly to ecological preservation guidelines.
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
