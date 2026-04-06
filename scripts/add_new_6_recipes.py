import json
import shutil
import os
import glob

artifact_path = r"C:\Users\admin\.gemini\antigravity\brain\1c0eb7a0-384d-4f87-8f3c-bf5ad15c5c2f"
public_images_path = r"c:\Users\admin\OneDrive\바탕 화면\안티그래비티 자동화\kfood-platform\public\images"
recipes_path = r"c:\Users\admin\OneDrive\바탕 화면\안티그래비티 자동화\kfood-platform\src\data\recipes.json"

images = {
    "musaengchae": glob.glob(os.path.join(artifact_path, "musaengchae_img_*.png"))[0],
    "jang_kalguksu": glob.glob(os.path.join(artifact_path, "jang_kalguksu_img_*.png"))[0],
    "kkakdugi": glob.glob(os.path.join(artifact_path, "kkakdugi_img_*.png"))[0],
    "spicy_sweet_potato": glob.glob(os.path.join(artifact_path, "spicy_sweet_potato_img_*.png"))[0],
    "hwangtae_soup": glob.glob(os.path.join(artifact_path, "hwangtae_soup_img_*.png"))[0],
    "naengi_muchim": glob.glob(os.path.join(artifact_path, "naengi_muchim_img_*.png"))[0],
}

# Ensure directory exists just in case
os.makedirs(public_images_path, exist_ok=True)

for key, src_path in images.items():
    dest_path = os.path.join(public_images_path, f"{key}.png")
    shutil.copy2(src_path, dest_path)

