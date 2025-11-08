# 📸 Guide Complet : Ajouter des Images pour Vos Projets

## 🎯 Ce que j'ai fait pour vous

J'ai créé le dossier `public/images/projects/` et ajouté des images SVG temporaires pour :
- ⚽ FIFA World Cup History → `fifa.svg`
- 🌍 Climate Change → `climate.svg`  
- 🚢 Titanic Dataset → `titanic.svg`

**Ces images sont temporaires** - Remplacez-les par des captures d'écran de vos vrais projets !

## 📋 Étape par Étape : Ajouter Vos Propres Images

### Étape 1 : Prendre des Captures d'Écran

#### Pour un rapport Power BI :

1. **Ouvrez votre rapport** sur app.powerbi.com ou app.fabric.microsoft.com
2. **Mode plein écran** : Cliquez sur l'icône plein écran
3. **Capture d'écran** :
   - Windows : `Windows + Shift + S` (Outil Capture)
   - Ou : `Impr Écran` puis collez dans Paint
4. **Sauvegardez** l'image avec un nom descriptif

#### Pour un Notebook Python/Colab :

1. **Ouvrez votre notebook**
2. **Trouvez un graphique ou résultat intéressant**
3. **Capturez l'écran** avec `Windows + Shift + S`
4. **Sauvegardez** avec un nom clair

### Étape 2 : Préparer Vos Images

#### Dimensions recommandées :
- **Largeur** : 800 pixels
- **Hauteur** : 600 pixels (ratio 4:3)
- **Format** : JPG (léger) ou PNG (qualité)
- **Taille** : Moins de 500 KB

#### Redimensionner avec Paint (Windows) :

1. Ouvrez l'image dans Paint
2. Menu "Accueil" → "Redimensionner"
3. Décochez "Conserver les proportions"
4. Entrez : Largeur = 800, Hauteur = 600
5. Enregistrez au format JPG

#### Ou utilisez un outil en ligne :
- https://www.iloveimg.com/resize-image
- https://imageresizer.com/

### Étape 3 : Nommer Vos Fichiers

Utilisez des noms **clairs et en minuscules sans espaces** :

```
✅ BON :
fifa-worldcup.jpg
climate-africa.jpg
togo-elections.jpg
supply-chain.jpg
titanic-eda.jpg

❌ MAUVAIS :
Image 1.jpg
Projet FIFA.PNG
Mon Rapport.jpg
```

### Étape 4 : Placer les Images dans le Dossier

1. Copiez vos images
2. Collez dans : `public/images/projects/`

**Structure finale** :
```
public/
  images/
    profile.jpg              ← Votre photo
    projects/
      fifa-worldcup.jpg      ← Image FIFA
      climate-africa.jpg     ← Image Climate
      togo-elections.jpg     ← Image Elections
      supply-chain.jpg       ← Image Supply Chain
      titanic-eda.jpg        ← Image Titanic
      ... (autres projets)
```

### Étape 5 : Mettre à Jour projects.js

Ouvrez `src/data/projects.js` et modifiez les chemins :

**Exemple pour FIFA :**
```javascript
{
  id: 6,
  title: "FIFA World Cup History",
  category: "Power BI",
  description: "Visualisation des insights clés...",
  image: "/images/projects/fifa-worldcup.jpg", // ← Changez ici
  link: "https://app.powerbi.com/view?r=...",
  tags: ["Power BI", "Sports Analytics", "FIFA"]
}
```

**Exemple pour Climate Change :**
```javascript
{
  id: 8,
  title: "Climate Change in Sub-Saharan Africa",
  image: "/images/projects/climate-africa.jpg", // ← Changez ici
  // ... reste
}
```

## 📝 Liste de Tous Vos Projets à Illustrer

Voici les 14 projets - créez une image pour chacun :

### Power BI (8 projets)

| ID | Nom du Projet | Nom de fichier suggéré |
|----|---------------|------------------------|
| 1 | Elections Législatives Togo | `togo-elections.jpg` |
| 2 | Supply Chain Activity | `supply-chain.jpg` |
| 3 | App Store Games | `app-store-games.jpg` |
| 4 | Nigeria Agricultural Export | `nigeria-export.jpg` |
| 5 | Financial Analysis Fitness | `fitness-finance.jpg` |
| 6 | FIFA World Cup History | `fifa-worldcup.jpg` |
| 7 | Togo Economic Indicators | `togo-economy.jpg` |
| 8 | Climate Change Africa | `climate-africa.jpg` |

### Python (4 projets)

