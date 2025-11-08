# 🎬 Guide : Vidéos pour Applications (YouTube ou Locales)

## ✨ Nouveau : Support Automatique des Deux Formats !

Votre site supporte maintenant **automatiquement** :
- ✅ Vidéos YouTube/Vimeo (iframe)
- ✅ Vidéos locales MP4 (balise video HTML5)

Le code détecte automatiquement le type de vidéo en fonction de l'URL !

---

## 🎥 Option 1 : Vidéos YouTube (Recommandé)

### Avantages
- Pas de limite de taille
- Chargement optimisé et rapide
- Lecteur professionnel avec contrôles
- Qualité adaptative (240p à 4K)
- Analytics intégrés
- Sous-titres automatiques

### Comment faire

**1. Uploadez votre vidéo sur YouTube**
   - Allez sur https://studio.youtube.com
   - Cliquez sur "Créer" → "Importer une vidéo"
   - Vous pouvez la mettre en "Non répertoriée" (accessible uniquement par lien)

**2. Obtenez le lien d'intégration**
   - Sur votre vidéo, cliquez "Partager" → "Intégrer"
   - Copiez l'URL qui ressemble à : `https://www.youtube.com/embed/ABC123XYZ`

**3. Ajoutez dans `src/data/applications.js`**
```javascript
{
  id: 1,
  title: "Mon Application Dashboard",
  description: "Application de visualisation de données...",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  videoUrl: "https://www.youtube.com/embed/ABC123XYZ", // ← URL YouTube
  thumbnail: "/images/app1-thumb.jpg",
  demoLink: "https://demo.com",
  githubLink: "https://github.com/...",
  tags: ["Python", "Flask", "Data"]
}
```

**4. C'est tout !** Le site affichera automatiquement la vidéo YouTube.

---

## 💾 Option 2 : Vidéos Locales (MP4)

### Avantages
- Pas de dépendance externe
- Fonctionne hors ligne
- Contrôle total sur la vidéo
- Pas besoin de compte YouTube

### Inconvénients
- Augmente la taille du projet
- Limite GitHub : 100 MB par fichier
- Chargement plus lent
- Pas d'optimisation automatique

### Comment faire

**1. Préparez votre vidéo**

**Format recommandé :**
- **Extension** : `.mp4`
- **Codec** : H.264
- **Résolution** : 1280x720 (HD) ou 1920x1080 (Full HD)
- **Taille** : Maximum 50 MB (idéal : 20-30 MB)
- **Durée** : 2-5 minutes

**Compresser une vidéo :**
- En ligne : https://www.freeconvert.com/video-compressor
- Windows : HandBrake (gratuit) - https://handbrake.fr/
- Paramètres HandBrake : Preset "Fast 720p30" ou "Fast 1080p30"

**2. Placez la vidéo dans le dossier**
```
public/
  videos/
    app1-demo.mp4      ← Votre vidéo ici
    app2-demo.mp4
    dashboard-demo.mp4
```

**3. Nommez correctement les fichiers**
```
✅ BON :
app-dashboard.mp4
data-viz-demo.mp4
reporting-app.mp4

❌ MAUVAIS :
Vidéo 1.mp4
Mon App.MP4
Demo Application.mp4
```

**4. Ajoutez dans `src/data/applications.js`**
```javascript
{
  id: 1,
  title: "Mon Application Dashboard",
  description: "Application de visualisation...",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  videoUrl: "/videos/app-dashboard.mp4", // ← Chemin local
  thumbnail: "/images/app1-thumb.jpg",
  demoLink: "https://demo.com",
  githubLink: "https://github.com/...",
  tags: ["Python", "Flask", "Data"]
}
```

**5. C'est tout !** Le site détecte automatiquement que c'est une vidéo locale.

---

## 🔄 Comparaison Rapide

| Critère | YouTube | Vidéo Locale |
|---------|---------|--------------|
| **Taille limite** | Illimité | 50 MB recommandé |
| **Qualité** | Adaptative (auto) | Fixe |
| **Chargement** | ⚡ Très rapide | 🐢 Peut être lent |
| **Setup** | Compte YouTube | Aucun |
| **Confidentialité** | Non répertoriée OK | Totalement privée |
| **Offline** | ❌ Non | ✅ Oui |
| **Analytics** | ✅ Oui | ❌ Non |
| **Recommandé pour** | Démos publiques | Prototypes internes |

---

## 📝 Exemples Complets

### Exemple 1 : Application avec YouTube
```javascript
{
  id: 1,
  title: "Dashboard Analytics Pro",
  description: "Tableau de bord interactif avec visualisations en temps réel",
  features: [
    "Connexion multiple sources de données",
    "Graphiques interactifs D3.js",
    "Export PDF automatique"
  ],
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  demoLink: "https://demo.skkanalytics.com",
  githubLink: "https://github.com/kkedji/dashboard-pro",
  tags: ["React", "Python", "PostgreSQL"]
}
```

### Exemple 2 : Application avec Vidéo Locale
```javascript
{
  id: 2,
  title: "Reporting Automatisé",
  description: "Génération automatique de rapports Excel et PDF",
  features: [
    "Templates personnalisables",
    "Planification automatique",
    "Envoi par email"
  ],
  videoUrl: "/videos/reporting-demo.mp4", // ← Vidéo locale
  thumbnail: "/images/reporting-thumb.jpg",
  demoLink: "#",
  githubLink: "https://github.com/kkedji/auto-reporting",
  tags: ["Python", "Pandas", "Openpyxl"]
}
```

