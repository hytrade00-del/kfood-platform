'use client';
import React, { useState, useEffect } from 'react';
import { 
  Users, Scale, ShoppingCart, ArrowRightLeft, 
  Printer, Flame, ChefHat, CheckCircle2, 
  ListTodo, Eye, MessageSquare, ClipboardList, ArrowLeft 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getPantryInfo, scaleValue, formatText } from '../utils/recipeUtils';
import DisqusComments from './DisqusComments';

const RecipeDetail = ({ recipe, recipeIndex }) => {
  const [servings, setServings] = useState(recipe.servings || 2);
  const [isMetric, setIsMetric] = useState(true);

  useEffect(() => {
    if (recipe?.servings) {
      setServings(recipe.servings);
    }
  }, [recipe?.id]);

  const handleCopyList = () => {
    const kMart = recipe.ingredients.filter(i => i.category === "Korean Mart");
    const lMart = recipe.ingredients.filter(i => i.category !== "Korean Mart");

    let text = `🛒 Shopping List for ${recipe.title}\n\n`;
    if (kMart.length > 0) {
      text += `🇰🇷 [Korean Mart]\n${kMart.map(i => `- ${i.name} (${scaleValue(i.amount, i.unit, recipe.servings, servings, isMetric)})`).join('\n')}\n\n`;
    }
    if (lMart.length > 0) {
      text += `🏢 [Local Mart]\n${lMart.map(i => `- ${i.name} (${scaleValue(i.amount, i.unit, recipe.servings, servings, isMetric)})`).join('\n')}\n`;
    }

    navigator.clipboard.writeText(text);
    alert("Shopping list categorized and copied to clipboard! 📋");
  };

  return (
    <>
      <Link href="/" className="back-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', marginBottom: '2rem', fontWeight: 600, textDecoration: 'none', width: 'fit-content', color: 'inherit' }}>
        <ArrowLeft size={18} /> Back to Catalog
      </Link>

      <section className="hero">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="hero-content">
          <div className="premium-tag">PREMIUM RECIPE VOL. {recipeIndex + 1}</div>
          <div className="pantry-badge" style={{ backgroundColor: getPantryInfo(recipe.pantryLevel).color }}>
            <ChefHat size={14} /> {getPantryInfo(recipe.pantryLevel).label}
          </div>
          <h1>{recipe.title}</h1>
          <p className="pantry-desc">{getPantryInfo(recipe.pantryLevel).desc}</p>
          <p>{formatText(recipe.description, isMetric)}</p>
          <div className="hero-meta">
            <span><Flame size={18} /> {recipe.difficulty}</span>
            <span>🕒 {recipe.cookTime}</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hero-img-container">
          <img src={recipe.image} alt={recipe.title} className="hero-img" />
        </motion.div>
      </section>

      {/* THE SUBSTITUTE AESTHETIC BANNER */}
      {(() => {
        const keySwaps = recipe.ingredients
          ?.filter(i => i.substitute && i.category === 'Korean Mart')
          .slice(0, 3);
        if (!keySwaps || keySwaps.length === 0) return null;
        return (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            id="substitute-aesthetic"
            style={{
              background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
              border: '2px solid #fb923c',
              borderRadius: '20px',
              padding: '2rem 2rem 1.5rem',
              marginBottom: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <ArrowRightLeft size={22} color="#ea580c" />
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#9a3412', margin: 0 }}>
                🌍 The Global Kitchen Hack — Cook This Anywhere
              </h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#7c2d12', lineHeight: 1.7, marginBottom: '1.2rem', fontStyle: 'italic' }}>
              No Korean mart nearby? No problem. Here are the key specialty ingredients in this recipe and exactly what to grab from your local supermarket instead:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {keySwaps.map((ing, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  background: 'rgba(255,255,255,0.7)', borderRadius: '12px', padding: '12px 16px'
                }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>🔄</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, color: '#7c2d12', fontSize: '0.95rem' }}>{ing.name}</span>
                      <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>→</span>
                      <span style={{ fontWeight: 700, color: '#15803d', fontSize: '0.95rem' }}>{ing.substitute}</span>
                      {ing.similarityScore && (
                        <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '20px' }}>
                          {ing.similarityScore}% taste match
                        </span>
                      )}
                    </div>
                    {ing.subReason && (
                      <p style={{ margin: 0, fontSize: '0.83rem', color: '#78716c', lineHeight: 1.5 }}>{ing.subReason}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        );
      })()}

      <section className="utility-bar no-print">
        <div className="utility-item">
          <Users size={20} />
          <span>Servings:</span>
          <input type="number" className="servings-input" value={servings} onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))} />
        </div>
        <div className="utility-item">
          <Scale size={20} />
          <button className={`toggle-btn ${isMetric ? 'active' : ''}`} onClick={() => setIsMetric(true)}>Metric</button>
          <button className={`toggle-btn ${!isMetric ? 'active' : ''}`} onClick={() => setIsMetric(false)}>US Unit</button>
        </div>
        <div className="utility-item" style={{ gap: '10px' }}>
          <button className="copy-list-btn" onClick={handleCopyList}><ClipboardList size={18} /> Add to My List</button>
          <button className="toggle-btn" onClick={() => window.print()}><Printer size={18} /></button>
        </div>
      </section>

      <section id="ingredients">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}><CheckCircle2 color="var(--primary)" /> Ingredients</h2>
          <span style={{ fontSize: '0.7rem', color: '#999', fontStyle: 'italic' }}>As an Amazon Associate I earn from qualifying purchases.</span>
        </div>
        <div className="ingredients-grid">
          {recipe.ingredients?.map((ing, idx) => (
            <div key={idx} className="ingredient-card">
              <div className="ing-info">
                <span className="ing-name">{ing.name}</span>
                <span className={`ing-category ${ing.category === 'Korean Mart' ? 'k-mart' : 'l-mart'}`}>{ing.category}</span>
                {ing.substitute && <span className="ing-sub">Sub: {ing.substitute}</span>}
                {ing.amazonLink && (
                  <a href={ing.amazonLink} target="_blank" rel="noopener noreferrer" className="ing-buy-link" style={{ fontSize: '0.7rem', color: '#ff9900', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <ShoppingCart size={12} /> Buy on Amazon
                  </a>
                )}
              </div>
              <span className="ing-amount">{scaleValue(ing.amount, ing.unit, recipe.servings, servings, isMetric)}</span>
            </div>
          ))}
        </div>

        {recipe.substituteExplanation && (
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '15px', marginTop: '1.5rem', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
              💡 Why These Substitutes Work
            </h3>
            <p style={{ lineHeight: 1.7, color: '#475569', margin: 0 }}>
              {recipe.substituteExplanation}
            </p>
          </div>
        )}
      </section>

      {recipe.culturalContext && (
        <section id="culture" style={{ marginTop: '3rem' }}>
          <div style={{ background: '#fffaf0', padding: '2rem', borderRadius: '15px', borderLeft: '4px solid var(--primary)', marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🇰🇷 Chef's Notes & Cultural Context
            </h2>
            <p style={{ lineHeight: 1.8, color: '#444', fontSize: '1.05rem', margin: 0 }}>
              {recipe.culturalContext}
            </p>
          </div>
        </section>
      )}

      <section id="tools">
        <h2 className="section-title"><ShoppingCart color="var(--primary)" /> Ingredients Hack</h2>
        <div className="tools-grid">
          {recipe.tools?.map((tool, idx) => (
            <div key={idx} className="tool-card">
              <div>
                <span className="tool-name">{tool.name}</span>
                <small>Replacement: {tool.substitute}</small>
              </div>
              <a href={tool.amazonLink} className="amazon-btn">Buy / Alt</a>
            </div>
          ))}
        </div>
      </section>

      <section id="texture">
        <div className="texture-guide">
          <h3><Eye size={20} color="var(--primary)" /> Texture Check</h3>
          <p>{formatText(recipe.textureCheck, isMetric)}</p>
        </div>
      </section>

      <section id="steps" style={{ marginTop: '3rem' }}>
        <h2 className="section-title"><ListTodo color="var(--primary)" /> Preparation Steps</h2>
        <div className="steps-container">
          {recipe.steps?.map((step, idx) => (
            <div key={idx} className="step-item">
              <div className="step-num">{idx + 1}</div>
              <div className="step-text">{formatText(step, isMetric)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="comments no-print">
        <h2 className="section-title"><MessageSquare color="var(--primary)" /> Recipe Comments</h2>
        <div className="comments-box">
          <DisqusComments recipeId={recipe.id} />
        </div>
      </section>
    </>
  );
};

export default RecipeDetail;
