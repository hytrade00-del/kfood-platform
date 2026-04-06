import json
import random

with open('src/data/recipes.json', 'r', encoding='utf-8') as f:
    recipes = json.load(f)

templates = [
    "Living abroad shouldn't mean giving up on authentic Korean flavors. Whether you're browsing a European supermarket or a local grocery store, the secret to the perfect {title} lies in smart substitutions. By swapping hard-to-find {orig_name} with everyday {sub_name}, I'll show you how to recreate the exact authentic taste without the specialty store price tag. ",
    "The essence of Korean cooking isn't about importing expensive ingredients?it's about understanding flavor profiles. For this {title}, I've hacked the local pantry. We'll use {sub_name} to perfectly mimic the traditional {orig_name}, proving that you can bring authentic Seoul flavors to any kitchen in the world. ",
    "Can't find {orig_name} in your local mart? Don't let that stop you from making {title}. The art of substitution is the true secret weapon of a global home cook. I'll guide you through using {sub_name} to hit those exact authentic notes, turning everyday local ingredients into a Korean culinary masterpiece. ",
    "Authenticity isn't about the label on the jar; it's about the final taste. If {orig_name} is unavailable or too expensive in your area, I've got the perfect solution for this {title}. By smartly utilizing {sub_name}, we'll achieve that deep, authentic flavor profile right from your local supermarket shelves. "
]

updated_count = 0
for idx, recipe in enumerate(recipes):
    # Skip if already updated
    if "Living abroad shouldn" in recipe.get('description', '') or "The essence of Korean" in recipe.get('description', ''):
        continue

    # Find the best substitute
    ingredients = recipe.get('ingredients', [])
    best_ing = None
    for ing in ingredients:
        if ing.get('substitute') and ing.get('substitute').strip().lower() != 'none':
            if ing.get('category') == 'Korean Mart':
                best_ing = ing
                break
            elif not best_ing:
                best_ing = ing
    
    # If a substitute exists, update description
    if best_ing:
        orig = best_ing['name']
        sub = best_ing['substitute'].split('+')[0].strip() # Get main substitute part
        
        template = templates[idx % len(templates)]
        prefix = template.format(title=recipe['title'], orig_name=orig, sub_name=sub)
        
        # Don't add prefix multiple times if already exists with another template
        if not any(recipe.get('description', '').startswith(t.split('{')[0]) for t in templates):
            recipe['description'] = prefix + recipe.get('description', '')
            updated_count += 1
    else:
        # Fallback if no substitute found
        prefix = f"You don't need a specialty Korean mart to enjoy authentic {recipe['title']}. I've designed this recipe to rely on accessible, universal ingredients while mastering the true flavor profile of Korean cuisine. "
        if not recipe.get('description', '').startswith("You don't need"):
            recipe['description'] = prefix + recipe.get('description', '')
            updated_count += 1

with open('src/data/recipes.json', 'w', encoding='utf-8') as f:
    json.dump(recipes, f, indent=4, ensure_ascii=False)

print(f"Successfully updated {updated_count} recipe descriptions.")
