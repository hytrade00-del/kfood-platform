import json

new_recipes = [
    {
        "id": "jangdokdok-pork",
        "title": "Jangdokdok Pork Stir-Fry (Dokkeum)",
        "description": "A deeply savory and spicy stir-fried pork dish marinated in a robust soy-gochujang base. 'Jangdokdok' refers to the rich, concentrated sauce that clings to every tender pork slice, making it an irresistible companion to a bowl of steamed white rice.",
        "image": "/images/jangdokdok_pork.png",
        "cookTime": "30 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The pork should be tender and slightly caramelized at the edges. The sauce must be thick and glossy, not watery — if it looks thin, increase heat and stir-fry for 2 more minutes uncovered.",
        "ingredients": [
            {
                "name": "Pork Shoulder (thinly sliced)",
                "category": "Local Mart",
                "amount": 400,
                "unit": "g",
                "substitute": "Pork loin, thinly sliced",
                "subReason": "Pork loin is leaner but works well when sliced thin and marinated. Pound slightly to tenderize.",
                "origPrice": 7.0,
                "subPrice": 5.5,
                "similarityScore": 85,
                "amazonLink": None
            },
            {
                "name": "Gochujang (Korean Chili Paste)",
                "category": "Korean Mart",
                "amount": 30,
                "unit": "ml",
                "substitute": "2 tbsp sriracha + 1 tsp miso paste",
                "subReason": "This combo replicates gochujang's fermented sweetness and heat.",
                "origPrice": 4.0,
                "subPrice": 1.5,
                "similarityScore": 80,
                "amazonLink": "https://www.amazon.com/s?k=gochujang"
            },
            {
                "name": "Soy Sauce",
                "category": "Local Mart",
                "amount": 30,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.8,
                "subPrice": 0.8,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Garlic (minced)",
                "category": "Local Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Sesame Oil",
                "category": "Local Mart",
                "amount": 10,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 1.0,
                "subPrice": 1.0,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Sugar",
                "category": "Local Mart",
                "amount": 10,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.2,
                "subPrice": 0.2,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Onion (sliced)",
                "category": "Local Mart",
                "amount": 80,
                "unit": "g",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Green Onion",
                "category": "Local Mart",
                "amount": 40,
                "unit": "g",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            }
        ],
        "tools": [
            {
                "name": "Large Skillet or Wok",
                "substitute": "Any wide non-stick pan on high heat",
                "amazonLink": "https://www.amazon.com/s?k=carbon+steel+wok"
            }
        ],
        "steps": [
            "Combine gochujang, soy sauce, garlic, sesame oil, and sugar in a bowl. Mix well to form the marinade.",
            "Add thinly sliced pork to the marinade. Mix thoroughly to coat. Let it rest for 15 minutes.",
            "Heat a large skillet or wok over high heat. Add a splash of oil.",
            "Add marinated pork in a single layer. Do NOT stir immediately — let it sear for 90 seconds to develop caramelization.",
            "Add sliced onion and stir-fry everything together for 3–4 minutes until pork is cooked through and edges are slightly crispy.",
            "Add green onions in the last 30 seconds. Garnish with sesame seeds and serve immediately over steamed rice."
        ],
        "storytelling": "Jangdokdok pork is a staple of Korean home cooking, a dish where the pot is scraped clean every time. The name comes from the sound of the thick sauce clinging to each piece — it's the kind of meal that fills the whole house with a savory aroma.",
        "category": "Meat"
    },
    {
        "id": "pork-kimchi-jjagleui",
        "title": "Pork Kimchi Jjagleui (Stew-Fry)",
        "description": "A rustic, intensely flavorful Korean dish that sits between a stir-fry and a stew. Well-fermented kimchi and pork belly are cooked down until the liquid reduces into a thick, deeply umami sauce that coats every ingredient. This is pure Korean home comfort.",
        "image": "/images/pork_kimchi_jjagleui.png",
        "cookTime": "35 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The kimchi should be almost translucent and silky. The pork should be tender and well-seasoned throughout. The sauce should be thick and glossy, coating everything — not soupy. If too much liquid remains, boil uncovered on high for 5 minutes.",
        "ingredients": [
            {
                "name": "Pork Belly (bite-sized pieces)",
                "category": "Local Mart",
                "amount": 300,
                "unit": "g",
                "substitute": "Thick-cut bacon",
                "subReason": "Thick-cut bacon provides similar fat content and smoky depth. Rinse before using to reduce excess salt.",
                "origPrice": 6.5,
                "subPrice": 5.0,
                "similarityScore": 85,
                "amazonLink": None
            },
            {
                "name": "Aged Kimchi",
                "category": "Korean Mart",
                "amount": 300,
                "unit": "g",
                "substitute": "Fresh cabbage + 2 tbsp sriracha + 1 tbsp white vinegar",
                "subReason": "Aged kimchi is key for depth of flavor. The substitute mimics acidity and heat but lacks fermented complexity.",
                "origPrice": 5.99,
                "subPrice": 1.8,
                "similarityScore": 65,
                "amazonLink": "https://www.amazon.com/s?k=kimchi"
            },
            {
                "name": "Gochugaru (Korean Red Pepper Flakes)",
                "category": "Korean Mart",
                "amount": 15,
                "unit": "ml",
                "substitute": "1 tsp sweet paprika + 1/2 tsp cayenne",
                "subReason": "Provides color and heat similar to gochugaru.",
                "origPrice": 3.5,
                "subPrice": 1.0,
                "similarityScore": 78,
                "amazonLink": "https://www.amazon.com/s?k=gochugaru"
            },
            {
                "name": "Soy Sauce",
                "category": "Local Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Garlic (minced)",
                "category": "Local Mart",
                "amount": 15,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Water",
                "category": "Local Mart",
                "amount": 150,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.0,
                "subPrice": 0.0,
                "similarityScore": None,
                "amazonLink": None
            }
        ],
        "tools": [
            {
                "name": "Heavy-bottomed pot or Dutch oven",
                "substitute": "Any deep sauté pan or cast iron skillet with lid",
                "amazonLink": "https://www.amazon.com/s?k=dutch+oven"
            }
        ],
        "steps": [
            "In a heavy pot over medium-high heat, add pork belly and sear until the fat renders and edges turn golden — about 4 minutes. No oil needed.",
            "Add aged kimchi directly on top of the pork. Stir together and fry for 3–4 minutes to caramelize the kimchi.",
            "Add gochugaru, soy sauce, and garlic. Stir to coat everything.",
            "Pour in water and bring to a boil. Reduce to a strong simmer.",
            "Cook covered for 15 minutes, then uncovered for 5–10 minutes until the sauce thickens to a glossy, reduced consistency.",
            "Serve with hot steamed rice. The sauce is the star — make sure to pour it over the rice."
        ],
        "storytelling": "Jjagleui is the sound of this dish sizzling in the pan — a word that captures its essence. Koreans make this when kimchi is at its most sour and potent, transforming it from a side dish into the hero of a deeply satisfying meal.",
        "category": "Meat"
    },
    {
        "id": "bakpo-galbi",
        "title": "Bakpo Galbi (Thin-Cut BBQ Ribs)",
        "description": "A beloved Korean BBQ pork rib dish where the ribs are scored and pounded extremely thin (bakpo means 'foil-thin') to maximize marinade absorption and achieve the crispiest possible sear. The result is crispy, chewy, deeply savory ribs with incredible flavor in every centimeter.",
        "image": "/images/bakpo_galbi.png",
        "cookTime": "40 min + 2hr marinade",
        "difficulty": "Intermediate",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The ribs should be thin enough to see through slightly. After grilling, the edges must be deeply caramelized and slightly crispy — not soft. If they look pale and steamed, your grill or pan was not hot enough. Pat dry before grilling.",
        "ingredients": [
            {
                "name": "Pork Baby Back Ribs (flanken-cut, thin)",
                "category": "Local Mart",
                "amount": 600,
                "unit": "g",
                "substitute": "Pork spare ribs, scored and pounded thin",
                "subReason": "Ask your butcher to cut flanken-style, or cross-cut. If unavailable, score regular ribs deeply and pound thin with a mallet.",
                "origPrice": 9.0,
                "subPrice": 7.0,
                "similarityScore": 88,
                "amazonLink": None
            },
            {
                "name": "Soy Sauce",
                "category": "Local Mart",
                "amount": 60,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 1.0,
                "subPrice": 1.0,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Asian Pear or Apple (grated)",
                "category": "Local Mart",
                "amount": 50,
                "unit": "ml",
                "substitute": "Kiwi, grated (use half the amount)",
                "subReason": "Kiwi contains actinidin, a more powerful meat-tenderizing enzyme. Use sparingly and don't marinate over 2 hours.",
                "origPrice": 1.5,
                "subPrice": 0.5,
                "similarityScore": 88,
                "amazonLink": None
            },
            {
                "name": "Brown Sugar",
                "category": "Local Mart",
                "amount": 25,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.3,
                "subPrice": 0.3,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Garlic (minced)",
                "category": "Local Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Sesame Oil",
                "category": "Local Mart",
                "amount": 10,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 1.0,
                "subPrice": 1.0,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Black Pepper",
                "category": "Local Mart",
                "amount": 3,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.2,
                "subPrice": 0.2,
                "similarityScore": None,
                "amazonLink": None
            }
        ],
        "tools": [
            {
                "name": "Meat Mallet",
                "substitute": "Rolling pin or bottom of a heavy pan",
                "amazonLink": "https://www.amazon.com/s?k=meat+mallet"
            },
            {
                "name": "Charcoal Grill or Cast Iron Grill Pan",
                "substitute": "Any high-heat skillet — preheat for 5 minutes on high",
                "amazonLink": "https://www.amazon.com/s?k=cast+iron+grill+pan"
            }
        ],
        "steps": [
            "Score each rib section deeply with a knife in a crosshatch pattern. Then pound with a mallet between plastic wrap until very thin — about 3–4mm.",
            "Combine soy sauce, grated pear/apple, brown sugar, garlic, sesame oil, and black pepper. Mix until sugar dissolves.",
            "Submerge ribs in marinade, tossing to coat. Marinate refrigerated for at least 2 hours (up to overnight for maximum flavor).",
            "Remove ribs and pat completely dry — this is crucial for a good sear, not steam.",
            "Grill on a very hot grill or cast iron pan. Sear each side for 2–3 minutes without moving until deeply caramelized.",
            "Rest for 2 minutes, then serve with perilla leaves, sliced garlic, and ssamjang for wrapping."
        ],
        "storytelling": "Bakpo Galbi is the pork rib you can't put down. Pounded impossibly thin, the ribs absorb every drop of marinade and char up in seconds on the grill, giving you the perfect sweet-salty crispy bite at every turn — a true Korean BBQ centerpiece.",
        "category": "Meat"
    },
    {
        "id": "gochujang-bulgogi",
        "title": "Gochujang Bulgogi (Spicy Korean BBQ Beef)",
        "description": "A spicy, bold twist on the beloved Korean bulgogi. Instead of the classic sweet-savory marinade, this version features gochujang as the base — delivering a deep, fermented heat that caramelizes beautifully on the grill. Fiery, sweet, and absolutely addictive.",
        "image": "/images/gochujang_bulgogi.png",
        "cookTime": "25 min + 1hr marinade",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The beef should be tender and have deeply browned, slightly crispy caramelized edges. The color should be a rich, dark mahogany red. If the meat looks grey and steamed, your pan isn't hot enough — drain any liquid and crank to high heat.",
        "ingredients": [
            {
                "name": "Beef (sirloin or ribeye, thinly sliced)",
                "category": "Local Mart",
                "amount": 400,
                "unit": "g",
                "substitute": "Skirt steak, sliced thin against the grain",
                "subReason": "Skirt steak achieves the same tender bite when sliced very thin. Marinating compensates for its slightly firmer texture.",
                "origPrice": 12.0,
                "subPrice": 6.5,
                "similarityScore": 85,
                "amazonLink": None
            },
            {
                "name": "Gochujang (Korean Chili Paste)",
                "category": "Korean Mart",
                "amount": 45,
                "unit": "ml",
                "substitute": "2 tbsp sriracha + 1 tbsp miso + 1 tsp honey",
                "subReason": "This combination approximates gochujang's fermented, sweet, and spicy profile.",
                "origPrice": 4.0,
                "subPrice": 1.5,
                "similarityScore": 80,
                "amazonLink": "https://www.amazon.com/s?k=gochujang"
            },
            {
                "name": "Soy Sauce",
                "category": "Local Mart",
                "amount": 30,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.8,
                "subPrice": 0.8,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Honey",
                "category": "Local Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": "Brown sugar (same amount)",
                "subReason": "Honey caramelizes more readily than sugar, but brown sugar is a perfect 1:1 substitute.",
                "origPrice": 0.8,
                "subPrice": 0.3,
                "similarityScore": 92,
                "amazonLink": None
            },
            {
                "name": "Garlic (minced)",
                "category": "Local Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Ginger (grated)",
                "category": "Local Mart",
                "amount": 5,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.3,
                "subPrice": 0.3,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Sesame Oil",
                "category": "Local Mart",
                "amount": 10,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 1.0,
                "subPrice": 1.0,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Green Onion",
                "category": "Local Mart",
                "amount": 40,
                "unit": "g",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            }
        ],
        "tools": [
            {
                "name": "Cast Iron Skillet or Grill Pan",
                "substitute": "Any very hot pan — the key is high heat",
                "amazonLink": "https://www.amazon.com/s?k=cast+iron+skillet"
            }
        ],
        "steps": [
            "Combine gochujang, soy sauce, honey, garlic, ginger, and sesame oil in a bowl. Mix until smooth.",
            "Slice beef as thin as possible (partially freeze for 30 min for easier slicing). Add to marinade and toss to coat.",
            "Marinate for minimum 1 hour in the fridge. 4–8 hours is ideal for deeper flavor.",
            "Heat cast iron skillet or grill pan to smoking hot. Do NOT add oil — the beef has enough fat.",
            "Cook beef in a SINGLE LAYER, never crowding the pan. Cook in batches for 1–2 minutes per side until edges are caramelized and crispy.",
            "Garnish with sesame seeds and sliced green onion. Serve with rice and crisp lettuce leaves for wrapping."
        ],
        "storytelling": "Gochujang Bulgogi is Bulgogi with attitude — the spicy, fermented kick of gochujang turning the classic beloved dish into something you crave on those nights when you want heat with your sweetness. It's a fiery upgrade celebrated at Korean BBQ tables nationwide.",
        "category": "Meat"
    },
    {
        "id": "spicy-squid-radish-soup",
        "title": "Spicy Squid & Radish Soup (Eolkeun Ojingeo-muguk)",
        "description": "A deeply warming Korean soup featuring tender squid rings and crisp Korean radish in a vibrant, spicy clear broth. Refreshingly light yet packed with oceanic umami, this soup is a favorite seafood comfort dish that comes together in under 30 minutes.",
        "image": "/images/spicy_squid_radish_soup.png",
        "cookTime": "25 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 1,
        "textureCheck": "The squid rings should be tender and plump — overcooked squid becomes rubbery. Add squid in the last 5 minutes only. The radish should be semi-translucent and yield easily to a chopstick. The broth should be clear with a vibrant red tinge, not murky.",
        "ingredients": [
            {
                "name": "Squid (cleaned, sliced into rings)",
                "category": "Local Mart",
                "amount": 300,
                "unit": "g",
                "substitute": "Calamari rings (pre-cleaned)",
                "subReason": "Pre-cleaned calamari from the seafood counter works identically — saves prep time on a weeknight.",
                "origPrice": 7.0,
                "subPrice": 6.0,
                "similarityScore": 95,
                "amazonLink": None
            },
            {
                "name": "Korean Radish (Mu, cubed)",
                "category": "Korean Mart",
                "amount": 200,
                "unit": "g",
                "substitute": "Daikon radish",
                "subReason": "Daikon is the closest substitute — same mild, slightly sweet flavor and texture when cooked.",
                "origPrice": 2.0,
                "subPrice": 1.8,
                "similarityScore": 95,
                "amazonLink": None
            },
            {
                "name": "Gochugaru (Korean Red Pepper Flakes)",
                "category": "Korean Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": "1 tsp sweet paprika + 1/2 tsp cayenne",
                "subReason": "Provides similar color and heat level.",
                "origPrice": 3.5,
                "subPrice": 1.0,
                "similarityScore": 78,
                "amazonLink": "https://www.amazon.com/s?k=gochugaru"
            },
            {
                "name": "Garlic (minced)",
                "category": "Local Mart",
                "amount": 15,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Soup Soy Sauce (Guk-ganjang)",
                "category": "Korean Mart",
                "amount": 20,
                "unit": "ml",
                "substitute": "Regular soy sauce + a pinch of salt",
                "subReason": "Soup soy sauce is lighter and saltier — regular soy sauce thinned slightly with salt achieves a similar seasoning profile.",
                "origPrice": 3.0,
                "subPrice": 1.0,
                "similarityScore": 82,
                "amazonLink": "https://www.amazon.com/s?k=korean+soup+soy+sauce"
            },
            {
                "name": "Water or Anchovy Stock",
                "category": "Local Mart",
                "amount": 600,
                "unit": "ml",
                "substitute": "Low-sodium chicken broth",
                "subReason": "Anchovy stock delivers deep sea umami. Low-sodium chicken broth is the best substitute for everyday cooking.",
                "origPrice": 0.5,
                "subPrice": 1.5,
                "similarityScore": 72,
                "amazonLink": None
            },
            {
                "name": "Green Onion",
                "category": "Local Mart",
                "amount": 30,
                "unit": "g",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.4,
                "subPrice": 0.4,
                "similarityScore": None,
                "amazonLink": None
            }
        ],
        "tools": [
            {
                "name": "Medium Soup Pot",
                "substitute": "Any medium pot works fine",
                "amazonLink": None
            }
        ],
        "steps": [
            "Cube the radish into bite-sized pieces. Place in a pot with water or stock. Bring to a boil, then simmer for 8 minutes until radish is semi-cooked.",
            "Add gochugaru and garlic. Stir well and continue simmering for 3 minutes to bloom the spices into the broth.",
            "Season with soup soy sauce and salt to taste. The broth should be lightly red and pleasantly spicy.",
            "Add squid rings in the last 5 minutes only — do not overcook. They will turn opaque and firm when done.",
            "Add green onion and a drizzle of sesame oil. Serve immediately in deep bowls with steamed rice on the side."
        ],
        "storytelling": "Koreans reach for Ojingeo-muguk on cold days and rainy evenings — the spicy, briny broth of squid and radish warms from the inside out. It's a dish deeply tied to coastal Korean life and the simplicity of honest, seasonal seafood cooking.",
        "category": "Seafood"
    },
    {
        "id": "cold-cucumber-seaweed-soup",
        "title": "Cold Cucumber & Seaweed Soup (Oi-miyeok Naengguk)",
        "description": "A supremely refreshing Korean chilled soup perfect for hot summer days. Crisp cucumber ribbons and silky wakame seaweed float in a light, tangy, slightly sweet vinegar broth garnished with sesame oil. It is ready in 10 minutes and requires zero cooking.",
        "image": "/images/cold_cucumber_seaweed_soup.png",
        "cookTime": "10 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 1,
        "textureCheck": "The cucumber should be crunchy — never limp. The seaweed should be fully hydrated but not mushy. The broth must be distinctly cold and slightly tangy. If it tastes flat, add a few more drops of rice vinegar and a pinch of sugar.",
        "ingredients": [
            {
                "name": "Cucumber (thinly sliced)",
                "category": "Local Mart",
                "amount": 200,
                "unit": "g",
                "substitute": None,
                "subReason": None,
                "origPrice": 1.0,
                "subPrice": 1.0,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Dried Wakame Seaweed (Miyeok)",
                "category": "Korean Mart",
                "amount": 10,
                "unit": "g",
                "substitute": "Any dried seaweed (hijiki or kelp cut thin)",
                "subReason": "Wakame rehydrates into silky ribbons. Other mild seaweeds work but may have a slightly different texture.",
                "origPrice": 3.0,
                "subPrice": 2.5,
                "similarityScore": 80,
                "amazonLink": "https://www.amazon.com/s?k=dried+wakame+seaweed"
            },
            {
                "name": "Rice Vinegar",
                "category": "Local Mart",
                "amount": 30,
                "unit": "ml",
                "substitute": "Apple cider vinegar (use slightly less)",
                "subReason": "Apple cider vinegar is slightly more acidic — use 20ml and adjust to taste.",
                "origPrice": 1.5,
                "subPrice": 1.0,
                "similarityScore": 88,
                "amazonLink": None
            },
            {
                "name": "Sugar",
                "category": "Local Mart",
                "amount": 15,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.1,
                "subPrice": 0.1,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Salt",
                "category": "Local Mart",
                "amount": 5,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.05,
                "subPrice": 0.05,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Sesame Oil",
                "category": "Local Mart",
                "amount": 5,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.5,
                "subPrice": 0.5,
                "similarityScore": None,
                "amazonLink": None
            },
            {
                "name": "Chilled Water or Ice Water",
                "category": "Local Mart",
                "amount": 400,
                "unit": "ml",
                "substitute": None,
                "subReason": None,
                "origPrice": 0.0,
                "subPrice": 0.0,
                "similarityScore": None,
                "amazonLink": None
            }
        ],
        "tools": [
            {
                "name": "Large mixing bowl",
                "substitute": "Any bowl large enough to mix",
                "amazonLink": None
            }
        ],
        "steps": [
            "Soak dried wakame in cold water for 10 minutes until fully rehydrated. Drain and squeeze out excess water. Cut into bite-sized pieces if large.",
            "Slice cucumber into thin rounds or half-moons. Sprinkle with a pinch of salt, toss, and let sit for 5 minutes. Gently squeeze out excess moisture.",
            "In a bowl, mix rice vinegar, sugar, salt, and sesame oil. Stir until sugar dissolves completely.",
            "Add chilled water (add 4–5 ice cubes for even more chill). Taste and adjust: more vinegar for tartness, more sugar for sweetness.",
            "Add cucumber and seaweed. Toss gently. Serve immediately in chilled bowls, topped with toasted sesame seeds."
        ],
        "storytelling": "Oi-miyeok Naengguk is Korea's answer to a summer heatwave — a soup so cold and bright it feels like jumping into the ocean. Koreans have been pairing this with grilled meat for generations, letting the cool, vinegary broth cut through the richness of the BBQ.",
        "category": "Side Dish"
    }
]

recipes_path = r"c:\Users\admin\OneDrive\바탕 화면\안티그래비티 자동화\kfood-platform\src\data\recipes.json"
with open(recipes_path, "r", encoding="utf-8") as f:
    existing = json.load(f)

existing_ids = {r["id"] for r in existing}
added = 0
for r in new_recipes:
    if r["id"] not in existing_ids:
        existing.append(r)
        added += 1
        print(f"Added: {r['title']}")
    else:
        print(f"Skipped (already exists): {r['title']}")

with open(recipes_path, "w", encoding="utf-8") as f:
    json.dump(existing, f, ensure_ascii=False, indent=4)

print(f"\nTotal recipes: {len(existing)} (+{added} new)")
