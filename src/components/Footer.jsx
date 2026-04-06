'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('kfood_cookie_consent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  return (
    <>
      <footer style={{ marginTop: '5rem', padding: '4rem 0', background: '#2d3436', color: 'white' }}>
        <div className="container">
          <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div className="logo" style={{ color: 'white' }}>🍳 K-FOOD</div>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/about">About</Link>
              <button 
                onClick={() => setShowContact(true)} 
                style={{ background: 'none', border: 'none', color: '#ccc', marginLeft: '20px', cursor: 'pointer', fontSize: '17px' }}
              >
                Contact
              </button>
            </div>
          </div>
          <p>© 2026 K-FOOD GLOBAL</p>
        </div>
        <style jsx>{`
          .footer-links :global(a) {
            color: #ccc;
            text-decoration: none;
            margin-left: 20px;
          }
        `}</style>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContact(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', maxWidth: '450px', width: '100%', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                <button onClick={() => setShowContact(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>✕</button>
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>Contact Us</h2>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.6 }}>Got questions, feedback, or partnership inquiries?<br />We'd love to hear from you!</p>
              <a href="mailto:hytrade00@gmail.com" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', transition: 'transform 0.2s' }}>hytrade00@gmail.com</a>
              <p style={{ marginTop: '1.5rem', color: '#999', fontSize: '0.85rem' }}>We typically respond within 24 hours.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 100, opacity: 0 }} 
            className="cookie-banner no-print"
            style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#2d3436', padding: '1rem', zIndex: 2000, boxShadow: '0 -10px 30px rgba(0,0,0,0.1)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <p style={{ color: 'white', margin: 0, fontSize: '0.9rem', lineHeight: 1.5, flex: '1 1 300px' }}>
                We use cookies to personalize content and ads, provide social media features, and analyze our traffic. We also share information with our advertising and analytics partners.
                <Link href="/privacy" style={{ color: '#f9ca24', marginLeft: '10px', textDecoration: 'underline', fontWeight: 600 }}>Learn more</Link>
              </p>
              <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
                <button 
                  onClick={() => { localStorage.setItem('kfood_cookie_consent', 'false'); setShowCookieBanner(false); }} 
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid #fff', 
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontWeight: '700'
                  }}
                >
                  Decline
                </button>
                <button 
                  onClick={() => { localStorage.setItem('kfood_cookie_consent', 'true'); setShowCookieBanner(false); }} 
                  className="signup-btn" 
                >
                  Accept All Cookies
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
