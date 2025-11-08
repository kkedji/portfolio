# 🎥 Guide pour ajouter des vidéos à vos applications

Ce guide vous explique comment ajouter des vidéos explicatives pour vos applications.

## 📹 Option 1 : Vidéos YouTube (Recommandé)

### Étape 1 : Uploader votre vidéo sur YouTube

1. Allez sur https://studio.youtube.com
2. Cliquez sur "Créer" → "Importer une vidéo"
3. Uploadez votre vidéo explicative
4. Vous pouvez la mettre en "Non répertoriée" si vous voulez qu'elle soit accessible uniquement via le lien

### Étape 2 : Obtenir le lien d'intégration

1. Allez sur votre vidéo YouTube
2. Cliquez sur le bouton "Partager"
3. Cliquez sur "Intégrer"
4. Copiez le lien qui ressemble à : `https://www.youtube.com/embed/ABC123XYZ`

### Étape 3 : Ajouter le lien dans votre application

Ouvrez le fichier `src/data/applications.js` et ajoutez/modifiez votre application :

```javascript
{
  id: 1,
  title: "Mon Application de Dashboard",
  description: "Application permettant de visualiser des KPIs en temps réel...",
  features: [
    "Visualisation de données en temps réel",
    "Tableaux de bord interactifs",
    "Export de rapports PDF"
  ],
  videoUrl: "https://www.youtube.com/embed/ABC123XYZ", // ← Collez votre lien ici
  thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  demoLink: "https://mon-app-demo.com", // Si vous avez une démo en ligne
  githubLink: "https://github.com/votre-username/votre-repo", // Votre code GitHub
  tags: ["Python", "Flask", "Plotly", "Data Viz"]
}
```

## 🎬 Option 2 : Vidéos Vimeo

Si vous préférez Vimeo :

1. Uploadez votre vidéo sur Vimeo
2. Cliquez sur "Partager"
3. Copiez le lien d'intégration qui ressemble à : `https://player.vimeo.com/video/123456789`
4. Utilisez ce lien dans `videoUrl`

## 💾 Option 3 : Vidéos hébergées localement

Si vous voulez héberger vos vidéos directement sur votre site :

### Étape 1 : Ajouter la vidéo au projet

1. Placez votre fichier vidéo (MP4 recommandé) dans le dossier `public/videos/`
2. Par exemple : `public/videos/app-demo.mp4`

### Étape 2 : Modifier le composant Applications

Ouvrez `src/pages/Applications.jsx` et modifiez la section de la modal vidéo :

```jsx
{/* Remplacez l'iframe par : */}
<video 
  controls 
  className="w-full rounded-lg"
  poster={selectedApp.thumbnail}
>
  <source src={selectedApp.videoUrl} type="video/mp4" />
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>
```

### Étape 3 : Ajouter le chemin dans applications.js

```javascript
{
  id: 1,
  title: "Mon Application",
  videoUrl: "/videos/app-demo.mp4", // Chemin vers votre vidéo locale
  // ... reste de la configuration
}
```

## 🖼️ Miniatures de vidéos

Pour les miniatures (thumbnails), vous pouvez :

### Option 1 : Utiliser une image de votre application
Hébergez une capture d'écran sur un service comme :
- Imgur : https://imgur.com
- Cloudinary : https://cloudinary.com
- Ou mettez-la dans `public/images/`

### Option 2 : Utiliser Unsplash (images gratuites)
```javascript
thumbnail: "https://images.unsplash.com/photo-XXXXXXXXX?w=800&auto=format&fit=crop"
```

## 📐 Dimensions recommandées

- **Vidéo** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Miniature** : 1200x630 pixels (ratio 16:9)
- **Format vidéo** : MP4 (H.264)
- **Taille** : Moins de 100 MB pour YouTube/Vimeo

## ✨ Conseils pour une bonne vidéo explicative

1. **Durée** : 2-5 minutes maximum
2. **Structure** :
   - Introduction (10 sec) : Que fait l'application ?
   - Démo (2-3 min) : Montrer les fonctionnalités principales
   - Conclusion (10 sec) : Bénéfices clés

3. **Audio** : Ajoutez une narration ou de la musique de fond
4. **Sous-titres** : Recommandés pour l'accessibilité

## 🎨 Exemple complet d'application avec vidéo

```javascript
{
  id: 1,
  title: "Dashboard Analytics Pro",
  description: "Application web permettant de visualiser et analyser les KPIs de votre entreprise en temps réel. Connectez vos sources de données et obtenez des insights instantanés.",
  features: [
    "Connexion à plusieurs sources de données (SQL, Excel, API)",
    "Tableaux de bord interactifs et personnalisables",
    "Alertes automatiques sur les KPIs critiques",
    "Export de rapports en PDF et PowerPoint",
    "Collaboration en équipe en temps réel"
  ],
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
  demoLink: "https://dashboard-demo.skkanalytics.com",
  githubLink: "https://github.com/kkedji/dashboard-analytics",
  tags: ["Python", "Flask", "React", "PostgreSQL", "Chart.js"]
}
```

## 🔄 Mise à jour après ajout de vidéos

Après avoir modifié `applications.js` :

1. Sauvegardez le fichier
2. Le site se rechargera automatiquement si le serveur dev tourne
3. Vérifiez que la vidéo s'affiche correctement

## 📱 Test sur différents appareils

Testez vos vidéos sur :
- Desktop (Chrome, Firefox, Edge)
- Mobile (iOS Safari, Android Chrome)
- Tablette

## ⚠️ Notes importantes

- Les vidéos YouTube sont gratuites mais nécessitent une connexion internet
- Les vidéos locales augmentent la taille de votre site
- Optimisez vos vidéos avant de les uploader (compressez-les)
- Ajoutez toujours une miniature attrayante

---

Besoin d'aide pour créer vos vidéos ? Outils recommandés :
- **Enregistrement d'écran** : OBS Studio (gratuit)
- **Montage** : DaVinci Resolve (gratuit) ou Adobe Premiere
- **Compression** : HandBrake (gratuit)
