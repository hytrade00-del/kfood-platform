'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <section className="legal-page" style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Terms of Service</h1>
        
        <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
          <p style={{ color: '#666', marginBottom: '2rem' }}><strong>Last updated:</strong> March 2026</p>
          
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>1. Acceptance of Terms</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            By accessing and using K-Food Global (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>2. Disclaimer of Warranties</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            The materials on K-Food Global's website are provided on an 'as is' basis. K-Food Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. The cooking recipes and substitute suggestions are for informational purposes only. Results may vary, and we are not responsible for any adverse reactions or culinary failures.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>3. Intellectual Property</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            All custom recipes, texts, graphics, and compilation on this site belong to K-Food Global unless otherwise stated. You may not reproduce, distribute, or create derivative works without explicit written permission.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>4. Affiliate Links & Advertising</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1.5rem' }}>
            K-Food Global may display advertising and use affiliate links. Clicking on these links or purchasing items through them may earn us a small commission. This helps keep the platform free for all users.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>5. Governing Law</h2>
          <p style={{ lineHeight: 1.9, color: '#444' }}>
            These terms and conditions are governed by and construed in accordance with standard international website guidelines. Any disputes shall be subject to the exclusive jurisdiction of the competent courts.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
