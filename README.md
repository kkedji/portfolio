# SKK Analytics Portfolio

Site professionnel pour présenter les solutions SKK Analytics en transformation digitale, automatisation, Business Intelligence et applications sur mesure.

## 🚀 Technologies utilisées

- **React** - Framework JavaScript pour l'interface utilisateur
- **Vite** - Build tool moderne et rapide
- **React Router** - Navigation entre les pages
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Bibliothèque d'icônes modernes

## 📋 Fonctionnalités

- ✅ Page d'accueil avec présentation des services
- ✅ Section Applications avec support vidéo
- ✅ Galerie de projets avec filtres par catégorie (Power BI, Python, SQL)
- ✅ Page À propos avec parcours et compétences
- ✅ Design responsive et moderne
- ✅ Navigation fluide entre les pages

## 🛠️ Installation

1. Assurez-vous d'avoir Node.js installé (version 16 ou supérieure)

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## 📦 Build pour la production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 🎨 Personnalisation

### Modifier vos projets
Éditez le fichier `src/data/projects.js` pour ajouter/modifier vos projets.

### Modifier vos applications
Éditez le fichier `src/data/applications.js` pour ajouter vos applications et liens vidéo.

### Modifier les services
Éditez le fichier `src/data/services.js` pour personnaliser vos services.

### Ajouter des vidéos
Dans `src/data/applications.js`, ajoutez l'URL de votre vidéo YouTube dans le champ `videoUrl`:
```javascript
videoUrl: "https://www.youtube.com/embed/VOTRE_VIDEO_ID"
```

## 📱 Déploiement sur Netlify

### Déploiement automatique depuis GitHub

1. **Connectez votre dépôt GitHub à Netlify** :
   - Allez sur https://app.netlify.com
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez "GitHub" et autorisez Netlify
   - Sélectionnez votre repository : `kkedji/portfolio`

2. **Configuration du build** (détection automatique grâce à `netlify.toml`) :
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Cliquez sur "Deploy site"

3. **Votre site sera en ligne en quelques minutes !**
   - Netlify vous donnera une URL (ex: `random-name-123.netlify.app`)
   - Vous pouvez personnaliser ce nom dans les settings

### Déploiement manuel (alternative)

Si vous préférez déployer manuellement :
```bash
npm run build
```
Puis glissez-déposez le dossier `dist/` sur https://app.netlify.com/drop

## 📄 Structure du projet

```
portfolio-site/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Applications.jsx
│   │   ├── Projects.jsx
│   │   └── About.jsx
│   ├── data/           # Données des projets et services
│   │   ├── projects.js
│   │   ├── applications.js
│   │   └── services.js
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 📞 Contact

- LinkedIn: [Sename Kudjo Kedji](https://www.linkedin.com/in/sename-kudjo-kedji-bb849035/)
- Twitter: [@senameskk](https://twitter.com/senameskk)
- GitHub: [kkedji](https://github.com/kkedji)

---

© 2024 SKK Analytics. Tous droits réservés.
