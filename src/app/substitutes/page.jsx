'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, ChevronRight, Tag, DollarSign } from 'lucide-react';
import recipesData from '../../data/recipes.json';

export default function SubstitutesPage() {
  return (
    <section className="substitutes-board" style={{ padding: '4rem 0' }}>
      <h1 className="section-title"><ArrowRightLeft size={32} color="var(--primary)" /> Substitutes Efficiency Board</h1>
      <p style={{ marginBottom: '3rem', color: '#666' }}>Stop overpaying at specialty stores. Here is why and how we hack the authentic taste for half the price.</p>

      <div className="sub-grid">
        {recipesData.flatMap(r => r.ingredients.filter(i => i.substitute)).map((ing, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="sub-card">
            <div className="sub-header">
              <div className="sub-pair">
                <span className="orig-ing">{ing.name}</span>
                <ChevronRight size={18} />
                <span className="sub-ing">{ing.substitute}</span>
              </div>
              <div className="similarity-meter">
                <Tag size={14} /> {ing.similarityScore}% Taste Match
              </div>
            </div>
            <p className="sub-reason">"{ing.subReason}"</p>
            <div className="cost-comparison">
              <div className="cost-item">
                <small>Original Cost</small>
                <div className="price">${ing.origPrice?.toFixed(2)}</div>
              </div>
              <div className="cost-item sub">
                <small>Hacked Cost</small>
                <div className="price">${ing.subPrice?.toFixed(2)}</div>
              </div>
              <div className="savings-badge">
                <DollarSign size={16} /> Save {ing.origPrice ? Math.round((1 - ing.subPrice / ing.origPrice) * 100) : 0}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
