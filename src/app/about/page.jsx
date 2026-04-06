'use client';
import React from 'react';
import { motion } from 'framer-motion';
import recipesData from '../../data/recipes.json';

export default function AboutPage() {
  return (
    <section className="about-page" style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About K-Food Global</h1>
        <p style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '3rem', fontSize: '1.1rem' }}>Making authentic Korean cuisine accessible to everyone, everywhere.</p>

        <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>🍳 Our Mission</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1rem' }}>
            Korean food is one of the world's most exciting and flavorful cuisines — but for home cooks outside Korea, finding authentic ingredients can be a real challenge. Specialty K-mart ingredients are often expensive, hard to find, or simply unavailable.
          </p>
          <p style={{ lineHeight: 1.9, color: '#444' }}>
            <strong>K-Food Global</strong> was built to solve this problem. We provide authentic Korean recipes alongside carefully researched ingredient substitutes that you can find at your local supermarket — without sacrificing the real taste.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>🌍 Who We Are</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1rem' }}>
            I am just an individual who loves cooking and Korean cuisine. Having lived and cooked in different places, I realized how hard it can be to find authentic Korean ingredients at local supermarkets without spending a fortune. K-Food Global is my personal project to help make authentic-tasting Korean food easily accessible to everyone.
          </p>
          <p style={{ lineHeight: 1.9, color: '#444' }}>
            Through trial and error in my own kitchen, I've gathered the most practical ingredient substitutes. My goal is to share these simple, everyday swaps so anyone can enjoy cooking delicious Korean food at home with ease.
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>📊 What You'll Find Here</h2>
          <ul style={{ lineHeight: 2, color: '#444', paddingLeft: '1.5rem' }}>
            <li><strong>{recipesData.length}+ authentic Korean recipes</strong> — from everyday home cooking to special occasion dishes</li>
            <li><strong>Smart ingredient substitutes</strong> — with taste match scores and cost comparisons</li>
            <li><strong>Pantry level system</strong> — recipes rated by how much Korean-specific pantry you need (Level 1–3)</li>
            <li><strong>Metric & US unit support</strong> — automatic unit conversion for all ingredients</li>
            <li><strong>Serving size scaling</strong> — adjust every recipe to your household size</li>
            <li><strong>Kitchen tool alternatives</strong> — what to use if you don't have Korean cookware</li>
          </ul>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: 'var(--shadow)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>🤝 Transparency & Affiliates</h2>
          <p style={{ lineHeight: 1.9, color: '#444', marginBottom: '1rem' }}>
            Some ingredient cards on this site contain affiliate links to Amazon. As an Amazon Associate, we earn a small commission when you purchase through these links — at no extra cost to you. This helps us keep the platform free and continue adding new recipes.
          </p>
          <p style={{ lineHeight: 1.9, color: '#444' }}>
            We only link to products we genuinely recommend. Our substitution advice is never influenced by affiliate relationships.
          </p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #ec4913 0%, #f97316 100%)', borderRadius: '20px', padding: '2.5rem', color: 'white', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>📬 Get in Touch</h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', opacity: 0.9 }}>
            Have a recipe request? Found an error? We'd love to hear from you.
          </p>
          <a href="mailto:hytrade00@gmail.com" style={{ display: 'inline-block', background: 'white', color: 'var(--primary)', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>hytrade00@gmail.com</a>
        </div>
      </motion.div>
    </section>
  );
}
