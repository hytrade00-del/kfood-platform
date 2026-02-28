import os
import shutil
import re
import json

src = r"C:\Users\admin\.gemini\antigravity\brain\c452a26e-7aab-4742-8c0b-f1e2373ad5ec"
dst = r"c:\Users\admin\OneDrive\바탕 화면\안티그래비티 자동화\kfood-platform\public\images"

os.makedirs(dst, exist_ok=True)

for f in os.listdir(src):
    if f.endswith('.png'):
        match = re.search(r'^(.*?)_\d+\.png$', f)
        if match:
            new_name = match.group(1) + ".png"
            shutil.copy2(os.path.join(src, f), os.path.join(dst, new_name))
            print(f"Copied {f} to {new_name}")

json_path = r"c:\Users\admin\OneDrive\바탕 화면\안티그래비티 자동화\kfood-platform\src\data\recipes.json"
with open(json_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

img_map = {
    "kimchi-jjigae": "kimchi_jjigae.png",
    "bulgogi": "bulgogi.png",
    "bibimbap": "bibimbap.png",
    "yangnyeom-chicken": "yangnyeom_chicken.png",
    "japchae": "japchae.png",
    "dakbokkeumtang": "dakbokkeumtang.png",
    "chadol-doenjang-jjigae": "doenjang_jjigae.png",
    "gochujang-samgyeopsal": "gochujang_samgyeopsal.png",
    "kkanpunggi": "kkanpunggi.png",
    "galbi-jjim": "galbi_jjim.png",
    "jeyuk-bokkeum": "jeyuk_bokkeum.png",
    "samgyetang": "samgyetang.png",
    "dakgomtang": "dakgomtang.png",
    "garlic-pickle": "garlic_pickle.png",
    "jang-susam": "jang_susam.png"
}

for r in data:
    if r['id'] in img_map:
        r['image'] = f"/images/{img_map[r['id']]}"
        
with open(json_path, 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=4, ensure_ascii=False)
print("Updated recipes.json")
