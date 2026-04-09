import json
import os

RECIPES_PATH = os.path.join('src', 'data', 'recipes.json')

new_recipes = [
    {
        "id": "pork-belly-gochujang-jjigae",
        "title": "Samgyeop Gochujang Jjigae (Pork Belly Gochujang Stew)",
        "description": "Authenticity isn't about the label on the jar; it's about the final taste. If you're missing specific Korean sauces, this Pork Belly Gochujang Stew is the perfect place to start. By using simple supermarket swaps like malt vinegar for acidity, we'll achieve that deep, authentic flavor profile right from your local shelves. A rich, thick, and intensely savory stew where fatty pork belly meets the bold heat of gochujang and a kick of vinegar at the end for an addictive tang.",
        "image": "/images/gochujang_jjigae_pork.png",
        "cookTime": "30 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The pork should be slightly crispy on the edges from the initial fry, and the broth should be thick enough to coat the back of a spoon. Potatoes should be soft but still hold their shape.",
        "ingredients": [
            {"name": "Pork Belly", "category": "Local Mart", "amount": 300, "unit": "g", "substitute": "Bacon or thick-cut pork shoulder", "subReason": "Pork belly provides the necessary fat for a rich broth. Thick-cut bacon adds a smoky depth that works surprisingly well.", "origPrice": 6.0, "subPrice": 4.5, "similarityScore": 85},
            {"name": "Gochujang (Korean Chili Paste)", "category": "Korean Mart", "amount": 60, "unit": "ml", "substitute": "2 tbsp Sriracha + 1 tbsp Miso + 1 tsp Honey", "subReason": "Mimics the sweet, spicy, and fermented depth of the original paste.", "origPrice": 4.0, "subPrice": 1.5, "similarityScore": 78},
            {"name": "Gochugaru (Korean Chili Flakes)", "category": "Korean Mart", "amount": 30, "unit": "ml", "substitute": "1 tbsp Paprika + 1 tsp Cayenne", "subReason": "Paprika for color and cayenne for the heat kick.", "origPrice": 3.0, "subPrice": 0.8, "similarityScore": 75},
            {"name": "Anchovy Sauce / Shrimp Sauce", "category": "Korean Mart", "amount": 15, "unit": "ml", "substitute": "Fish Sauce or Soy Sauce + smashed anchovy", "subReason": "Provides the essential salty umami depth.", "origPrice": 4.5, "subPrice": 2.0, "similarityScore": 82},
            {"name": "Potato", "category": "Local Mart", "amount": 2, "unit": "units", "substitute": None, "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None},
            {"name": "Zucchini", "category": "Local Mart", "amount": 1, "unit": "unit", "substitute": None, "subReason": None, "origPrice": 1.2, "subPrice": 1.2, "similarityScore": None},
            {"name": "Tofu", "category": "Local Mart", "amount": 200, "unit": "g", "substitute": None, "subReason": None, "origPrice": 2.0, "subPrice": 2.0, "similarityScore": None},
            {"name": "Vinegar", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": "Lemon juice", "subReason": "Cuts through the richness and balances the sweet-spicy notes.", "origPrice": 0.5, "subPrice": 0.5, "similarityScore": 90}
        ],
        "tools": [
            {"name": "Heavy-bottomed Pot", "substitute": "Dutch oven or sauce pan"}
        ],
        "steps": [
            "In your pot over medium heat, sauté pork belly with a pinch of salt until golden brown. This renders the fat which is the base of your flavor.",
            "Add minced garlic, ginger, sliced green onions, and chili. Stir-fry for 2 minutes until fragrant.",
            "Add gochujang, gochugaru, sugar, and soy sauce. Sauté briefly (be careful not to burn the gochugaru).",
            "Pour in 1L of water. Add cubed potatoes, onions, and tofu. Bring to a boil.",
            "Reduce heat and simmer for 10 minutes. Add sliced zucchini and simmer for another 10 minutes.",
            "Stir in 1 tbsp of vinegar in the final minute. This 'secret' step transforms the stew by cutting the heaviness.",
            "Serve hot with steamed rice. Best enjoyed when the broth has slightly thickened."
        ],
        "storytelling": "Gochujang Jjigae is the bold, younger brother of Kimchi Jjigae. It's the meal you make when you want something even more intensely savory and thick. The addition of vinegar at the end is a pro-tip that many restaurants use to make their flavors 'pop'.",
        "category": "Meat",
        "culturalContext": "While Kimchi Jjigae relies on fermented cabbage, Gochujang Jjigae relies on the chili paste itself for body. Historically a rustic countryside meal, it has become a popular modern comfort food, especially in camping culture across Korea due to its simplicity and robust flavor.",
        "substituteExplanation": "The thickness of this stew comes from the gochujang and the starch from potatoes. If you don't have gochujang, a mix of miso and sriracha provides that fermented heat. The final splash of vinegar might seem odd, but it's the professional secret to achieving that multi-dimensional taste found in top-tier Seoul restaurants."
    },
    {
        "id": "special-budae-jjigae",
        "title": " 어남선생 부대찌개 (Premium Army Base Stew)",
        "description": "Living abroad shouldn't mean missing out on Seoul's most iconic street foods. This Premium Army Base Stew (Budae Jjigae) using Ryu Su-young's famous recipe proves that you can create world-class flavor with simple cans of Spam and grocery store staples. No specialty grocery run required. A legendary fusion stew born from history, brimming with ham, sausage, ramen, and a rich, cheesy, garlicky broth that is the ultimate crowd-pleaser.",
        "image": "/images/budae_jjigae_special.png",
        "cookTime": "35 min",
        "difficulty": "Beginner",
        "servings": 3,
        "pantryLevel": 1,
        "textureCheck": "The ramen should be al dente, and the broth should be creamy from the cheese and baked beans. The Spam should be soft, having absorbed the spicy soup.",
        "ingredients": [
            {"name": "Spam", "category": "Local Mart", "amount": 1, "unit": "can", "substitute": None, "subReason": None, "origPrice": 4.5, "subPrice": 4.5, "similarityScore": None},
            {"name": "Baked Beans", "category": "Local Mart", "amount": 0.5, "unit": "can", "substitute": "Pinto beans + 1 tsp brown sugar", "subReason": "Baked beans provide the signature sweetness and thick texture to the broth.", "origPrice": 1.2, "subPrice": 0.8, "similarityScore": 88},
            {"name": "Beef Bone Broth", "category": "Local Mart", "amount": 500, "unit": "ml", "substitute": "Chicken broth or vegetable bouillon", "subReason": "Provides a deep savory base. If using bouillon, keep it slightly concentrated.", "origPrice": 2.5, "subPrice": 1.5, "similarityScore": 85},
            {"name": "Minced Garlic", "category": "Local Mart", "amount": 1, "unit": "small bowl (lots!)", "substitute": None, "subReason": "The 'secret' to this specific recipe is a generous amount of garlic.", "origPrice": 1.0, "subPrice": 1.0, "similarityScore": None},
            {"name": "Ketchup", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": None, "subReason": "Adds a hint of acidity and color that rounds out the savory sauces.", "origPrice": 0.4, "subPrice": 0.4, "similarityScore": 95},
            {"name": "Ramen Noodles", "category": "Local Mart", "amount": 1, "unit": "pack", "substitute": "Any instant noodles", "subReason": None, "origPrice": 1.0, "subPrice": 1.0, "similarityScore": 98}
        ],
        "tools": [
            {"name": "Large Shallow Pot or Pan", "substitute": "Deep skillet"}
        ],
        "steps": [
            "Prep the vegetables (cabbage, onion, green onion) and meat (Spam, sausage, ham) by slicing them into bite-sized pieces.",
            "In a large shallow pot, arrange the sliced ingredients neatly around the edges.",
            "Place a generous mound of minced garlic in the center. Add the baked beans next to it.",
            "Whisk together the sauce: gochujang, gochugaru, soy sauce, sugar, and ketchup. Pour it over the ingredients.",
            "Pour in the beef bone broth (or substitute). Bring to a boil over high heat.",
            "Once boiling, add the ramen noodles in the center. Top with a slice of American cheese if desired.",
            "Simmer until noodles are cooked to your liking and the broth has thickened slightly. Serve directly from the pot."
        ],
        "storytelling": "Budae Jjigae, or 'Army Base Stew', is a dish born of resourcefulness and global fusion. This specific version, popularized by actor and chef Ryu Su-young, emphasizes using plenty of garlic and a touch of ketchup to achieve restaurant-quality depth at home.",
        "category": "Meat",
        "culturalContext": "Originating after the Korean War near U.S. military bases, Budae Jjigae used surplus canned goods like Spam and hot dogs to create a unique Korean stew. It's now a beloved social meal, often shared among friends with endless refills of ramen and broth.",
        "substituteExplanation": "While authentic versions use 'Sagol' (beef bone broth), any high-quality store-bought beef or chicken broth works perfectly. The key is the 'bomb' of minced garlic and the dash of ketchup, which might seem non-traditional but actually mimics the complex savory-sweet profile of specialty Budae Jjigae restaurants."
    },
    {
        "id": "spam-sundubu-jjigae",
        "title": "Spam Sundubu Jjigae (Spam Soft Tofu Stew)",
        "description": "The art of substitution is the true secret weapon of a global home cook. This Spam Soft Tofu Stew hacks the traditional seafood-based broth with simple pantry staples like canned Spam and oyster sauce. It's the ultimate 'I have nothing in the fridge' meal that tastes like a gourmet Korean feast. Silky soft tofu swimming in a fiery, garlic-rich broth with chunks of salty Spam that act as a savory flavor bomb.",
        "image": "/images/spam_sundubu_jjigae.png",
        "cookTime": "20 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 1,
        "textureCheck": "The tofu should be so soft it melts in your mouth, while the Spam bits should be slightly chewy. The broth should have a layer of bright red chili oil on top.",
        "ingredients": [
            {"name": "Soft Tofu (Sundubu)", "category": "Local Mart", "amount": 1, "unit": "pack", "substitute": "Silken tofu", "subReason": "Silken tofu has the same delicate texture. Just be careful not to break it up too much.", "origPrice": 3.0, "subPrice": 2.0, "similarityScore": 92},
            {"name": "Spam", "category": "Local Mart", "amount": 0.5, "unit": "can", "substitute": "Any canned ham or bacon", "subReason": "Adds saltiness and fat that compensates for a lack of meat or seafood stock.", "origPrice": 2.5, "subPrice": 2.5, "similarityScore": 95},
            {"name": "Oyster Sauce", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": "Worcestershire sauce + pinch of sugar", "subReason": "Provides the deep umami and slight sweetness essential for a rich broth.", "origPrice": 2.0, "subPrice": 1.5, "similarityScore": 80},
            {"name": "Gochugaru", "category": "Korean Mart", "amount": 45, "unit": "ml", "substitute": "Paprika + Chili oil", "subReason": "For the color and spicy kick.", "origPrice": 3.0, "subPrice": 1.0, "similarityScore": 75},
            {"name": "Egg", "category": "Local Mart", "amount": 1, "unit": "unit", "substitute": None, "subReason": "The finishing touch for any Sundubu Jjigae.", "origPrice": 0.3, "subPrice": 0.3, "similarityScore": 100}
        ],
        "tools": [
            {"name": "Ttukbaegi (Stone Pot)", "substitute": "Small saucepan"}
        ],
        "steps": [
            "Finely dice the Spam. In a pot, sauté the Spam with 2 tbsp of oil until it turns crispy and brown. This renders the fat for the chili oil.",
            "Add minced garlic, chopped green onions, and chili. Sauté for 1 minute.",
            "Turn off the heat. Add gochugaru and stir into the oil to create a paste (this prevents burning).",
            "Turn the heat back to medium. Add water (300ml), oyster sauce, and soy sauce. Bring to a boil.",
            "Gently slide in the soft tofu. Use a spoon to break it into large chunks.",
            "Simmer for 5 minutes. Add sliced zucchini if using.",
            "Crack a raw egg into the center of the boiling stew. Top with fresh green onions and lots of black pepper. Serve immediately."
        ],
        "storytelling": "Sundubu Jjigae is often seen as a seafood dish, but this Spam version is the ultimate 'soul food' hack. It's what Korean students abroad cook to cure homesickness when they can't get to a specialty market.",
        "category": "Meat",
        "culturalContext": "Soft tofu stew is a staple of Korean dining, valued for its light yet spicy profile. While traditionally made with clams or beef, modern 'fusion' versions using everything from Spam to cheese have become popular among younger generations.",
        "substituteExplanation": "The secret here is using the Spam's fat to bloom the chili flakes. This creates a natural 'chili oil' that gives the soup its restaurant look. Oyster sauce is the cheat code for adding sea-based umami without actually having to buy kelp or anchovies."
    },
    {
        "id": "korean-corn-salad",
        "title": "Korean Style Corn Salad",
        "description": "Authenticity isn't about the label on the jar; it's about the final taste. If you've been to a Korean BBQ restaurant or fried chicken joint, you know this Corn Salad. It's sweet, creamy, and incredibly refreshing. By using simple grocery store canned corn and mayo, you can recreate this iconic Korean 'service' dish (Banchan) in under 5 minutes. A perfect cooling side dish that pairs beautifully with spicy Korean BBQ or fried chicken.",
        "image": "/images/corn_salad.png",
        "cookTime": "5 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 1,
        "textureCheck": "The kernels should be juicy and crisp, coated in a thick, velvety dressing. It should be chilled for the best experience.",
        "ingredients": [
            {"name": "Canned Corn", "category": "Local Mart", "amount": 1, "unit": "can", "substitute": "Frozen corn (thawed)", "subReason": "Canned corn provides the perfect sweetness and crunch for this dish.", "origPrice": 1.0, "subPrice": 1.0, "similarityScore": 95},
            {"name": "Mayonnaise", "category": "Local Mart", "amount": 45, "unit": "ml", "substitute": "Greek yogurt (for a lighter version)", "subReason": "Use a creamy mayo like Kewpie for the most authentic taste, but any standard mayo works.", "origPrice": 0.5, "subPrice": 0.5, "similarityScore": 90},
            {"name": "Sugar", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": "Honey or Maple syrup", "subReason": "Korean salads are often slightly sweeter than Western counterparts.", "origPrice": 0.1, "subPrice": 0.1, "similarityScore": 95},
            {"name": "Vinegar", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": "Lemon juice", "subReason": "Provides the tangy balance to the sweet mayo.", "origPrice": 0.2, "subPrice": 0.2, "similarityScore": 90}
        ],
        "tools": [
            {"name": "Mixing Bowl", "substitute": None}
        ],
        "steps": [
            "Drain the canned corn thoroughly. If using frozen corn, ensure it is completely thawed and patted dry.",
            "Finely dice the onion and bell peppers (red and green for color).",
            "In a bowl, combine the corn, diced vegetables, mayo, sugar, vinegar, salt, and pepper.",
            "Mix until everything is evenly coated in the creamy dressing.",
            "Taste and adjust sweetness or acidity. Sprinkle with sesame seeds or parsley.",
            "For the best flavor, let it chill in the fridge for at least 15 minutes before serving."
        ],
        "storytelling": "Visit any Korean fried chicken shop and you'll likely see a small bowl of this corn salad. It's the unsung hero that cleanses your palate between bites of spicy, oily chicken.",
        "category": "Side Dish",
        "culturalContext": "While corn isn't indigenous to Korea, 'Con-chol-la-deu' became a staple banchan in the 1980s and 90s. It represents the Korean love for sweet-and-savory (danjjan) combinations and is a must-have at any casual dining table.",
        "substituteExplanation": "There's no magic here—just the right ratios. Canned sweet corn is actually preferred over fresh for this specific recipe because of its uniform texture and juice. If your mayo is too thick, a teaspoon of milk can help reach the desired 'pourable yet creamy' consistency."
    },
    {
        "id": "spicy-squid-stir-fry",
        "title": "Spicy Stir-fried Squid (Ojingeo Bokkeum)",
        "description": "Living abroad shouldn't mean giving up on authentic Korean flavors. This Spicy Stir-fried Squid (Ojingeo Bokkeum) is a masterclass in high-heat cooking and flavor balancing. No Gochujang? No problem. By smartly using Sriracha and a bit of honey, we'll hit those exact fiery, sweet notes that make this dish a Seoul favorite. Tender, chewy squid rings tossed in a glossy, vibrant red sauce with plenty of crisp vegetables.",
        "image": "/images/spicy_squid_stirfry.png",
        "cookTime": "20 min",
        "difficulty": "Intermediate",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The squid should be tender—not rubbery. This is achieved by quick, high-heat stir-frying. The sauce should be thick enough to cling to the squid without pooling at the bottom.",
        "ingredients": [
            {"name": "Squid", "category": "Local Mart", "amount": 2, "unit": "units", "substitute": "Shrimp or Oysters", "subReason": "Squid is the star, but this sauce works beautifully with any seafood. For a meat version, use pork belly slices.", "origPrice": 8.0, "subPrice": 6.0, "similarityScore": 85},
            {"name": "Gochujang", "category": "Korean Mart", "amount": 45, "unit": "ml", "substitute": "Sriracha + Miso + Honey", "subReason": "Creates the thick, sweet-spicy base the dish is known for.", "origPrice": 4.0, "subPrice": 1.5, "similarityScore": 80},
            {"name": "Gochugaru", "category": "Korean Mart", "amount": 45, "unit": "ml", "substitute": "Chili flakes or Cayenne", "subReason": "Adds the smoky heat and vibrant red color.", "origPrice": 3.0, "subPrice": 0.8, "similarityScore": 75},
            {"name": "Sesame Oil", "category": "Local Mart", "amount": 15, "unit": "ml", "substitute": "Roasted peanut oil", "subReason": "Adds the nutty aroma that defines the finish of the dish.", "origPrice": 1.5, "subPrice": 1.5, "similarityScore": 80}
        ],
        "tools": [
            {"name": "Wok or Large Skillet", "substitute": "Any large flat pan"}
        ],
        "steps": [
            "Clean and cut the squid into bite-sized rings. Ensure they are dry so they don't 'steam' in the pan.",
            "Heat a wok on high with 2 tbsp of oil. Sauté plenty of sliced green onions to create aromatic 'Pa-gireum' (green onion oil).",
            "Add the squid and 1 tbsp of sugar. The sugar will caramelize on the high heat, giving the squid a beautiful sheen and light sweetness.",
            "Add the vegetables (onion, carrots, chili) and stir-fry rapidly for 2 minutes.",
            "Pour in the sauce mixture (gochujang, gochugaru, soy sauce, garlic). Stir-fry for another 1-2 minutes until the sauce thickens and coats everything.",
            "Turn off the heat. Drizzle with sesame oil and sprinkle with sesame seeds.",
            "Serve on a bed of warm rice. The spicy sauce is perfect for mixing with the rice at the end."
        ],
        "storytelling": "In Korea, this is a popular 'Anju' (food served with alcohol) but also a common home meal. The secret is all in the heat—stir-fry fast and hot to keep the squid succulent.",
        "category": "Meat",
        "culturalContext": "Stir-fried squid is a classic example of 'Bokkeum' cuisine. It highlights the Korean preference for communal dishes that are both intensely spicy and slightly sweet. It's often found in 'Gisa-sikdang' (taxi driver restaurants) where the food is fast, hearty, and flavor-packed.",
        "substituteExplanation": "Squid can be intimidating to cook, but the key is the sugar-fry technique. By adding sugar directly to the hot squid in the pan, you create a barrier that keeps the juices in while adding that glossy 'restaurant look'. Sriracha is a great substitute here as it already has the acidity and garlic notes found in traditional gochujang and vinegar mixes."
    },
    {
        "id": "ugeoji-gamjatang",
        "title": "Ugeoji Gamjatang (Hearty Pork Bone Stew)",
        "description": "The essence of Korean cooking isn't about importing expensive ingredients?it's about understanding flavor profiles. This Ugeoji Gamjatang hacks the long, traditional slow-cook process by using smart flavor boosters. Can't find Ugeoji (dried cabbage)? Use regular Napa cabbage or kale. We'll show you how to get that deep, nutty, 'cooked-all-day' taste in your own kitchen. A soul-warming stew where pork backbones are simmered until the meat falls off, accompanied by softened greens and a rich perilla-infused broth.",
        "image": "/images/ugeoji_gamjatang.png",
        "cookTime": "1 hr 30 min",
        "difficulty": "Intermediate",
        "servings": 2,
        "pantryLevel": 2,
        "textureCheck": "The pork should pull away easily from the bone with chopsticks. The cabbage should be silky and soft. The broth should be thick and slightly gritty from the perilla seeds.",
        "ingredients": [
            {"name": "Pork Backbones", "category": "Local Mart", "amount": 1000, "unit": "g", "substitute": "Pork neck bones or baby back ribs", "subReason": "Bones provide the deep marrow flavor. Ribs are easier to find and have more meat.", "origPrice": 8.0, "subPrice": 7.0, "similarityScore": 90},
            {"name": "Ugeoji (Dried Cabbage)", "category": "Korean Mart", "amount": 300, "unit": "g", "substitute": "Napa cabbage or Kale", "subReason": "Napa cabbage leaves boiled for a long time mimic the texture of ugeoji perfectly.", "origPrice": 4.0, "subPrice": 2.0, "similarityScore": 85},
            {"name": "Perilla Seed Powder", "category": "Korean Mart", "amount": 45, "unit": "ml", "substitute": "Ground toasted sesame seeds + dash of peanut butter", "subReason": "Provides the characteristic nutty, thick texture. Peanut butter adds the fatty richness missing in sesame seeds.", "origPrice": 5.0, "subPrice": 1.0, "similarityScore": 72},
            {"name": "Gochujang", "category": "Korean Mart", "amount": 30, "unit": "ml", "substitute": "Miso + Chili oil", "subReason": "Adds the fermented base saltiness and heat.", "origPrice": 3.0, "subPrice": 1.5, "similarityScore": 75}
        ],
        "tools": [
            {"name": "Large Dutch Oven or Stockpot", "substitute": "Pressure cooker (30 mins)"}
        ],
        "steps": [
            "Soak the pork bones in cold water for 1 hour to remove excess blood. Boil in fresh water for 10 mins, then drain and rinse the bones. This ensures a clean broth.",
            "In a clean pot, add the bones and 2L of water. Add ginger, garlic, and whole green onions. Simmer for 1 hour (or 30 mins in a pressure cooker).",
            "Prepare the greens: Boil Napa cabbage leaves until soft, then squeeze and toss with a mix of gochujang, gochugaru, soy sauce, and shrimp sauce.",
            "Add the seasoned greens and cubed potatoes to the pork broth. Simmer for another 20-30 minutes.",
            "Check for seasoning. Add more salt or soy sauce if needed.",
            "Finish by stirring in a generous amount of perilla seed powder (or substitute) and fresh perilla leaves (or basil).",
            "Serve with a dipping sauce (soy sauce, vinegar, mustard) for the pork meat."
        ],
        "storytelling": "Gamjatang is the ultimate 'Haesang' (hangover cure) but it's even better as a weekend family feast. There's a particular joy in picking every last scrap of tender meat from the bones.",
        "category": "Meat",
        "culturalContext": "Gamjatang literally means 'potato stew', but the real stars are the spicy broth and the pork bones. Historically a cheap and filling meal for laborers, it has evolved into a beloved national dish found in 24-hour restaurants everywhere in Korea.",
        "substituteExplanation": "The x-factor here is the 'nutty' finish. Perilla seeds have a very specific flavor that is hard to find. However, finely ground toasted sesame seeds mixed with a tiny bit of creamy peanut butter can replicate that mouthfeel and fatty depth that makes Gamjatang so satisfying. For the greens, garden-variety kale is actually a fantastic substitute for traditional dried cabbage because it holds its structure during long simmering."
    },
    {
        "id": "galbae-jeyuk-bokkeum",
        "title": "Galbae Jeyuk (Pear Juice Pork Bulgogi)",
        "description": "Can't find Asian Pears in your local mart? Don't let that stop you from making authentic Jeyuk (Spicy Pork). This 'Galbae' Jeyuk recipe uses a famous Korean convenience store hack: using 'IdH' (Pear juice) as the secret marinade base. The enzymes in the pear juice perfectly tenderize the pork, giving it that melt-in-your-mouth restaurant quality. Thinly sliced spicy pork stir-fried until caramelized, with a sauce that's perfectly balanced between sweet pear notes and savory gochujang heat.",
        "image": "/images/galbae_jeyuk.png",
        "cookTime": "25 min",
        "difficulty": "Beginner",
        "servings": 2,
        "pantryLevel": 1,
        "textureCheck": "The pork should be very tender and thinly sliced. The sauce should be caramelized onto the meat, almost like a glaze, not watery.",
        "ingredients": [
            {"name": "Pork Front Leg (Shoulder)", "category": "Local Mart", "amount": 600, "unit": "g", "substitute": "Pork belly or loin sliced paper-thin", "subReason": "Pork shoulder has the right balance of fat and meat. Paper-thin slices are essential for the texture.", "origPrice": 8.0, "subPrice": 6.0, "similarityScore": 90},
            {"name": "Galbae (Korean Pear Juice)", "category": "Local Mart", "amount": 238, "unit": "ml/can", "substitute": "Pear cider or blended sweet apple", "subReason": "Acts as a powerful meat tenderizer and provides the foundation for the sweet sauce.", "origPrice": 1.5, "subPrice": 1.5, "similarityScore": 95},
            {"name": "Gochujang", "category": "Korean Mart", "amount": 60, "unit": "ml", "substitute": "Sriracha + Brown sugar", "subReason": "Provides the spicy and sticky base for the marinade.", "origPrice": 4.0, "subPrice": 1.5, "similarityScore": 82},
            {"name": "Vinegar", "category": "Local Mart", "amount": 30, "unit": "ml", "substitute": "Apple cider vinegar", "subReason": "The acid further tenderizes the pork and brightens the spicy sauce.", "origPrice": 0.5, "subPrice": 0.5, "similarityScore": 90}
        ],
        "tools": [
            {"name": "Large Frying Pan", "substitute": None}
        ],
        "steps": [
            "Prepare the marinade: Mix the pear juice, sugar, soy sauce, gochujang, and minced garlic in a bowl.",
            "Add the pork to the marinade. Use your hands to massage the sauce into the meat. Add 2 tbsp of vinegar and sesame oil to finish the marinade.",
            "Add sliced onion and green onion on top. Let marinate for at least 20 minutes (or up to overnight).",
            "Heat a pan over medium-high heat. Add the pork FIRST without the extra liquid or vegetables.",
            "Fry until the pork is 80% cooked and starting to brown/caramelize. This is the 'secret' to avoid soggy jeyuk.",
            "Add the rest of the marinade and the vegetables. Stir-fry rapidly until the sauce reduces into a thick glaze.",
            "Finish with a sprinkle of sesame seeds and cracked pepper. serve with lettuce leaves for wrapping.",
            "Pro-tip: Add one final spoon of minced garlic right at the end to maximize the aroma."
        ],
        "storytelling": "Jeyuk Bokkeum is the fuel of Korea. It's the ultimate lunch dish. Every office worker in Seoul has their favorite Jeyuk spot, and this Pear Juice version is the trendiest 'hack' to get that professional taste at home.",
        "category": "Meat",
        "culturalContext": "Jeyuk means 'pork'. While Bulgogi usually refers to beef, Jeyuk is the spicy pork equivalent. Using pear (Bae) is the traditional way to tenderize meat in Korea, and using the canned juice version (Galbae) has become a legendary life-hack (IdH hack) in the Korean cooking community.",
        "substituteExplanation": "The 'IdH' hack is named after how the Korean word for pear (Bae / \ubc30) looks similar to the letters 'IdH' on a can. The juice is chemically identical to fresh pear juice for tenderizing. If you can't find it, any non-alcoholic pear cider or even a blended sweet Gala apple works just as well to provide those enzymes and natural sweetness."
    }
]

def add_recipes():
    if not os.path.exists(RECIPES_PATH):
        print(f"Error: {RECIPES_PATH} not found.")
        return

    with open(RECIPES_PATH, 'r', encoding='utf-8') as f:
        recipes = json.load(f)

    # Check for duplicates by ID
    existing_ids = {r['id'] for r in recipes}
    
    added_count = 0
    for new_r in new_recipes:
        if new_r['id'] not in existing_ids:
            recipes.append(new_r)
            added_count += 1
        else:
            print(f"Skipping duplicate ID: {new_r['id']}")

    with open(RECIPES_PATH, 'w', encoding='utf-8') as f:
        json.dump(recipes, f, ensure_ascii=False, indent=4)
    
    print(f"Successfully added {added_count} new recipes.")

if __name__ == "__main__":
    add_recipes()
