import json

with open('src/data/recipes.json', 'r', encoding='utf-8') as f:
    recipes = json.load(f)
existing_titles = [r['title'] for r in recipes]

with open('src/data/notebooklm_recipes.json', 'r', encoding='utf-8') as f:
    notebooklm = json.load(f)

print('=== NotebookLM recipes status ===')
missing_recipes = []
for i, name in enumerate(notebooklm):
    # Try exact match or substring match
    found = any(name in r or r in name for r in existing_titles)
    status = 'EXISTS' if found else 'MISSING'
    matched = [r for r in existing_titles if name in r or r in name]
    print(f'{i+1}. {name} -> {status}')
    if found:
        print(f'   Matched with: {matched}')
    else:
        missing_recipes.append(name)

print(f'\nTotal current recipes: {len(recipes)}')
print('\nMissing recipes to add:')
for r in missing_recipes:
    print(f'- {r}')