### Exemple 3 : Mixte (3 apps différentes)
```javascript
export const applicationsData = [
  {
    id: 1,
    title: "App avec YouTube",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    // ...
  },
  {
    id: 2,
    title: "App avec Vidéo Locale",
    videoUrl: "/videos/app2-demo.mp4",
    // ...
  },
  {
    id: 3,
    title: "App avec Vimeo",
    videoUrl: "https://player.vimeo.com/video/123456789",
    // ...
  }
];
```

---

## 🛠️ Outils pour Créer vos Vidéos

### Enregistrement d'écran (gratuit)
- **Windows** : Xbox Game Bar (Win + G) - Intégré dans Windows 10/11
- **OBS Studio** : https://obsproject.com/ - Professionnel et gratuit
- **ShareX** : https://getsharex.com/ - Léger et rapide

### Montage Vidéo
- **Gratuit** : 
  - DaVinci Resolve : https://www.blackmagicdesign.com/products/davinciresolve
  - Shotcut : https://shotcut.org/
- **Payant** :
  - Adobe Premiere Pro
  - Camtasia (spécialisé pour tutoriels)

### Compression Vidéo
- **En ligne** : https://www.freeconvert.com/video-compressor
- **Application** : HandBrake - https://handbrake.fr/
- **Paramètres recommandés** :
  - Format : MP4
  - Codec : H.264
  - Bitrate vidéo : 2500 kbps (HD) ou 5000 kbps (Full HD)
  - Bitrate audio : 128 kbps

---

## ⚙️ Configuration Technique (déjà fait pour vous !)

Le fichier `src/pages/Applications.jsx` détecte automatiquement le type de vidéo :

```jsx
{selectedApp.videoUrl.includes('youtube.com') || 
 selectedApp.videoUrl.includes('vimeo.com') ? (
  // Affiche iframe pour YouTube/Vimeo
  <iframe src={selectedApp.videoUrl} ... />
) : (
  // Affiche balise video pour fichiers locaux
  <video controls src={selectedApp.videoUrl} ... />
)}
```

**Vous n'avez rien à faire** - ça marche automatiquement ! 🎉

---

## 📊 Structure des Fichiers

```
portfolio-site/
├── public/
│   ├── images/                  # Images (thumbnails)
│   │   └── app-thumbs/
│   │       ├── app1-thumb.jpg
│   │       ├── app2-thumb.jpg
│   │       └── app3-thumb.jpg
│   └── videos/                  # Vidéos locales (MP4)
│       ├── app1-demo.mp4
│       ├── app2-demo.mp4
│       └── app3-demo.mp4
└── src/
    └── data/
        └── applications.js      # Configuration des apps
```

---

## ✅ Checklist

Avant de déployer :

### Pour vidéos YouTube
- [ ] Vidéo uploadée sur YouTube
- [ ] Visibilité définie (Publique ou Non répertoriée)
- [ ] Lien d'intégration copié (format `/embed/`)
- [ ] Ajouté dans `applications.js`
- [ ] Testé localement avec `npm run dev`

### Pour vidéos locales
- [ ] Vidéo compressée < 50 MB
- [ ] Format MP4 H.264
- [ ] Placée dans `public/videos/`
- [ ] Nom de fichier sans espaces
- [ ] Chemin ajouté dans `applications.js`
- [ ] Testé localement avec `npm run dev`
- [ ] Vérifier que ça charge rapidement

---

## 🚀 Déploiement

### Avec vidéos YouTube
```powershell
git add src/data/applications.js
git commit -m "feat: Add application videos (YouTube)"
git push
```

### Avec vidéos locales
```powershell
git add public/videos/
git add src/data/applications.js
git commit -m "feat: Add application videos (local MP4)"
git push
```

**Note** : GitHub a une limite de 100 MB par fichier. Si votre vidéo est plus grande, utilisez YouTube !

---

## 💡 Conseils Pro

1. **Pour démos publiques** → YouTube
   - Meilleure performance
   - Accessible partout
   - SEO bonus

2. **Pour prototypes internes** → Vidéos locales
   - Contrôle total
   - Pas de compte externe
   - Fonctionne offline

3. **Durée idéale** : 2-3 minutes
   - Introduction : 10 secondes
   - Démo : 2 minutes
   - Conclusion : 10 secondes

4. **Qualité de capture** :
   - Enregistrez en 1080p
   - Compressez pour le web
   - Gardez l'original

---

## ❓ FAQ

**Q: Puis-je mélanger YouTube et vidéos locales ?**
R: Oui ! Chaque application peut avoir son propre type de vidéo.

**Q: Quelle est la limite de taille pour les vidéos locales ?**
R: GitHub limite à 100 MB par fichier. Recommandé : 20-50 MB pour des chargements rapides.

**Q: Les vidéos Vimeo fonctionnent-elles ?**
R: Oui ! Le code détecte automatiquement Vimeo aussi.

**Q: Comment faire une vidéo de moins de 50 MB ?**
R: Utilisez HandBrake avec le preset "Fast 720p30" et limitez la durée à 3-5 minutes.

**Q: La vidéo ne se charge pas sur Netlify ?**
R: Vérifiez que le fichier est bien dans `public/videos/` et que le chemin commence par `/`

---

## 🎉 C'est Prêt !

Votre site supporte maintenant :
- ✅ Vidéos YouTube (iframe)
- ✅ Vidéos Vimeo (iframe)
- ✅ Vidéos locales MP4 (balise video)
- ✅ Détection automatique du format

Ajoutez simplement l'URL dans `applications.js` et le site fait le reste ! 🚀
