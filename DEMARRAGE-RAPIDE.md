# 🎯 Guide Rapide - SKK Analytics Portfolio

## 🚀 Démarrage Rapide

### 1️⃣ Installer les dépendances

```powershell
cd "c:\Users\skkse\OneDrive\Bureau\SKK Analytics\MES APPLICATIONS\skkanalytics\portfolio-site"
npm install
```

### 2️⃣ Lancer le site localement

```powershell
npm run dev
```

Ouvrez http://localhost:5173 dans votre navigateur

### 3️⃣ Pousser sur GitHub

```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/kkedji/portfolio.git
git branch -M main
git push -u origin main
```

### 4️⃣ Déployer sur Netlify

1. Allez sur https://app.netlify.com
2. "Add new site" → "Import from GitHub"
3. Sélectionnez `kkedji/portfolio`
4. Deploy !

## 📝 Personnalisation Rapide

### Ajouter une application avec vidéo

Éditez `src/data/applications.js` :

```javascript
{
  id: 1,
  title: "Nom de votre app",
  description: "Description...",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  features: ["Feature 1", "Feature 2"],
  tags: ["Python", "Flask"]
}
```

### Ajouter un projet

Éditez `src/data/projects.js` :

```javascript
{
  id: 15,
  title: "Mon nouveau projet",
  category: "Power BI", // ou "Python" ou "SQL"
  description: "Description du projet...",
  image: "URL_IMAGE",
  link: "URL_PROJET",
  tags: ["Tag1", "Tag2"]
}
```

### Modifier vos informations

- **Services** : `src/data/services.js`
- **Compétences** : `src/data/services.js`
- **Liens sociaux** : `src/components/Footer.jsx`

## 📁 Fichiers Importants

```
portfolio-site/
├── src/
│   ├── data/
│   │   ├── applications.js  ← Vos applications
│   │   ├── projects.js      ← Vos projets (déjà rempli !)
│   │   └── services.js      ← Vos services
│   ├── pages/
│   │   ├── Home.jsx         ← Page d'accueil
│   │   ├── Applications.jsx ← Page applications
│   │   ├── Projects.jsx     ← Page projets
│   │   └── About.jsx        ← Page à propos
│   └── components/
│       ├── Header.jsx       ← Navigation
│       └── Footer.jsx       ← Pied de page
├── netlify.toml            ← Config Netlify
└── package.json            ← Dépendances
```

## 🎨 Changer les couleurs

Éditez `tailwind.config.js` :

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Couleur principale
    600: '#0284c7',
    // ...
  }
}
```

## 📋 Commandes Utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lancer en local |
| `npm run build` | Construire pour production |
| `npm run preview` | Prévisualiser le build |
| `git status` | Voir les fichiers modifiés |
| `git add .` | Ajouter tous les changements |
| `git commit -m "message"` | Créer un commit |
| `git push` | Pousser sur GitHub |

## 📚 Documentation Complète

- **Installation détaillée** : `INSTALLATION.md`
- **Ajouter des vidéos** : `GUIDE-VIDEOS.md`
- **Déploiement Netlify** : `DEPLOIEMENT-NETLIFY.md`
- **README complet** : `README.md`

## 🆘 Support

- Documentation React : https://react.dev
- Documentation Vite : https://vitejs.dev
- Documentation Tailwind : https://tailwindcss.com
- Documentation Netlify : https://docs.netlify.com

## 🎉 Votre portfolio contient déjà :

✅ Tous vos projets depuis votre Google Site
✅ 14 projets (Power BI, Python, SQL)
✅ Section Applications avec support vidéo
✅ Page À propos professionnelle
✅ Design responsive et moderne
✅ Navigation fluide
✅ Prêt pour Netlify

---

**Prochaines étapes** :
1. Installer les dépendances : `npm install`
2. Ajouter vos vidéos d'applications dans `src/data/applications.js`
3. Tester localement : `npm run dev`
4. Pousser sur GitHub
5. Déployer sur Netlify

Bon développement ! 🚀
