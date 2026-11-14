# 🏠 Kasa

> Trouvez le logement qui vous ressemble, partout en France.

Kasa est la refonte en **React** d'un site de location de logements entre particuliers. Ce projet a été réalisé dans le cadre de la formation **Développeur Web** d'OpenClassrooms (projet 6).

---

## ✨ Ce que le site propose

**🏡 Accueil**
Une bannière d'accueil et la galerie de tous les logements, présentés sous forme de cartes cliquables.

**📋 À propos**
Quatre sections dépliables présentant les valeurs de Kasa : Fiabilité, Respect, Service et Sécurité.

**🛋️ Page Logement**

- Un carrousel de photos avec flèches de navigation et numérotation
- Le titre, la localisation et les tags du logement
- La photo et le nom de l'hôte
- La note affichée en étoiles
- Deux sections dépliables : Description et Équipements

**🚫 Page 404**
Affichée pour toute adresse inconnue, ou pour un identifiant de logement qui n'existe pas.

---

## 🛠️ Technologies

| Outil | Rôle |
|---|---|
| **React 19** | Création de l'interface avec des composants réutilisables |
| **Vite** | Serveur de développement et outil de build |
| **React Router** | Navigation entre les pages |
| **Sass (SCSS)** | Styles organisés en un fichier par composant et par page |
| **JavaScript (ES6+)** | Logique de l'application |

---

## 🚀 Lancer le projet

**Prérequis :** [Node.js](https://nodejs.org) (version 18 ou supérieure) et npm.

```bash
# 1. Récupérer le projet
git clone https://github.com/Moldu77/KASA.git

# 2. Entrer dans le dossier
cd KASA

# 3. Installer les dépendances
npm install

# 4. Lancer le site
npm run dev
```

Le site est alors disponible sur **http://localhost:5173**.

### Autres commandes

| Commande | Effet |
|---|---|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise la version de production |

---

## 🗂️ Organisation du code

```
src/
├── assets/        images et icônes
├── components/    composants réutilisables
│                  (Header, Footer, Banner, Collapse, SlideShow, Rating...)
├── data/          logements.json
├── pages/         Accueil, À propos, Logement, 404
├── router/        configuration des routes
└── styles/        Sass : un fichier par composant et par page,
                   assemblés dans main.scss
```

### Routes

| Adresse | Page |
|---|---|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/logement/:id` | Détail d'un logement |
| toute autre adresse | Page 404 |

---

## 💡 Ce que ce projet m'a appris

- Construire une application avec des **composants React réutilisables** (le composant Collapse sert sur deux pages)
- Gérer l'**état** avec `useState` (carrousel, sections dépliables)
- Mettre en place un **routage dynamique** avec des paramètres d'adresse
- Afficher des listes de données avec `map` et `key`
- Structurer ses styles avec **Sass** (imbrication, partiels, variables)
- Soigner l'**accessibilité** : textes alternatifs, `aria-label`, `aria-expanded`

---

## 👤 Auteur

**Maxym**, en reconversion vers le développement web.

🔗 [Mon profil GitHub](https://github.com/Moldu77)