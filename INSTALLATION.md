# 🚀 Instructions d'installation et de lancement

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (version 16 ou supérieure) - Téléchargez depuis https://nodejs.org/

## 📦 Installation

### Étape 1 : Ouvrir PowerShell en mode Administrateur

1. Recherchez "PowerShell" dans le menu Démarrer
2. Faites un clic droit sur "Windows PowerShell"
3. Sélectionnez "Exécuter en tant qu'administrateur"

### Étape 2 : Activer l'exécution des scripts (si nécessaire)

Si vous avez une erreur concernant l'exécution des scripts, tapez cette commande :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Puis appuyez sur `Y` pour confirmer.

### Étape 3 : Naviguer vers le dossier du projet

```powershell
cd "c:\Users\skkse\OneDrive\Bureau\SKK Analytics\MES APPLICATIONS\skkanalytics\portfolio-site"
```

### Étape 4 : Installer les dépendances

```powershell
npm install
```

Cette commande va installer toutes les bibliothèques nécessaires (React, Vite, Tailwind CSS, etc.)

⏱️ Cela peut prendre quelques minutes...

## 🎯 Lancer le site en mode développement

Une fois l'installation terminée, lancez le serveur de développement :

```powershell
npm run dev
```

Vous verrez un message comme :

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

🎉 **Ouvrez votre navigateur et allez à l'adresse : http://localhost:5173/**

Le site se rechargera automatiquement à chaque modification du code !

## 🛠️ Commandes utiles

### Arrêter le serveur
Appuyez sur `Ctrl + C` dans le terminal PowerShell

### Construire pour la production
```powershell
npm run build
```
Les fichiers optimisés seront dans le dossier `dist/`

### Prévisualiser la version de production
```powershell
npm run preview
```

## 📝 Personnalisation

### 1. Ajouter vos applications avec vidéos

Éditez `src/data/applications.js` :

```javascript
{
  id: 1,
  title: "Mon Application",
  description: "Description de mon application...",
  videoUrl: "https://www.youtube.com/embed/VOTRE_VIDEO_ID", // ID de votre vidéo YouTube
  thumbnail: "URL_DE_VOTRE_IMAGE",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  tags: ["Python", "Flask", "Data"]
}
```

**Pour obtenir l'URL embed de YouTube :**
1. Allez sur votre vidéo YouTube
2. Cliquez sur "Partager" → "Intégrer"
3. Copiez l'URL dans `src="..."`

### 2. Modifier vos projets

Éditez `src/data/projects.js` - Tous vos projets depuis votre Google Site sont déjà intégrés !

### 3. Personnaliser les couleurs

Éditez `tailwind.config.js` pour changer les couleurs principales.

## 🌐 Déploiement en ligne

### Option 1 : Vercel (Recommandé - Gratuit)

1. Allez sur https://vercel.com
2. Connectez-vous avec GitHub
3. Importez votre projet
4. Vercel détectera automatiquement Vite et déploiera votre site !

### Option 2 : Netlify (Gratuit)

1. Construisez votre site : `npm run build`
2. Allez sur https://netlify.com
3. Glissez-déposez le dossier `dist/`

### Option 3 : GitHub Pages (Gratuit)

1. Créez un repository GitHub
2. Poussez votre code
3. Activez GitHub Pages dans les settings du repository

## ❓ Problèmes courants

### Erreur "npm n'est pas reconnu"
→ Node.js n'est pas installé. Téléchargez depuis https://nodejs.org/

### Erreur d'exécution de scripts
→ Voir Étape 2 ci-dessus pour activer l'exécution des scripts

### Port 5173 déjà utilisé
→ Le site utilise automatiquement un autre port (5174, 5175, etc.)

### Erreurs lors de npm install
→ Supprimez le dossier `node_modules` et `package-lock.json`, puis réessayez `npm install`

## 📞 Besoin d'aide ?

Si vous rencontrez des problèmes, vérifiez :
1. Que Node.js est bien installé : `node --version`
2. Que npm fonctionne : `npm --version`
3. Que vous êtes dans le bon dossier du projet

---

Bonne création ! 🎨✨
