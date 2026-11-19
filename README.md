# 🏠 Kasa

> Trouvez le logement qui vous ressemble, partout en France.

Kasa est la refonte en **React** d'un site de location de logements entre particuliers. Ce projet a été réalisé dans le cadre de ma formation **Développeur Web** d'OpenClassrooms (projet 6).

---

## ✨ Ce que le site propose

**🏡 Accueil**
Une bannière d'accueil et la galerie de tous les logements, présentés sous forme de cartes cliquables.

**📋 À propos**
Quatre sections dépliables présentant les valeurs de Kasa : Fiabilité, Respect, Service et Sécurité.

**🛋️ Page Logement**

- Un carrousel de photos avec flèches de navigation et compteur (ex. `2/5`) ; la flèche gauche est masquée sur la première photo et la flèche droite sur la dernière
- Le titre, la localisation et les tags du logement
- La photo et le nom de l'hôte
- La note affichée en étoiles
- Deux sections dépliables (avec animation d'ouverture) : Description et Équipements

**🚫 Page 404**
Affichée pour toute adresse inconnue. Un identifiant de logement qui n'existe pas redirige automatiquement vers `/404`.

**📱 Responsive**
Le site s'adapte aux écrans mobiles (point de rupture à 768 px, via un mixin Sass `mobile`).

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
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run start:sass` | *(optionnel)* Compile le Sass dans `src/css/style.css`, pour lire le CSS généré |

> Le Sass n'a pas besoin d'être compilé à part : `main.scss` est importé dans `main.jsx`, et Vite le transforme en CSS automatiquement, en développement comme au build.

---

## 🗂️ Organisation du code

```
KASA/
├── index.html     point d'entrée de l'application (à la racine, comme l'exige Vite)
├── public/        fichiers copiés tels quels (favicon iconKasa.svg)
├── dist/          version de production, créée par npm run build
│                  (non versionnée, listée dans .gitignore)
└── src/           code source
```

```
src/
├── assets/        images et icônes
├── components/    composants réutilisables
│                  (Layout, Header, Footer, Banner, CardLogement,
│                   Collapse, SlideShow, Rating)
├── data/          logements.json
├── pages/         Accueil, APropos, Logement, Page404
├── router/        configuration des routes (routes.jsx)
├── main.jsx       point de montage React, importe main.scss
└── styles/        Sass, assemblés dans main.scss avec @use
    ├── components/  un fichier par composant (+ _Host.scss pour le bloc hôte)
    ├── pages/       un fichier par page
    └── variables/   _Variables.scss (couleurs, ombres, arrondis)
                     et _Breakpoints.scss (mixin mobile)
```

### Conventions de nommage

- Les composants et les pages sont nommés en **PascalCase** (`CardLogement.jsx`, `SlideShow.jsx`, `APropos.jsx`…).
- Chaque fichier de style partiel porte le même nom que son composant ou sa page, précédé d'un `_` (`CardLogement.jsx` → `styles/components/_CardLogement.scss`).
- Les classes CSS restent en **kebab-case** (`title-host`, `host-picture`…).

### Routes

| Adresse | Page |
|---|---|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/logement/:id` | Détail d'un logement |
| toute autre adresse | Page 404 |

Toutes les pages partagent le même `Layout` (Header + Footer).

---

## 💡 Ce que ce projet m'a appris

- Construire une application avec des **composants React réutilisables** (le composant Collapse sert sur deux pages)
- Gérer l'**état** avec `useState` (carrousel, sections dépliables)
- Mettre en place un **routage dynamique** avec des paramètres d'adresse, et rediriger avec `<Navigate>` quand la donnée n'existe pas
- Afficher des listes de données avec `map` et `key`
- Structurer ses styles avec **Sass** (imbrication, partiels, variables, mixins pour le responsive)
- Ajouter des **transitions CSS** pour animer l'interface (sections dépliables, boutons du carrousel)
- Comprendre le rôle de **Vite** : point d'entrée `index.html`, dossier `public/`, compilation du Sass et dossier de production `dist/`
- Soigner l'**accessibilité** : textes alternatifs, `aria-label`, `aria-expanded`

---

## 👤 Auteur

**Maxym**, en reconversion vers le développement web.

🔗 [Mon profil GitHub](https://github.com/Moldu77)