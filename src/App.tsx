import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';

interface ToastMessage {
  id: string;
  text: string;
}

function App() {
  // Drawer states
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  // Toast notification state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const newToast: ToastMessage = {
        id: `toast-${Date.now()}-${Math.random()}`,
        text: customEvent.detail
      };
      
      setToasts(prev => [...prev, newToast]);

      // Remove after 3 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== newToast.id));
      }, 3000);
    };

    window.addEventListener('toast', handleToastEvent);
    return () => {
      window.removeEventListener('toast', handleToastEvent);
    };
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Sticky Header */}
        <Navbar 
          onOpenCart={() => setCartOpen(true)} 
          onOpenWishlist={() => setWishlistOpen(true)} 
        />

        {/* Sliding Drawers */}
        <CartDrawer 
          isOpen={cartOpen} 
          onClose={() => setCartOpen(false)} 
        />
        
        <WishlistDrawer 
          isOpen={wishlistOpen} 
          onClose={() => setWishlistOpen(false)} 
          onOpenCart={() => {
            setWishlistOpen(false);
            setCartOpen(true);
          }}
        />

        {/* Dynamic Pages */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Toast Notification Container */}
        <div className="toast-container-custom">
          {toasts.map((toast) => (
            <div key={toast.id} className="toast-custom">
              <i className="bi bi-info-circle-fill"></i>
              <span>{toast.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
