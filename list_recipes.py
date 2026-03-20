import json

with open('src/data/recipes.json', 'r', encoding='utf-8') as f:
    recipes = json.load(f)

for r in recipes:
    print(f"{r['id']}: {r['title']}")
