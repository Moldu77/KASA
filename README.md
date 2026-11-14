Kasa
Refonte en React du site de location de logements Kasa, réalisée dans le cadre de la formation Développeur Web d'OpenClassrooms (projet 6).
Le site permet de parcourir une liste de logements, d'en consulter le détail (photos, description, équipements, hôte, note) et de découvrir la page À propos de l'entreprise.
Fonctionnalités
• Page d'accueil avec une bannière et la galerie des logements sous forme de cartes
• Page À propos avec des sections dépliables (Fiabilité, Respect, Service, Sécurité)
• Page Logement avec :
◦ un carrousel de photos (navigation précédent/suivant, numérotation, flèches masquées s'il n'y a qu'une photo)
◦ le titre, la localisation et les tags
◦ le nom et la photo de l'hôte
◦ la note affichée en étoiles
◦ deux sections dépliables : Description et Équipements
• Page 404 pour toute adresse inconnue ou identifiant de logement inexistant
• Design responsive (ordinateur et mobile)
Technologies utilisées
• React 19
• Vite
• React Router
• Sass (SCSS)
• JavaScript (ES6+)
Prérequis
• Node.js (version 18 ou supérieure)
• npm
Installation

1.  Cloner le dépôt :
    git clone https://github.com/Moldu77/KASA.git
2.  Se placer dans le dossier du projet :
    cd KASA
3.  Installer les dépendances :
    npm install
4.  Lancer le serveur de développement :
    npm run dev
    Le site est alors accessible à l'adresse indiquée dans le terminal (par défaut http://localhost:5173).
    Scripts disponibles
    • npm run dev : lance le serveur de développement
    • npm run build : génère la version de production dans le dossier dist
    • npm run preview : prévisualise la version de production
    Structure du projet
    src/
    ├── assets/ images et icônes
    ├── components/ composants réutilisables (Header, Footer, Banner, Collapse, SlideShow, Rating...)
    ├── data/ fichier logements.json
    ├── pages/ pages du site (Accueil, À propos, Logement, 404)
    ├── router/ configuration des routes
    └── styles/ fichiers Sass (un fichier par composant et par page)
    Routes
    • / : accueil
    • /a-propos : page À propos
    • /logement/:id : détail d'un logement
    • toute autre adresse : page 404
    Auteur
    Maxym, projet réalisé dans le cadre de la formation Développeur Web d'OpenClassrooms.
