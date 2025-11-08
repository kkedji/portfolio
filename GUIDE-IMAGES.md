# 🖼️ Guide pour Personnaliser les Images

## 📸 Ajouter votre photo de profil

Votre photo `profile.jpg` est déjà dans `public/images/` et configurée correctement !

Si elle ne s'affiche pas :

### Vérification locale
1. Testez avec `npm run dev`
2. La photo devrait apparaître sur la page "À propos"
3. Si elle n'apparaît pas, vérifiez que le fichier est bien nommé exactement `profile.jpg` (pas `Profile.jpg` ou autre)

### Format recommandé
- **Format** : JPG ou PNG
- **Dimensions** : 400x400 pixels minimum (carré)
- **Taille** : Moins de 500 KB
- **Nom** : `profile.jpg`

## 🎨 Personnaliser les images des projets

### Option 1 : Utiliser des captures d'écran de vos rapports

1. **Créez une capture d'écran** de votre rapport Power BI, notebook, etc.
2. **Placez l'image** dans `public/images/projects/`
3. **Nommez le fichier** : `fifa-worldcup.jpg`, `climate-africa.jpg`, etc.
4. **Modifiez** `src/data/projects.js` :

```javascript
{
  id: 6,
  title: "FIFA World Cup History",
  image: "/images/projects/fifa-worldcup.jpg", // ← Votre image locale
  // ... reste
}
```

### Option 2 : Héberger sur un service externe

#### Imgur (Gratuit et simple)
1. Allez sur https://imgur.com
2. Cliquez sur "New post"
3. Uploadez votre image
4. Faites clic droit → "Copier l'adresse de l'image"
5. Utilisez cette URL dans `projects.js`

#### Cloudinary (Professionnel)
1. Créez un compte sur https://cloudinary.com
2. Uploadez vos images
3. Copiez l'URL publique
4. Utilisez dans `projects.js`

### Option 3 : Prendre des captures d'écran de vos rapports Power BI

Pour avoir de vraies images de vos projets :

1. **Ouvrez votre rapport Power BI** en plein écran
2. **Windows** : Appuyez sur `Windows + Shift + S` pour capturer
3. **Sauvegardez** l'image : `Ctrl + V` dans Paint puis "Enregistrer sous"
4. **Redimensionnez** si besoin à 800x600 pixels
5. **Placez** dans `public/images/projects/`
6. **Mettez à jour** le chemin dans `projects.js`

## 📁 Structure des dossiers images

```
public/
  images/
    profile.jpg              ← Votre photo de profil
    projects/                ← Créez ce dossier pour vos projets
      fifa-worldcup.jpg
      climate-africa.jpg
      supply-chain.jpg
      togo-elections.jpg
      ... etc
```

## 🔧 Exemple complet de modification

### Avant (URL Unsplash - parfois lente)
```javascript
{
  id: 6,
  title: "FIFA World Cup History",
  image: "https://images.unsplash.com/photo-xxx",
  // ...
}
```

### Après (Image locale - rapide et fiable)
```javascript
{
  id: 6,
  title: "FIFA World Cup History",
  image: "/images/projects/fifa-worldcup.jpg",
  // ...
}
```

## ⚡ Avantages des images locales

✅ Chargement plus rapide
✅ Pas de dépendance externe
✅ Images exactement comme vous voulez
✅ Pas de problème de CORS ou API
✅ Contrôle total sur la qualité

## 🎯 Captures d'écran recommandées

Pour chaque projet, capturez :
- **Power BI** : Une vue de votre dashboard principal
- **Python** : Un graphique ou résultat clé du notebook
- **SQL** : Un schéma de données ou résultat de requête

### Dimensions optimales
- Largeur : 800px
- Hauteur : 600px
- Ratio : 4:3 ou 16:9
- Format : JPG (plus léger) ou PNG (meilleure qualité)

## 🚀 Après modification

Une fois vos images ajoutées :

```powershell
# Tester localement
npm run dev

# Si tout est OK, pousser sur GitHub
git add public/images/
git add src/data/projects.js
git add src/pages/About.jsx
git commit -m "feat: Add custom images for projects and profile"
git push
```

Netlify redéploiera automatiquement avec vos nouvelles images !

## ❓ Dépannage

### L'image ne s'affiche pas

**Vérifiez** :
1. Le nom du fichier correspond exactement (majuscules/minuscules)
2. Le chemin commence par `/` : `/images/profile.jpg`
3. Le fichier est bien dans `public/images/`
4. Videz le cache du navigateur (Ctrl + F5)

### L'image est trop grande

**Redimensionnez** avec :
- Windows : Paint ou Photos
- En ligne : https://www.iloveimg.com/resize-image
- Conseil : 800x600 pixels maximum

### L'image est floue

**Assurez-vous** que :
- La résolution est suffisante (minimum 800x600)
- Le format est JPG avec qualité 80-90%
- Pas de sur-compression

## 💡 Astuce Pro

Pour avoir des images cohérentes :
1. Utilisez le même ratio pour tous les projets (16:9)
2. Même style de capture (fond clair/foncé)
3. Ajoutez un logo ou watermark si vous voulez

---

**Important** : Les images dans `public/` seront copiées telles quelles lors du build. Elles seront accessibles directement via `/images/nom-fichier.jpg` sur votre site.
