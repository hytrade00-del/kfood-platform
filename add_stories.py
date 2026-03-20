import json
import os

file_path = r'c:\Users\admin\OneDrive\바탕 화면\kfood-platform\src\data\recipes.json'
with open(file_path, 'r', encoding='utf-8') as f:
    recipes = json.load(f)

stories = {
    "kimchi-jjigae": "A bubbling pot of Kimchi Jjigae is the definition of Korean soul food. It's the ultimate comfort meal we crave after a long day, evoking warm memories of mom's home cooking and family dinners around a shared pot.",
    "bulgogi": "Bulgogi represents celebration and hospitality in Korean homes. The sweet, savory aroma of marinating beef instantly brings back memories of festive holidays and special family gatherings, meant to be shared generously.",
    "bibimbap": "Bibimbap is the beautiful art of Korean harmony in a bowl. Historically eaten on Lunar New Year's Eve to clear out the pantry, it remains our go-to comfort meal that transforms simple, everyday vegetables into a vibrant feast.",
    "yangnyeom-chicken": "Whenever there's a big sports match or a late-night craving, Yangnyeom Chicken is our national companion. The sticky, sweet, and spicy crunch pairs perfectly with a cold beer or soda, defining the iconic Korean 'Chimaek' culture.",
    "japchae": "Japchae is the centerpiece of every Korean feast. The slippery, slightly sweet potato noodles represent longevity and happiness, making it an essential, memory-filled dish for birthdays and joyous family milestones.",
    "dakbokkeumtang": "This hearty, spicy chicken stew is the quintessential 'bap-doduk' (rice thief). We love scooping the fiery, rich potato broth over a warm bowl of rice, a simple yet profound joy deeply ingrained in local dining traditions.",
    "chadol-doenjang-jjigae": "Doenjang Jjigae is the aromatic heartbeat of a Korean kitchen. The deeply earthy scent of fermented soybean paste bubbling on the stove is nostalgic, representing the rustic, time-honored wisdom of our ancestors.",
    "gochujang-samgyeopsal": "Grilling Gochujang Samgyeopsal at home brings the lively energy of a Korean BBQ tent indoors. The sizzling sound and the sweet, fiery chili glaze caramelizing over the pork instantly lift our spirits on a gloomy evening.",
    "kkanpunggi": "Kkanpunggi perfectly captures our love for Korean-Chinese fusion. With its garlicky, sweet-and-sour crunch, it’s the ultimate weekend treat that brings families together for a casual, laughter-filled dining experience.",
    "galbi-jjim": "Galbi Jjim is the ultimate labor of love. We only prepare these tender, sweet-braised short ribs for the most honored guests and major holidays like Chuseok, symbolizing deep respect, warmth, and family devotion.",
    "jeyuk-bokkeum": "Jeyuk Bokkeum is the comforting star of neighborhood diners (bunsikjip) across Korea. The fiery, smoky pork belly stir-fry is a nostalgic worker’s lunch, providing a spicy, energizing kick to power through a busy day.",
    "samgyetang": "Following the concept of 'I-yeol-chi-yeol' (fighting heat with heat), we eat this bubbling ginseng chicken soup on the hottest summer days. The rich, herbal broth recharges our exhausted bodies and restores vital inner energy.",
    "dakgomtang": "Dakgomtang is our humble, soul-soothing remedy for winter chills and common colds. The deeply simmered, clear chicken broth offers pure, unadulterated comfort that feels like a warm embrace from a caring grandmother.",
    "garlic-pickle": "Manul Jangajji is a testament to the Korean patience of fermentation. These soy-pickled garlic cloves add a bright, tangy crunch to rich meats, silently supporting the main dish like an unsung hero of our dining tables.",
    "jang-susam": "Jang-Jorim is the quintessential 'banchan' (side dish) of childhood lunchboxes. The sweet, soy-braised beef and quail eggs carry a profound sense of maternal love, meant to provide lasting nourishment and energy.",
    "aukguk": "There is an old Korean saying: 'Auk soup is so delicious you’d latch the door to eat it alone.' This deeply earthy mallow soup connects us to our agrarian roots and the rustic, comforting flavors of the Korean countryside.",
    "oyster-soft-tofu-stew": "A bubbling bowl of Gul Sundubu-jjigae feels like a warm hug on a freezing winter day. The velvety tofu and briny oysters evoke nostalgic memories of lively coastal fish markets and the comforting heat of a busy diner.",
    "spicy-chili-steamed": "Maeun Gochu-jjim showcases the brilliant Korean technique of softening fierce heat through steaming. Coated in savory flour, these steamed chilies offer a nostalgic, rustic flavor that reminds us of rural summer harvests.",
    "oyster-soup-rice": "Gul-gukbap is the ultimate winter coastal comfort food. The milky, briny oyster broth swimming with soft rice is a restorative meal that Koreans actively seek out to warm their bones and cure a heavy hangover.",
    "pork-backbone-stew": "Deung-ppyeo-jjim is a rustic, deeply savory feast shared among close friends. Tearing the tender meat off massive pork bones with your hands embodies a convivial, unpretentious dining culture cherished across Korea.",
    "kimchi-bokkeumbap": "Kimchi Fried Rice is our ultimate quick-fix comfort food. Frying well-fermented, sour kimchi with leftover rice and capping it with a crispy fried egg brings instant joy and nostalgic memories of simple childhood meals.",
    "gungmul-tteokbokki": "Tteokbokki is the undisputed king of Korean street food. We fondly remember standing by outdoor stalls, dipping fried snacks into the fiery, sweet, and soupy broth, a taste deeply woven into our schoolyard memories.",
    "dubu-jorim": "Dubu Jorim transforms simple tofu into a deeply flavorful, spicy delight. This everyday side dish is a staple of modest home-cooked meals, carrying the reliable, comforting essence of a classic Korean dinner table.",
    "algamja-jorim": "These sweet, soy-glazed baby potatoes are a delightfully sticky lunchbox favorite. The wrinkled, chewy skin contrasting with the soft interior always brings back fond, nostalgic memories of school lunches and picnics.",
    "cheonggukjang-jjigae": "Cheonggukjang is the deeply pungent, deeply beloved soul food of older generations. Its profoundly earthy, fermented aroma might be strong, but the rich, rustic taste instantly transports us to the warmth of a country farmhouse.",
    "gochu-basasak-chicken": "This isn't just fried chicken; it's a modern Korean weekend ritual. The spicy, oven-baked crunch paired with creamy, tangy dipping sauces represents the dynamic and ever-evolving landscape of our beloved 'Chimaek' culture.",
    "gimbap": "Gimbap is the taste of a Korean childhood picnic. Neatly rolled with diverse, colorful ingredients, each slice carries the meticulous love and early-morning efforts of mothers preparing special lunchboxes for school field trips.",
    "haemul-pajeon": "Whenever it rains in Korea, we instinctively crave Pajeon and Makgeolli. The sizzling sound of the pancake mimics raindrops hitting the pavement, making it our absolute favorite comfort food for a cozy, gloomy afternoon.",
    "sundubu-jjigae-classic": "A fiery, bubbling bowl of Classic Sundubu is the ultimate remedy for a tired soul. Cracking a raw egg into the boiling, spicy red broth at the table is a beloved ritual that perfectly defines our everyday dining joy.",
    "samgyeopsal": "Samgyeopsal is the undeniable centerpiece of Korean social life. Gathering around a sizzling grill, wrapping pork in lettuce, and clinking Soju glasses is how we celebrate, bond, and wash away the stress of the day.",
    "kkaennip-jangajji": "Kkaennip Jangajji is the ultimate 'rice thief' of the Korean summer. Peeling apart the fragrant, soy-soaked perilla leaves reminds us of communal family meals where everyone helps each other separate the delicate, sticky layers.",
    "gochujang-yukhoe": "Gochujang Yukhoe is a luxurious interplay of textures and temperatures. The chilled, fiery-sweet beef mixing with the rich egg yolk creates an elegant, festive dish that we eagerly anticipate at traditional banquets.",
    "nabak-kimchi": "Nabak Kimchi is the refreshing palate cleanser of our festive feasts. The cold, tangy, pinkish broth effortlessly cuts through the richness of heavy holiday meats, offering a clean, crisp sip of vibrant Korean fermentation.",
    "minari-jangajji": "Minari Jangajji is the crisp, herbal harbinger of spring. The bright, cleansing crunch of the pickled water dropwort perfectly balances rich BBQ meats, embodying our deep appreciation for seasonal, medicinal foraging.",
    "nurungji-baeksuk": "In Korea, we enjoy Baeksuk to fight the sweltering summer heat. After eating this steaming dish, you will find yourself sweating, but feeling a strange, refreshing inner warmth that completely recharges your exhausted soul."
}

updated_count = 0
for recipe in recipes:
    if recipe['id'] in stories:
        recipe['storytelling'] = stories[recipe['id']]
        updated_count += 1

with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(recipes, f, indent=4, ensure_ascii=False)

print(f"Updated {updated_count} recipes with storytelling.")