new_recipes = [
    {
        "id": "musaengchae",
        "title": "Korean Radish Salad (Musaengchae)",
        "description": "A crisp, refreshing, and spicy julienned radish salad. Unlike fermented kimchi, this is meant to be eaten fresh, providing a vibrant crunchy contrast to heavy meals.",
        "image": "/images/musaengchae.png",
        "cookTime": "15 min",
        "difficulty": "Beginner",
        "servings": 4,
        "pantryLevel": 1,
        "textureCheck": "The radish should be crisp and juicy, well-coated in the bright red chili dressing but not swimming in liquid.",
        "ingredients": [
            {"name": "Korean Radish (Mu)", "category": "Korean Mart", "amount": 500, "unit": "g", "substitute": "Daikon radish", "subReason": "Daikon is the best alternative, yielding a similar crisp texture.", "origPrice": 2.0, "subPrice": 1.5, "similarityScore": 95, "amazonLink": None},
            {"name": "Gochugaru (Korean Chili Flakes)", "category": "Korean Mart", "amount": 30, "unit": "ml", "substitute": "Paprika + cayenne mix", "subReason": "Provides color and heat.", "origPrice": 3.0, "subPrice": 1.5, "similarityScore": 75, "amazonLink": None},
            {"name": "Fish Sauce", "category": "Asian Mart", "amount": 15, "unit": "ml", "substitute": "Soy sauce", "subReason": "Fish sauce gives authentic umami, but soy sauce works for a vegan option.", "origPrice": 3.0, "subPrice": 1.0, "similarityScore": 80, "amazonLink": None},
            {"name": "Sugar", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None},
            {"name": "Minced Garlic", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None},
            {"name": "Sesame Seeds", "category": "Local Mart", "amount": 10, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None}
        ],
        "tools": [{"name": "Mixing Bowl", "substitute": "Any large bowl", "amazonLink": None}],
        "steps": [
            "Julienne the radish thinly.",
            "Add gochugaru to the radish and massage it with your hands until the radish turns a vibrant red.",
            "Add fish sauce, sugar, and minced garlic. Mix well.",
            "Garnish with sesame seeds and serve immediately, or let it chill for 30 minutes for flavors to meld."
        ],
        "storytelling": "A quick and vibrant side dish that brings a refreshing crunch to any Korean table. It's especially delicious mixed into bibimbap.",
        "category": "Side Dish"
    },
    {
        "id": "jang_kalguksu",
        "title": "Jang Kalguksu (Spicy Noodle Soup)",
        "description": "A deeply savory, thick, and spicy noodle soup native to the Gangwon province. Grounded with gochujang and doenjang, creating an intensely comforting bowl.",
        "image": "/images/jang_kalguksu.png",
        "cookTime": "30 min",
        "difficulty": "Intermediate",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The broth should be thick from the noodle starch. Noodles should be chewy and fully cooked.",
        "ingredients": [
            {"name": "Kalguksu Noodles (Knife-cut noodles)", "category": "Korean Mart", "amount": 300, "unit": "g", "substitute": "Udon noodles", "subReason": "Udon gives a similar thick, chewy texture.", "origPrice": 4.0, "subPrice": 3.0, "similarityScore": 85, "amazonLink": None},
            {"name": "Gochujang", "category": "Korean Mart", "amount": 45, "unit": "ml", "substitute": "Sriracha + Miso", "subReason": "Simulates the sweet and spicy fermented profile.", "origPrice": 4.0, "subPrice": 1.5, "similarityScore": 75, "amazonLink": None},
            {"name": "Doenjang", "category": "Korean Mart", "amount": 15, "unit": "ml", "substitute": "Miso Paste", "subReason": "Provides the earthy, savory base.", "origPrice": 3.0, "subPrice": 2.0, "similarityScore": 85, "amazonLink": None},
            {"name": "Zucchini (julienned)", "category": "Local Mart", "amount": 100, "unit": "g", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None},
            {"name": "Potato (sliced)", "category": "Local Mart", "amount": 150, "unit": "g", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None},
            {"name": "Anchovy Broth", "category": "Korean Mart", "amount": 1000, "unit": "ml", "substitute": "Vegetable or Chicken Broth", "subReason": "Anchovy is authentic but veg/chicken broth makes a tasty, accessible alternative.", "origPrice": 1.0, "subPrice": 1.0, "similarityScore": 80, "amazonLink": None}
        ],
        "tools": [{"name": "Large Pot", "substitute": "Any soup pot", "amazonLink": None}],
        "steps": [
            "Boil the anchovy broth in a large pot.",
            "Dissolve gochujang and doenjang into the boiling broth.",
            "Add the sliced potatoes and cook for 5 minutes.",
            "Add the kalguksu noodles (rinse off excess starch first if you prefer a cleaner broth) and julienned zucchini.",
            "Cook for 5-7 minutes until the noodles are chewy and translucent.",
            "Serve hot, garnished with seaweed flakes and sesame seeds."
        ],
        "storytelling": "A rustic, soul-warming soup from the mountainous regions of Korea, where thick fermented pastes provide essential warmth through cold winters.",
        "category": "Noodles"
    },
    {
        "id": "kkakdugi",
        "title": "Kkakdugi (Cubed Radish Kimchi)",
        "description": "Crunchy, spicy, and perfectly fermented cubed radish kimchi. A staple side dish, especially beloved when served alongside hot soups.",
        "image": "/images/kkakdugi.png",
        "cookTime": "30 min + fermentation",
        "difficulty": "Intermediate",
        "servings": 10,
        "pantryLevel": 2,
        "textureCheck": "Perfectly crunchy with a vibrant, thick spicy coating. A slight tanginess develops as it ferments.",
        "ingredients": [
            {"name": "Korean Radish (cubed)", "category": "Korean Mart", "amount": 1000, "unit": "g", "substitute": "Daikon radish", "subReason": "Daikon works very well but is slightly more watery.", "origPrice": 3.0, "subPrice": 2.5, "similarityScore": 90, "amazonLink": None},
            {"name": "Coarse Salt", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": "Kosher salt", "subReason": "Essential for drawing out moisture without making it bitter.", "origPrice": 1.0, "subPrice": 1.0, "similarityScore": 95, "amazonLink": None},
            {"name": "Gochugaru", "category": "Korean Mart", "amount": 60, "unit": "ml", "substitute": "Paprika + cayenne mix", "subReason": "For the authentic deep red color.", "origPrice": 4.0, "subPrice": 2.0, "similarityScore": 75, "amazonLink": None},
            {"name": "Salted Shrimp (Saeujeot)", "category": "Korean Mart", "amount": 15, "unit": "ml", "substitute": "Fish sauce", "subReason": "Fish sauce can replace salted shrimp easily.", "origPrice": 5.0, "subPrice": 2.0, "similarityScore": 85, "amazonLink": None},
            {"name": "Minced Garlic", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None},
            {"name": "Sugar", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None}
        ],
        "tools": [{"name": "Airtight Container", "substitute": "Glass jar or plastic container", "amazonLink": None}],
        "steps": [
            "Toss the cubed radish with coarse salt and sugar. Let sit for 30 minutes to draw out moisture. Do not rinse, but drain the excess liquid.",
            "Add gochugaru, minced garlic, and salted shrimp (or fish sauce) to the drained radish.",
            "Mix thoroughly by hand (wear gloves!) until every cube is beautifully coated in red.",
            "Pack tightly into an airtight container. Leave at room temperature for 1-2 days to ferment, then store in the fridge."
        ],
        "storytelling": "The undisputed best friend of Seolleongtang (ox bone soup). Its satisfying crunch and tangy heat cut through rich broths flawlessly.",
        "category": "Side Dish"
    },
    {
        "id": "spicy_sweet_potato",
        "title": "Spicy Braised Sweet Potatoes",
        "description": "Hearty chunks of sweet potato braised in a sticky, sweet, and spicy sauce. A magical combination of natural sweetness and deep chili heat.",
        "image": "/images/spicy_sweet_potato.png",
        "cookTime": "20 min",
        "difficulty": "Beginner",
        "servings": 4,
        "pantryLevel": 1,
        "textureCheck": "Tender and soft on the inside, coated in a sticky, glossy, thick sauce.",
        "ingredients": [
            {"name": "Korean Sweet Potatoes (cubed)", "category": "Korean Mart", "amount": 500, "unit": "g", "substitute": "Any sweet potato", "subReason": "Korean/Japanese sweet potatoes are firmer and sweeter, but regular sweet potatoes work.", "origPrice": 4.0, "subPrice": 3.0, "similarityScore": 80, "amazonLink": None},
            {"name": "Gochujang", "category": "Korean Mart", "amount": 30, "unit": "ml", "substitute": "Sriracha + honey", "subReason": "Adds the core spicy element.", "origPrice": 3.0, "subPrice": 1.5, "similarityScore": 75, "amazonLink": None},
            {"name": "Soy Sauce", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None},
            {"name": "Corn Syrup or Honey", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": "Sugar", "subReason": "Syrup creates the essential glossy, sticky coating.", "origPrice": 1.0, "subPrice": 0.5, "similarityScore": 85, "amazonLink": None},
            {"name": "Water", "category": "Local Mart", "amount": 100, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.0, "subPrice": 0.0, "similarityScore": None, "amazonLink": None}
        ],
        "tools": [{"name": "Frying Pan", "substitute": "Any wide skillet", "amazonLink": None}],
        "steps": [
            "In a bowl, mix gochujang, soy sauce, corn syrup, and water.",
            "Place cubed sweet potatoes in a wide pan and pour the sauce over them.",
            "Bring to a boil over medium heat, then lower to a simmer. Cover and let cook for 10-15 minutes until sweet potatoes are tender.",
            "Uncover and turn up the heat slightly to reduce the sauce until it is thick, sticky, and coats the potatoes.",
            "Garnish with sesame seeds and serve warm or at room temperature."
        ],
        "storytelling": "A fantastic Banchan (side dish) that kids and adults love, perfectly bridging the gap between a savory side and a sweet comforting treat.",
        "category": "Side Dish"
    },
    {
        "id": "hwangtae_soup",
        "title": "Dried Pollock & Zucchini Soup",
        "description": "A classic Korean hangover soup known for its deeply savory, clean, and detoxifying broth. Dried pollock is rehydrated and boiled to extract a milky, umami-rich soup.",
        "image": "/images/hwangtae_soup.png",
        "cookTime": "25 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The pollock should be soft and spongy, and the broth slightly cloudy from the rich extraction of flavor.",
        "ingredients": [
            {"name": "Dried Pollock (Hwangtae)", "category": "Korean Mart", "amount": 50, "unit": "g", "substitute": "Dried shiitake mushrooms (for vegan)", "subReason": "Dried pollock is unique, but shiitake gives a similarly deep, earthy umami.", "origPrice": 6.0, "subPrice": 4.0, "similarityScore": 70, "amazonLink": None},
            {"name": "Zucchini (sliced into half-moons)", "category": "Local Mart", "amount": 100, "unit": "g", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None},
            {"name": "Sesame Oil", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None},
            {"name": "Soup Soy Sauce (Guk-ganjang)", "category": "Korean Mart", "amount": 15, "unit": "ml", "substitute": "Regular soy sauce + salt", "subReason": "Regular soy sauce works if you add a pinch of salt, but soup soy sauce is lighter in color.", "origPrice": 2.0, "subPrice": 1.5, "similarityScore": 85, "amazonLink": None},
            {"name": "Minced Garlic", "category": "Local Mart", "amount": 10, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None},
            {"name": "Egg (beaten)", "category": "Local Mart", "amount": 1, "unit": "unit", "substitute": None, "subReason": None, "origPrice": 0.3, "subPrice": 0.3, "similarityScore": None, "amazonLink": None}
        ],
        "tools": [{"name": "Soup Pot", "substitute": "Any medium pot", "amazonLink": None}],
        "steps": [
            "Rinse the dried pollock quickly in cold water, squeeze out excess moisture, and tear into bite-sized strips.",
            "In a pot over medium heat, sauté the pollock with sesame oil for 2 minutes. This is the secret to extracting a milky broth.",
            "Add water (about 800ml) and bring to a boil. Reduce to a simmer and cook for 15 minutes.",
            "Add the sliced zucchini, minced garlic, and soup soy sauce. Simmer for another 5 minutes.",
            "Drizzle the beaten egg in a circle over the boiling soup. Turn off the heat immediately and let it set without stirring.",
            "Garnish with chopped green onions."
        ],
        "storytelling": "Revered as the ultimate 'hangover soup' (Haejang-guk), its clean, amino-acid rich broth is designed to soothe the stomach and restore the soul.",
        "category": "Soup"
    },
    {
        "id": "naengi_muchim",
        "title": "Seasoned Shepherd's Purse",
        "description": "The quintessential taste of Korean spring. These earthy, slightly bitter wild greens are blanched and tossed with a nutty, savory dressing.",
        "image": "/images/naengi_muchim.png",
        "cookTime": "15 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 1,
        "textureCheck": "The greens should be tender but still have a slight chew. The dressing should evenly coat without pooling at the bottom.",
        "ingredients": [
            {"name": "Shepherd's Purse (Naengi)", "category": "Korean Mart", "amount": 200, "unit": "g", "substitute": "Spinach or Arugula", "subReason": "Arugula mimics the slightly peppery, earthy bite of naengi, while spinach offers the correct texture.", "origPrice": 4.0, "subPrice": 2.5, "similarityScore": 80, "amazonLink": None},
            {"name": "Soy Sauce", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None},
            {"name": "Sesame Oil", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None, "amazonLink": None},
            {"name": "Toasted Sesame Seeds", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.5, "subPrice": 0.5, "similarityScore": None, "amazonLink": None},
            {"name": "Minced Garlic", "category": "Local Mart", "amount": 5, "unit": "ml", "substitute": None, "subReason": None, "origPrice": 0.3, "subPrice": 0.3, "similarityScore": None, "amazonLink": None}
        ],
        "tools": [{"name": "Saucepan", "substitute": "Any pot for blanching", "amazonLink": None}],
        "steps": [
            "Wash the shepherd's purse thoroughly, paying special attention to the roots where dirt hides.",
            "Blanch in a pot of boiling salted water for just 30 to 60 seconds.",
            "Drain immediately and rinse under cold water to stop cooking. Squeeze out as much moisture as possible.",
            "In a bowl, combine soy sauce, sesame oil, minced garlic, and toasted sesame seeds.",
            "Add the blanched greens to the bowl and gently toss by hand, loosening the clumps so the dressing coats evenly.",
            "Serve at room temperature as a refreshing side dish."
        ],
        "storytelling": "When you smell the earthy aroma of naengi in the markets, you know the long Korean winter is over and spring has finally arrived.",
        "category": "Side Dish"
    }
]

with open(recipes_path, "r", encoding="utf-8") as f:
    existing = json.load(f)

existing_ids = {r["id"] for r in existing}
added = 0
for r in new_recipes:
    if r["id"] not in existing_ids:
        existing.append(r)
        added += 1

with open(recipes_path, "w", encoding="utf-8") as f:
    json.dump(existing, f, ensure_ascii=False, indent=4)

print(f"Successfully added {added} new recipes and copied images.")
