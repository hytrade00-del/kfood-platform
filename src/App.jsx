/* eslint-disable react-hooks/exhaustive-deps, react-hooks/set-state-in-effect, no-unused-vars */
import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Users,
  Scale,
  ShoppingCart,
  Share2,
  Printer,
  Flame,
  PiggyBank,
  Download,
  MessageSquare,
  Search,
  CheckCircle2,
  ChevronRight,
  ListTodo,
  ChefHat,
  Wrench,
  Eye,
  ClipboardList,
  Menu,
  Tag,
  ArrowRightLeft,
  DollarSign,
  ArrowLeft,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import recipesData from './data/recipes.json';

const DisqusComments = ({ recipeId }) => {
  useEffect(() => {
    const pageUrl = `https://www.kfood-platform.com/recipe/${recipeId}`;
    const pageIdentifier = recipeId;

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = pageUrl;
          this.page.identifier = pageIdentifier;
        }
      });
    } else {
      window.disqus_config = function () {
        this.page.url = pageUrl;
        this.page.identifier = pageIdentifier;
      };
      const d = document, s = d.createElement('script');
      s.src = 'https://k-food-global.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }
  }, [recipeId]);

  return (
    <>
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the{' '}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
    </>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('recipes'); // 'recipes', 'substitutes', 'about', 'privacy', 'terms'
  const [selectedRecipeId, setSelectedRecipeId] = useState(""); // EMPTY by default to show catalog
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [servings, setServings] = useState(2);
  const [isMetric, setIsMetric] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showRecipeDropdown, setShowRecipeDropdown] = useState(false);
  const recipeDropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (recipeDropdownRef.current && !recipeDropdownRef.current.contains(e.target)) {
        setShowRecipeDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const consent = localStorage.getItem('kfood_cookie_consent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);


  const recipe = useMemo(() =>
    recipesData.find(r => r.id === selectedRecipeId) || null
    , [selectedRecipeId]);

  useEffect(() => {
    if (recipe?.servings) {
      setServings(recipe.servings);
    }
  }, [recipe?.id]);

  // Handle Initial Route and Back/Forward Navigation
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      if (path.startsWith('/recipe/')) {
        const id = path.replace('/recipe/', '');
        const exists = recipesData.some(r => r.id === id);
        if (exists) {
          setActiveTab('recipes');
          setSelectedRecipeId(id);
        } else {
          setActiveTab('recipes');
          setSelectedRecipeId("");
        }
      } else if (path === '/substitutes') {
        setActiveTab('substitutes');
        setSelectedRecipeId("");
      } else if (path === '/about') {
        setActiveTab('about');
        setSelectedRecipeId("");
      } else if (path === '/privacy') {
        setActiveTab('privacy');
        setSelectedRecipeId("");
      } else if (path === '/terms') {
        setActiveTab('terms');
        setSelectedRecipeId("");
      } else {
        setActiveTab('recipes');
        setSelectedRecipeId("");
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, []);

  // Update URL and SEO Meta Tags
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');

    let title = "";
    let desc = "";
    let urlPath = "/";

    if (recipe) {
      title = `${recipe.title} Recipe | K-Food Global`;
      desc = `Learn how to make authentic ${recipe.title}. Step-by-step recipe with ingredient substitutes for home cooks worldwide.`;
      urlPath = `/recipe/${recipe.id}`;
    } else if (activeTab === 'about') {
      title = 'About Us | K-Food Global';
      desc = 'K-Food Global is a platform dedicated to helping home cooks worldwide discover and master authentic Korean recipes with easy ingredient substitutes.';
      urlPath = '/about';
    } else if (activeTab === 'substitutes') {
      title = 'Ingredient Substitutes Board | K-Food Global';
      desc = 'Find smart Korean ingredient substitutes. Compare costs and taste match scores to cook authentic Korean food with local supermarket ingredients.';
      urlPath = '/substitutes';
    } else if (activeTab === 'privacy') {
      title = 'Privacy Policy | K-Food Global';
      desc = 'Read our privacy policy to understand how K-Food Global handles your information and cookies.';
      urlPath = '/privacy';
    } else if (activeTab === 'terms') {
      title = 'Terms of Service | K-Food Global';
      desc = 'Read the terms of service and conditions for using the K-Food Global platform.';
      urlPath = '/terms';
    } else {
      title = 'K-Food Global | Authentic Korean Recipes for Home Cooks Worldwide';
      desc = 'Discover authentic Korean recipes with smart ingredient substitutes. Cook Kimchi Jjigae, Bulgogi, Bibimbap and more — with local supermarket alternatives that taste just as good.';
      urlPath = '/';
    }

    const fullUrl = `https://www.kfood-platform.com${urlPath}`;

    document.title = title;
    if (metaDesc) metaDesc.setAttribute('content', desc);
    if (canonical) canonical.setAttribute('href', fullUrl);
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', desc);
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDesc) twitterDesc.setAttribute('content', desc);

    // Only push if different from current path
    if (window.location.pathname !== urlPath) {
      window.history.pushState(null, '', urlPath);
    }
  }, [recipe, activeTab]);


  const filteredRecipes = useMemo(() => {
    let result = recipesData;
    if (selectedCategory && selectedCategory !== "All") {
      result = result?.filter(r => r.category === selectedCategory);
    }
    if (!searchTerm) return result || [];
    return result?.filter(r =>
      r?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
      r?.ingredients?.some(i => i?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()))
    ) || [];
  }, [searchTerm, selectedCategory]);

  const formatFraction = (val) => {
    if (val === 0) return "0";
    const whole = Math.floor(val);
    const remainder = val - whole;

    if (remainder < 0.05) return whole > 0 ? `${whole}` : "0";
    if (remainder > 0.95) return `${whole + 1}`;

    const commonFractions = [
      { v: 0.125, s: "1/8" },
      { v: 0.25, s: "1/4" },
      { v: 0.333, s: "1/3" },
      { v: 0.5, s: "1/2" },
      { v: 0.625, s: "5/8" },
      { v: 0.666, s: "2/3" },
      { v: 0.75, s: "3/4" },
      { v: 0.875, s: "7/8" }
    ];

    let closest = commonFractions[0];
    let minDiff = Math.abs(remainder - closest.v);
    for (const f of commonFractions) {
      if (Math.abs(remainder - f.v) < minDiff) {
        minDiff = Math.abs(remainder - f.v);
        closest = f;
      }
    }
    return whole > 0 ? `${whole} ${closest.s}` : closest.s;
  };

  const scaleValue = (amount, unit) => {
    const scaled = (amount / (recipe?.servings || 2)) * servings;
    if (isMetric) return `${Math.round(scaled)} ${unit}`;

    if (unit === 'g') {
      if (scaled >= 450) return `${formatFraction(scaled / 453.59)} lb`;
      return `${formatFraction(scaled / 28.35)} oz`;
    }

    if (unit === 'ml') {
      if (scaled <= 10) return `${formatFraction(scaled / 4.93)} tsp`;
      if (scaled <= 30) return `${formatFraction(scaled / 14.79)} tbsp`;
      if (scaled <= 100) return `${formatFraction(scaled / 29.57)} fl oz`;
      const cups = scaled / 240;
      return `${formatFraction(cups)} cup${cups > 1.1 ? 's' : ''}`;
    }
    return Math.round(scaled) + " " + unit;
  };

  const formatText = (text) => {
    if (!text) return "";
    if (isMetric) return text;
    return text
      .replace(/(\d+)\s*°C/gi, (m, p1) => `${Math.round(p1 * 1.8 + 32)}°F`)
      .replace(/(\d+)\s*cm/gi, (m, p1) => `${(p1 / 2.54).toFixed(1)}-inch`);
  };

  const handleCopyList = () => {
    if (!recipe) return;
    const kMart = recipe.ingredients.filter(i => i.category === "Korean Mart");
    const lMart = recipe.ingredients.filter(i => i.category !== "Korean Mart");

    let text = `🛒 Shopping List for ${recipe.title}\n\n`;
    if (kMart.length > 0) {
      text += `🇰🇷 [Korean Mart]\n${kMart.map(i => `- ${i.name} (${scaleValue(i.amount, i.unit)})`).join('\n')}\n\n`;
    }
    if (lMart.length > 0) {
      text += `🏢 [Local Mart]\n${lMart.map(i => `- ${i.name} (${scaleValue(i.amount, i.unit)})`).join('\n')}\n`;
    }

    navigator.clipboard.writeText(text);
    alert("Shopping list categorized and copied to clipboard! 📋");
  };

  const getPantryInfo = (level) => {
    const levels = {
      1: { label: "Level 1: The Explorer", desc: "Local mart ingredients only!", color: "#3498db" },
      2: { label: "Level 2: K-Foodie", desc: "Basic K-pantry items needed.", color: "#e67e22" },
      3: { label: "Level 3: Master Disciple", desc: "Authentic K-ingredients required.", color: "#c0392b" }
    };
    return levels[level] || levels[1];
  };

  return (
    <div className="app">
      <header className="no-print" style={{ padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="nav-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <a href="/" className="logo" onClick={(e) => { e.preventDefault(); setActiveTab('recipes'); setSelectedRecipeId(""); setSearchTerm(""); window.history.pushState(null, '', '/'); }}>
                🍳 K-FOOD GLOBAL
              </a>
              <nav className="main-nav">
                <div className="nav-dropdown-wrapper" ref={recipeDropdownRef} style={{ position: 'relative' }}>
                  <button
                    className={activeTab === 'recipes' ? 'active' : ''}
                    onClick={() => setShowRecipeDropdown(prev => !prev)}
                    style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    Recipes <ChevronDown size={14} style={{ transform: showRecipeDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                  </button>
                  <AnimatePresence>
                    {showRecipeDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="recipe-dropdown"
                        style={{
                          position: 'absolute', top: 'calc(100% + 8px)', left: '0',
                          background: 'white', borderRadius: '14px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                          padding: '8px 0', minWidth: '180px', zIndex: 1000,
                          border: '1px solid rgba(0,0,0,0.06)'
                        }}
                      >
                        {["All", "Meat", "Seafood", "Vegetarian", "Side Dish"].map(cat => (
                          <button
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setActiveTab('recipes');
                              setSelectedRecipeId("");
                              setShowRecipeDropdown(false);
                              window.history.pushState(null, '', '/');
                            }}
                            style={{
                              display: 'block', width: '100%', textAlign: 'left',
                              padding: '10px 20px', border: 'none', background: selectedCategory === cat ? 'var(--primary)' : 'transparent',
                              color: selectedCategory === cat ? 'white' : '#333',
                              cursor: 'pointer', fontWeight: selectedCategory === cat ? '700' : '500',
                              fontSize: '0.92rem', transition: 'all 0.15s', borderRadius: '0'
                            }}
                            onMouseEnter={(e) => { if (selectedCategory !== cat) { e.target.style.background = '#f8f8f8'; } }}
                            onMouseLeave={(e) => { if (selectedCategory !== cat) { e.target.style.background = 'transparent'; } }}
                          >
                            {cat === 'All' ? '🍽️ All Recipes' : cat === 'Meat' ? '🥩 Meat' : cat === 'Seafood' ? '🦐 Seafood' : cat === 'Vegetarian' ? '🥬 Vegetarian' : '🥗 Side Dish'}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button className={activeTab === 'substitutes' ? 'active' : ''} onClick={() => { setActiveTab('substitutes'); setSelectedRecipeId(""); setShowRecipeDropdown(false); window.history.pushState(null, '', '/substitutes'); }}>Substitutes Board</button>
                <button className={activeTab === 'about' ? 'active' : ''} onClick={() => { setActiveTab('about'); setSelectedRecipeId(""); setShowRecipeDropdown(false); window.history.pushState(null, '', '/about'); }}>About</button>
              </nav>
            </div>
          </div>

          <div className="search-row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="search-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
              <div className="search-bar" style={{ padding: '12px 20px', borderRadius: '30px', border: '1px solid rgba(0,0,0,0.1)' }}>
                <Search size={20} color="var(--primary)" />
                <input
                  type="text"
                  placeholder="What ingredients do you have? We'll find the perfect recipe for you."
                  value={searchTerm}
                  style={{ fontSize: '1rem', fontWeight: '500' }}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {activeTab === 'recipes' ? (
          <>
            {!recipe ? (
              <section className="catalog-section" style={{ padding: '4rem 0' }}>
                <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Explore Our Premium Recipes</h1>
                
                {selectedCategory !== 'All' && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '8px 20px', borderRadius: '30px',
                      background: 'var(--primary)', color: 'white',
                      fontWeight: '700', fontSize: '0.95rem'
                    }}>
                      {selectedCategory === 'Meat' ? '🥩' : selectedCategory === 'Seafood' ? '🦐' : selectedCategory === 'Vegetarian' ? '🥬' : '🥗'} {selectedCategory}
                      <button onClick={() => setSelectedCategory('All')} style={{
                        background: 'rgba(255,255,255,0.3)', border: 'none', color: 'white',
                        borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px'
                      }}>×</button>
                    </span>
                  </div>
                )}

                <div className="recipe-catalog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                  {filteredRecipes.map(r => (
                    <motion.div
                      key={r.id}
                      whileHover={{ y: -10 }}
                      className="catalog-card"
                      style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow)', cursor: 'pointer' }}
                      onClick={() => setSelectedRecipeId(r.id)}
                    >
                      <div style={{ height: '220px', overflow: 'hidden' }}>
                        <img src={r.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    </motion.div>
                  ))}
                </div>
              </section>
            ) : (
              <>
                <button className="back-btn" onClick={() => setSelectedRecipeId("")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', border: '1px solid #ddd', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', marginBottom: '2rem', fontWeight: 600 }}>
                  <ArrowLeft size={18} /> Back to Catalog
                </button>

                <section className="hero">
                  <motion.div key={recipe.id + "-c"} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="hero-content">
                    <div className="premium-tag">PREMIUM RECIPE VOL. {recipesData.indexOf(recipe) + 1}</div>
                    <div className="pantry-badge" style={{ backgroundColor: getPantryInfo(recipe.pantryLevel).color }}>
                      <ChefHat size={14} /> {getPantryInfo(recipe.pantryLevel).label}
                    </div>
                    <h1>{recipe.title}</h1>
                    <p className="pantry-desc">{getPantryInfo(recipe.pantryLevel).desc}</p>
                    <p>{formatText(recipe.description)}</p>
                    <div className="hero-meta">
                      <span><Flame size={18} /> {recipe.difficulty}</span>
                      <span>🕒 {recipe.cookTime}</span>
                    </div>
                  </motion.div>
                  <motion.div key={recipe.id + "-i"} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="hero-img-container">
                    <img src={recipe.image} alt={recipe.title} className="hero-img" />
                  </motion.div>
                </section>

                {/* ===== THE SUBSTITUTE AESTHETIC BANNER ===== */}
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
                    <input type="number" className="servings-input" value={servings} onChange={(e) => setServings(Math.max(1, e.target.value))} />
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
                        <span className="ing-amount">{scaleValue(ing.amount, ing.unit)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Substitute Explanation Section for AdSense 'Thin Content' fix */}
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

                {/* Cultural Context Section for AdSense 'Thin Content' fix */}
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
                    <p>{formatText(recipe.textureCheck)}</p>
                  </div>
                </section>

                <section id="steps" style={{ marginTop: '3rem' }}>
                  <h2 className="section-title"><ListTodo color="var(--primary)" /> Preparation Steps</h2>
                  <div className="steps-container">
                    {recipe.steps?.map((step, idx) => (
                      <div key={idx} className="step-item">
                        <div className="step-num">{idx + 1}</div>
                        <div className="step-text">{formatText(step)}</div>
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
            )}
          </>
        ) : activeTab === 'substitutes' ? (
          <section className="substitutes-board">
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
                      <div className="price">${ing.origPrice.toFixed(2)}</div>
                    </div>
                    <div className="cost-item sub">
                      <small>Hacked Cost</small>
                      <div className="price">${ing.subPrice.toFixed(2)}</div>
                    </div>
                    <div className="savings-badge">
                      <DollarSign size={16} /> Save {Math.round((1 - ing.subPrice / ing.origPrice) * 100)}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ) : activeTab === 'about' ? (
          /* ===== ABOUT PAGE ===== */
          <section className="about-page" style={{ padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>About K-Food Global</h1>
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
        ) : activeTab === 'privacy' ? (
          /* ===== PRIVACY POLICY PAGE ===== */
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
        ) : activeTab === 'terms' ? (
          /* ===== TERMS OF SERVICE PAGE ===== */
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
        ) : null}
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo">🍳 K-FOOD</div>
            <div className="footer-links">
              <a href="/privacy" onClick={(e) => { e.preventDefault(); setActiveTab('privacy'); window.history.pushState(null, '', '/privacy'); }}>Privacy Policy</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); setActiveTab('terms'); window.history.pushState(null, '', '/terms'); }}>Terms of Service</a>
              <a href="/affiliates">Affiliates</a>
              <a href="/about" onClick={(e) => { e.preventDefault(); setActiveTab('about'); window.history.pushState(null, '', '/about'); }}>About</a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); setShowContact(true); }}>Contact</a>
            </div>
          </div>
          <p>© 2026 K-FOOD GLOBAL</p>
        </div>
      </footer>

      {/* Privacy Policy Modal removed in favor of full page */}

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContact(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', maxWidth: '450px', width: '100%', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                <button onClick={() => setShowContact(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>✕</button>
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Contact Us</h2>
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
                <a href="/privacy" onClick={(e) => { e.preventDefault(); setActiveTab('privacy'); window.history.pushState(null, '', '/privacy'); }} style={{ color: '#f9ca24', marginLeft: '10px', textDecoration: 'underline', fontWeight: 600 }}>Learn more</a>
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
    </div>
  );
};

export default App;
