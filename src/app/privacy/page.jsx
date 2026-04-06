'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <section className="legal-page" style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
        
        <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
          <p style={{ color: '#666', marginBottom: '2rem' }}><strong>Last updated:</strong> March 2026</p>
          
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>1. Information We Collect</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            K-Food Global itself does not require account registration or collect personally identifiable information directly. However, we use third-party services like Google AdSense and analytics tools.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>2. Cookies and Advertising</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1rem' }}>
            Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
          </p>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>3. Third-Party Links & Affiliates</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            Our site contains affiliate links to Amazon.com. If you click these links, you will be directed to Amazon, which has its own privacy policy. We are not responsible for the privacy practices of third-party sites.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>4. Changes to This Policy</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>5. Contact Us</h2>
          <p style={{ lineHeight: 1.9, color: '#444' }}>
            If you have questions about this privacy policy, please contact us at <a href="mailto:hytrade00@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>hytrade00@gmail.com</a>.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
