import json

meat = ['kimchi-jjigae', 'bulgogi', 'yangnyeom-chicken', 'dakbokkeumtang', 'chadol-doenjang-jjigae', 'gochujang-samgyeopsal', 'kkanpunggi', 'galbi-jjim', 'jeyuk-bokkeum', 'samgyetang', 'dakgomtang', 'pork-backbone-stew', 'gochu-basasak-chicken', 'samgyeopsal', 'gochujang-yukhoe', 'nurungji-baeksuk', 'jangdokdok-pork', 'pork-kimchi-jjagleui', 'bakpo-galbi', 'gochujang-bulgogi']
seafood = ['oyster-soft-tofu-stew', 'oyster-soup-rice', 'haemul-pajeon', 'sundubu-jjigae-classic', 'spicy-squid-radish-soup']
veggie = ['bibimbap', 'aukguk', 'kimchi-bokkeumbap', 'cheonggukjang-jjigae']
side = ['japchae', 'garlic-pickle', 'jang-susam', 'spicy-chili-steamed', 'gungmul-tteokbokki', 'dubu-jorim', 'algamja-jorim', 'gimbap', 'kkaennip-jangajji', 'nabak-kimchi', 'minari-jangajji', 'cold-cucumber-seaweed-soup']

with open('src/data/recipes.json', 'r', encoding='utf-8') as f:
    recipes = json.load(f)

for r in recipes:
    if r['id'] in meat:
        r['category'] = 'Meat'
    elif r['id'] in seafood:
        r['category'] = 'Seafood'
    elif r['id'] in veggie:
        r['category'] = 'Vegetarian'
    elif r['id'] in side:
        r['category'] = 'Side Dish'
    else:
        print(f"Unknown: {r['id']}")

with open('src/data/recipes.json', 'w', encoding='utf-8') as f:
    json.dump(recipes, f, ensure_ascii=False, indent=4)

print("Updated recipes.json with categories")
