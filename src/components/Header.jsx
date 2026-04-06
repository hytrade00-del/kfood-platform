'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Header = () => {
  const [showRecipeDropdown, setShowRecipeDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const recipeDropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchTerm(q);
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (recipeDropdownRef.current && !recipeDropdownRef.current.contains(e.target)) {
        setShowRecipeDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    // If not on home page, search will redirect to home with query param
    if (pathname !== '/') {
      router.push(`/?q=${encodeURIComponent(val)}`);
    } else {
      // Home page will listen to search params or provide its own state
      const params = new URLSearchParams(searchParams);
      if (val) {
        params.set('q', val);
      } else {
        params.delete('q');
      }
      router.replace(`/?${params.toString()}`, { scroll: false });
    }
  };

  const handleCategorySelect = (cat) => {
    setShowRecipeDropdown(false);
    const params = new URLSearchParams(searchParams);
    if (cat !== 'All') {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    router.push(`/?${params.toString()}`);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="no-print" style={{ padding: '1.5rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="nav-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <Link href="/" className="logo">
              🍳 K-FOOD GLOBAL
            </Link>
            <nav className="main-nav">
              <div className="nav-dropdown-wrapper" ref={recipeDropdownRef} style={{ position: 'relative' }}>
                <button
                  className={pathname === '/' ? 'active' : ''}
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
                          onClick={() => handleCategorySelect(cat)}
                          style={{
                            display: 'block', width: '100%', textAlign: 'left',
                            padding: '10px 20px', border: 'none', background: 'transparent',
                            color: '#333',
                            cursor: 'pointer', fontWeight: '500',
                            fontSize: '0.92rem', transition: 'all 0.15s', borderRadius: '0'
                          }}
                          onMouseEnter={(e) => { e.target.style.background = '#f8f8f8'; }}
                          onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
                        >
                          {cat === 'All' ? '🍽️ All Recipes' : cat === 'Meat' ? '🥩 Meat' : cat === 'Seafood' ? '🦐 Seafood' : cat === 'Vegetarian' ? '🥬 Vegetarian' : '🥗 Side Dish'}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/substitutes" className={`main-nav-link ${isActive('/substitutes') ? 'active' : ''}`}>Substitutes Board</Link>
              <Link href="/about" className={`main-nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
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
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-nav-link {
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          color: var(--text-muted);
          text-decoration: none;
          display: inline-block;
        }
        .main-nav-link.active {
          background: var(--primary);
          color: white;
        }
      `}</style>
    </header>
  );
};

export default Header;