| ID | Nom du Projet | Nom de fichier suggéré |
|----|---------------|------------------------|
| 9 | Twitter Hashtags Togo | `twitter-togo.jpg` |
| 10 | World Cup EDA | `worldcup-eda.jpg` |
| 11 | Titanic Dataset | `titanic-eda.jpg` |
| 13 | Python Data Cleaning | `python-cleaning.jpg` |

### SQL (2 projets)

| ID | Nom du Projet | Nom de fichier suggéré |
|----|---------------|------------------------|
| 12 | SQL Data Cleaning | `sql-cleaning.jpg` |
| 14 | Business Insights SQL | `sql-business.jpg` |

## 🚀 Après Avoir Ajouté Vos Images

### Tester localement :

```powershell
cd "c:\Users\skkse\OneDrive\Bureau\SKK Analytics\MES APPLICATIONS\skkanalytics\portfolio-site"
npm run dev
```

Ouvrez http://localhost:5173/projets et vérifiez que toutes les images s'affichent

### Pousser sur GitHub :

```powershell
git add public/images/projects/
git add src/data/projects.js
git commit -m "feat: Add custom project images"
git push
```

## 💡 Astuces Pro

### 1. Capturer la Meilleure Vue

Pour Power BI :
- Choisissez la page la plus impactante de votre rapport
- Assurez-vous que les graphiques sont bien visibles
- Évitez les données confidentielles si le portfolio est public

### 2. Qualité d'Image

- Utilisez JPG à 80-90% de qualité (bon compromis taille/qualité)
- PNG si vous avez des transparences ou texte important
- SVG pour des designs simples (comme les images temporaires)

### 3. Cohérence Visuelle

- Même dimension pour tous les projets (800x600)
- Même style de capture (fond blanc/noir)
- Même niveau de zoom

### 4. Alternative : Miniatures Power BI

Si vous ne voulez pas faire de captures, Power BI génère des miniatures :
1. Dans Power BI Desktop, allez dans Fichier → Paramètres
2. Les miniatures sont dans `%LOCALAPPDATA%\Microsoft\Power BI Desktop\Thumbnails`
3. Copiez et renommez-les

## ❓ Dépannage

### L'image ne s'affiche pas

**Vérifiez** :
- [ ] Le fichier est bien dans `public/images/projects/`
- [ ] Le nom du fichier correspond exactement (majuscules/minuscules)
- [ ] Le chemin dans `projects.js` commence par `/`
- [ ] Pas d'espaces dans le nom du fichier
- [ ] L'extension est correcte (.jpg, .png, .svg)

### L'image est déformée

- Assurez-vous que les dimensions sont 800x600 (ratio 4:3)
- Ou utilisez 1200x675 (ratio 16:9)

### L'image est trop lourde

- Compressez avec https://tinypng.com/
- Ou réduisez la qualité JPG à 70-80%

## 🎨 Exemple Complet

Voici comment j'ai configuré les 3 projets temporaires :

```javascript
// Dans src/data/projects.js

{
  id: 6,
  title: "FIFA World Cup History",
  image: "/images/projects/fifa.svg",  // Image locale
  link: "https://app.powerbi.com/view?r=...", // Lien fonctionnel
  tags: ["Power BI", "Sports Analytics", "FIFA"]
},
{
  id: 8,
  title: "Climate Change in Sub-Saharan Africa",
  image: "/images/projects/climate.svg",  // Image locale
  link: "https://app.powerbi.com/view?r=...", // Lien ajouté
  tags: ["Power BI", "Climate Change", "Africa"]
},
{
  id: 11,
  title: "EDA of Titanic Passengers Dataset",
  image: "/images/projects/titanic.svg",  // Image locale
  link: "https://colab.research.google.com/drive/...", // Lien ajouté
  tags: ["Python", "EDA", "Historical Data"]
}
```

## ✅ Checklist Finale

Avant de déployer, vérifiez :

- [ ] Toutes les images sont dans `public/images/projects/`
- [ ] Tous les projets ont une image définie dans `projects.js`
- [ ] Tous les liens sont corrects (pas de `#`)
- [ ] Test local réussi avec `npm run dev`
- [ ] Images de bonne qualité et dimension
- [ ] Noms de fichiers cohérents
- [ ] Commit et push sur GitHub

---

**Besoin d'aide ?** Consultez les fichiers de ce projet :
- Vos projets : `src/data/projects.js`
- Dossier images : `public/images/projects/`
- Images temporaires : `fifa.svg`, `climate.svg`, `titanic.svg`

Remplacez simplement les `.svg` par vos `.jpg` et tout fonctionnera ! 🎉
