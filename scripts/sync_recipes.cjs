const fs = require('fs');
const path = require('path');

const recipesPath = path.join(__dirname, '../src/data/recipes.json');
const pendingPath = path.join(__dirname, '../src/data/notebooklm_recipes.json');

function sync() {
  if (!fs.existsSync(recipesPath) || !fs.existsSync(pendingPath)) {
    console.error('Files not found.');
    return;
  }

  const recipes = JSON.parse(fs.readFileSync(recipesPath, 'utf8'));
  const pending = JSON.parse(fs.readFileSync(pendingPath, 'utf8'));

  const siteTitles = recipes.map(r => r.title.toLowerCase());

  // Function to normalize titles for better matching
  // (e.g., removing English translation in parens from site titles)
  const normalizedSiteTitles = siteTitles.map(t => t.split('(')[0].trim());

  const updatedPending = pending.filter(pTitle => {
    const normalizedP = pTitle.toLowerCase().trim();
    // Check if it exists in site titles (either exact or normalized)
    const exists = siteTitles.some(st => st.includes(normalizedP)) || 
                   normalizedSiteTitles.some(nst => nst.includes(normalizedP));
    
    if (exists) {
      console.log(`Removing from pending (already on site): ${pTitle}`);
    }
    return !exists;
  });

  fs.writeFileSync(pendingPath, JSON.stringify(updatedPending, null, 2), 'utf8');
  console.log(`Sync complete. ${updatedPending.length} recipes remaining in pending list.`);
}

sync();
