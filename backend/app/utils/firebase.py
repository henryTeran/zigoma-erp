# backend/app/utils/firebase.py
import os
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials

# Charger les variables d'environnement
load_dotenv()

# Récupérer le chemin de la clé
key_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

# Initialiser Firebase avec la clé
if not firebase_admin._apps:
    cred = credentials.Certificate(key_path)
    firebase_admin.initialize_app(cred)
