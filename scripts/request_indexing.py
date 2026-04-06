import json
import os
from google_auth_httplib2 import AuthorizedHttp
from googleapiclient.discovery import build
from google.oauth2 import service_account

# Path to the service account key file
# USER: Update this path to your Search Console service account JSON file!
KEY_FILE = 'service-account.json'

def request_indexing(url):
    """
    Requests Google to index the given URL.
    """
    if not os.path.exists(KEY_FILE):
        print(f"Error: Key file '{KEY_FILE}' not found. Please provide the Search Console API key.")
        return

    scopes = ['https://www.googleapis.com/auth/indexing']
    credentials = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=scopes)
    
    # Build the service
    # The Indexing API endpoint
    endpoint = "https://indexing.googleapis.com/v3/urlNotifications:publish"
    
    # Create an authorized http object
    http = AuthorizedHttp(credentials)
    
    content = {
        "url": url,
        "type": "URL_UPDATED"
    }
    
    # Send the request
    response = http.request(
        uri=endpoint,
        method="POST",
        body=json.dumps(content),
        headers={'Content-Type': 'application/json'}
    )
    
    print(f"Indexing request sent for {url}. Status: {response[0].status}")
    print(response[1].decode('utf-8'))

def main():
    recipes_path = os.path.join('src', 'data', 'recipes.json')
    if not os.path.exists(recipes_path):
        print(f"Error: {recipes_path} not found.")
        return

    with open(recipes_path, 'r', encoding='utf-8') as f:
        recipes = json.load(f)

    # List of new recipes (added after 2026-03-20)
    # Since I updated the sitemap, I'll just list the ones I know were new.
    # Or, I can check against a list of last modified.
    # For now, I'll just use the list I identified.
    
    new_ids = [
        'jangdokdok-pork', 'pork-kimchi-jjagleui', 'bakpo-galbi', 'gochujang-bulgogi',
        'spicy-squid-radish-soup', 'cold-cucumber-seaweed-soup', 'musaengchae',
        'jang_kalguksu', 'kkakdugi', 'spicy_sweet_potato', 'hwangtae_soup',
        'naengi_muchim', 'mannueng-chamgaejang', 'omija-cheong', 'ssuk-guk',
        'chogochujang'
    ]
    
    for rid in new_ids:
        url = f"https://www.kfood-platform.com/recipe/{rid}"
        request_indexing(url)

if __name__ == "__main__":
    main()
