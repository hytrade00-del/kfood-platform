import React, { useState, useMemo, useEffect } from 'react';
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
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import recipesData from './data/recipes.json';

const App = () => {
  const [activeTab, setActiveTab] = useState('recipes'); // 'recipes' or 'substitutes'
  const [selectedRecipeId, setSelectedRecipeId] = useState(""); // EMPTY by default to show catalog
  const [servings, setServings] = useState(2);
  const [isMetric, setIsMetric] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [commentsByRecipe, setCommentsByRecipe] = useState({
    "kimchi-jjigae": [
      { user: "John Doe", text: "The substitute for Gochugaru worked surprisingly well!", date: "2 days ago" }
    ],
    "bulgogi": [
      { user: "Sarah K.", text: "Adding pear juice really makes a difference!", date: "1 week ago" }
    ]
  });
  const [newComment, setNewComment] = useState("");

  const recipe = useMemo(() =>
    recipesData.find(r => r.id === selectedRecipeId) || null
    , [selectedRecipeId]);

  useEffect(() => {
    if (recipe?.servings) {
      setServings(recipe.servings);
    }
  }, [recipe?.id]);

  const filteredRecipes = useMemo(() => {
    if (!searchTerm) return recipesData;
    return recipesData?.filter(r =>
      r?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
      r?.ingredients?.some(i => i?.name?.toLowerCase()?.includes(searchTerm.toLowerCase()))
    ) || [];
  }, [searchTerm]);

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

  const handlePostComment = () => {
    if (!newComment.trim() || !recipe) return;
    const recipeId = recipe.id;
    const currentComments = commentsByRecipe[recipeId] || [];
    setCommentsByRecipe({
      ...commentsByRecipe,
      [recipeId]: [...currentComments, { user: "Global Foodie", text: newComment, date: "Just now" }]
    });
    setNewComment("");
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
      <header className="no-print">
        <div className="container nav-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" className="logo" onClick={() => { setActiveTab('recipes'); setSelectedRecipeId(""); setSearchTerm(""); }}>
              🍳 K-FOOD GLOBAL
            </a>
            <nav className="main-nav">
              <button className={activeTab === 'recipes' ? 'active' : ''} onClick={() => { setActiveTab('recipes'); setSelectedRecipeId(""); }}>Recipes</button>
              <button className={activeTab === 'substitutes' ? 'active' : ''} onClick={() => setActiveTab('substitutes')}>Substitutes Board</button>
            </nav>
          </div>
          <div className="search-wrapper" style={{ position: 'relative', flex: 1, maxWidth: '400px', marginLeft: '20px' }}>
            <div className="search-bar">
              <Search size={18} color="#888" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {activeTab === 'recipes' ? (
          <>
            {!recipe ? (
              <section className="catalog-section" style={{ padding: '4rem 0' }}>
                <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Explore Our Premium Recipes</h1>
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
                        <div className="pantry-badge" style={{ backgroundColor: getPantryInfo(r.pantryLevel).color, marginBottom: '10px' }}>
                          <ChefHat size={12} /> {getPantryInfo(r.pantryLevel).label}
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{r.title}</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>{r.description}</p>
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
                  <h2 className="section-title"><CheckCircle2 color="var(--primary)" /> Ingredients</h2>
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
                </section>

                <section id="tools">
                  <h2 className="section-title"><Wrench color="var(--primary)" /> Kitchen Tools hack</h2>
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
                    {(commentsByRecipe[recipe.id] || []).map((c, idx) => (
                      <div key={idx} className="comment-item">
                        <div className="comment-avatar">{c.user[0]}</div>
                        <div className="comment-body">
                          <div className="comment-header">{c.user} <small>• {c.date}</small></div>
                          <p>{c.text}</p>
                        </div>
                      </div>
                    ))}
                    <div style={{ marginTop: '20px' }}>
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Ask a question about this recipe!"
                        style={{ width: '100%', padding: '15.px', borderRadius: '12px', border: '1px solid #ddd', minHeight: '100px', marginBottom: '15px' }}
                      />
                      <div style={{ textAlign: 'right' }}>
                        <button className="signup-btn" onClick={handlePostComment}>Post Comment</button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </>
        ) : (
          <section className="substitutes-board">
            <h1 className="section-title"><ArrowRightLeft size={32} color="var(--primary)" /> Substitutes Efficiency Board</h1>
            <p style={{ marginBottom: '3rem', color: '#666' }}>Stop overpaying at specialty stores. Here is why and how we hack the authentic taste for half the price.</p>

            <div className="sub-grid">
              {recipesData.flatMap(r => r.ingredients.filter(i => i.substitute)).map((ing, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="sub-card">
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
        )}
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo">🍳 K-FOOD</div>
            <div className="footer-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy</a>
              <a href="#">Affiliates</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setShowContact(true); }}>Contact</a>
            </div>
          </div>
          <p>© 2026 K-FOOD GLOBAL</p>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay" onClick={() => setShowPrivacy(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', maxWidth: '600px', width: '100%', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Privacy Policy</h2>
                <button onClick={() => setShowPrivacy(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}>✕</button>
              </div>
              <div style={{ lineHeight: 1.8, color: '#444', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '1rem' }}><strong>Last updated:</strong> February 2026</p>
                <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#222' }}>1. Information We Collect</h3>
                <p>K-Food Global does not collect any personal data from users. We do not require account registration, and no cookies or tracking technologies are used on this platform.</p>
                <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#222' }}>2. How We Use Information</h3>
                <p>Since we do not collect personal information, there is no data usage to disclose. Any comments posted on the site are stored locally in your browser and are not transmitted to any server.</p>
                <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#222' }}>3. Third-Party Links</h3>
                <p>Our site may contain affiliate links to Amazon.com. When you click these links, you will be directed to Amazon's website, which has its own privacy policy. We are not responsible for the privacy practices of third-party sites.</p>
                <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#222' }}>4. Changes to This Policy</h3>
                <p>We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.</p>
                <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#222' }}>5. Contact Us</h3>
                <p>If you have questions about this privacy policy, please contact us at <a href="mailto:hytrade00@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>hytrade00@gmail.com</a>.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  );
};

export default App;
