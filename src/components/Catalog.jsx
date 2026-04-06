'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import recipesData from '../data/recipes.json';
import { getPantryInfo } from '../utils/recipeUtils';

const Catalog = ({ searchTerm, category }) => {
  const filteredRecipes = useMemo(() => {
    let result = recipesData;
    if (category && category !== "All") {
      result = result?.filter(r => r.category === category);
    }
    if (!searchTerm) return result || [];
    return result?.filter(r =>
      r?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
      r?.ingredients?.some(i => i?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()))
    ) || [];
  }, [searchTerm, category]);

  return (
    <section className="catalog-section" style={{ padding: '4rem 0' }}>
      <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Explore Our Premium Recipes</h1>
      
      {(category && category !== 'All') && (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Link href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '30px',
            background: 'var(--primary)', color: 'white',
            fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none'
          }}>
            {category === 'Meat' ? '🥩' : category === 'Seafood' ? '🦐' : category === 'Vegetarian' ? '🥬' : '🥗'} {category}
            <span style={{
              background: 'rgba(255,255,255,0.3)', border: 'none', color: 'white',
              borderRadius: '50%', width: '22px', height: '22px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px'
            }}>×</span>
          </Link>
        </div>
      )}

      <div className="recipe-catalog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
        {filteredRecipes.map(r => (
          <motion.div
            key={r.id}
            whileHover={{ y: -10 }}
            className="catalog-card"
            style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)' }}
          >
            <Link href={`/recipe/${r.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={r.image} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div className="pantry-badge" style={{ backgroundColor: getPantryInfo(r.pantryLevel).color, marginBottom: '10px', display: 'inline-block', marginRight: '6px' }}>
                  <ChefHat size={12} /> {getPantryInfo(r.pantryLevel).label}
                </div>
                {r.category && (
                  <div className="category-badge" style={{ backgroundColor: '#f1f5f9', color: '#444', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '10px' }}>
                    {r.category}
                  </div>
                )}
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{r.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>{r.description?.split('. ').slice(-3).join('. ') || r.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--primary)', fontWeight: 700 }}>
                  <span>{r.difficulty} • {r.cookTime}</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
