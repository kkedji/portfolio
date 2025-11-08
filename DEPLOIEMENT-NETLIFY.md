# 🚀 Déploiement sur Netlify depuis GitHub

## 📋 Prérequis

- Compte GitHub (vous l'avez déjà : kkedji)
- Compte Netlify (gratuit) : https://app.netlify.com/signup
- Le code poussé sur votre repository GitHub : https://github.com/kkedji/portfolio.git

## 🔄 Étape 1 : Pousser le code sur GitHub

### Option A : Si le repository existe déjà et est vide

```powershell
cd "c:\Users\skkse\OneDrive\Bureau\SKK Analytics\MES APPLICATIONS\skkanalytics\portfolio-site"

# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio site with React and Vite"

# Lier au repository distant
git remote add origin https://github.com/kkedji/portfolio.git

# Pousser le code
git branch -M main
git push -u origin main
```

### Option B : Si le repository contient déjà des fichiers

```powershell
cd "c:\Users\skkse\OneDrive\Bureau\SKK Analytics\MES APPLICATIONS\skkanalytics\portfolio-site"

# Cloner le repository existant
git clone https://github.com/kkedji/portfolio.git temp-folder

# Copier le .git dans votre projet
xcopy temp-folder\.git .git\ /E /I /H

# Supprimer le dossier temporaire
rmdir /s /q temp-folder

# Ajouter vos fichiers
git add .

# Commit
git commit -m "Add new portfolio site with React and Vite"

# Pousser
git push origin main
```

## 🌐 Étape 2 : Déployer sur Netlify

### 1. Connectez-vous à Netlify

Allez sur https://app.netlify.com et connectez-vous (ou créez un compte gratuit)

### 2. Importez votre projet GitHub

1. Cliquez sur **"Add new site"** → **"Import an existing project"**
2. Choisissez **"Deploy with GitHub"**
3. Autorisez Netlify à accéder à votre GitHub (première fois seulement)
4. Sélectionnez le repository : **`kkedji/portfolio`**

### 3. Configuration du build

Netlify détectera automatiquement les paramètres grâce au fichier `netlify.toml` :

```
Build command: npm run build
Publish directory: dist
```

Si ce n'est pas le cas, entrez ces valeurs manuellement.

### 4. Déployez !

Cliquez sur **"Deploy site"**

⏱️ Le déploiement prend généralement 2-3 minutes.

## ✅ Étape 3 : Votre site est en ligne !

Une fois le déploiement terminé :

1. Netlify vous donne une URL aléatoire (ex: `eloquent-curie-abc123.netlify.app`)
2. Votre site est accessible immédiatement !

### Personnaliser le nom de domaine

1. Allez dans **Site settings** → **Domain management**
2. Cliquez sur **"Change site name"**
3. Choisissez un nom disponible (ex: `skkanalytics-portfolio.netlify.app`)

### Ajouter un domaine personnalisé (optionnel)

Si vous avez un nom de domaine (ex: `skkanalytics.com`) :

1. Allez dans **Domain management** → **Add custom domain**
2. Suivez les instructions pour pointer votre DNS vers Netlify
3. Netlify activera automatiquement le HTTPS gratuit

## 🔄 Mises à jour automatiques

**C'est le plus cool !** Chaque fois que vous pousserez du code sur GitHub :

```powershell
git add .
git commit -m "Update projects data"
git push
```

Netlify détectera automatiquement les changements et redéploiera votre site !

## 📊 Fonctionnalités Netlify gratuites

✅ Déploiement automatique depuis GitHub
✅ HTTPS gratuit (certificat SSL)
✅ CDN mondial ultra-rapide
✅ Aperçu des Pull Requests
✅ Rollback vers versions précédentes
✅ 100 GB de bande passante/mois
✅ Formulaires de contact (100 soumissions/mois)

## 🛠️ Commandes Git utiles

### Mettre à jour le site

```powershell
# Voir les fichiers modifiés
git status

# Ajouter tous les changements
git add .

# Ou ajouter des fichiers spécifiques
git add src/data/applications.js

# Créer un commit avec un message
git commit -m "Add new application with video"

# Pousser vers GitHub (déclenche le déploiement Netlify)
git push
```

### Vérifier l'historique

```powershell
git log --oneline
```

### Annuler des changements locaux

```powershell
git checkout -- nom-du-fichier
```

## ⚠️ Résolution de problèmes

### Erreur : "git n'est pas reconnu"

Installez Git pour Windows : https://git-scm.com/download/win

### Erreur : Authentification GitHub

Depuis 2021, GitHub nécessite un Personal Access Token :

1. Allez sur https://github.com/settings/tokens
2. Générez un nouveau token (classic)
3. Cochez "repo"
4. Utilisez ce token comme mot de passe quand Git vous le demande

### Le build Netlify échoue

Vérifiez les logs dans Netlify Dashboard. Erreurs communes :
- Dépendances manquantes → Vérifiez `package.json`
- Erreur de syntaxe → Testez `npm run build` localement d'abord

### Changements non visibles sur le site

1. Vérifiez que le push a bien été fait : `git log`
2. Vérifiez le déploiement dans Netlify Dashboard
3. Videz le cache du navigateur (Ctrl + F5)

## 📝 Structure recommandée des commits

```bash
# Ajout de nouvelles fonctionnalités
git commit -m "feat: Add video support to applications page"

# Corrections de bugs
git commit -m "fix: Correct project links"

# Mises à jour de contenu
git commit -m "content: Update applications data"

# Améliorations de style
git commit -m "style: Improve mobile responsiveness"
```

## 🎉 Félicitations !

Votre portfolio est maintenant :
- ✅ Versionné avec Git
- ✅ Hébergé sur GitHub
- ✅ Déployé automatiquement sur Netlify
- ✅ Accessible au monde entier avec HTTPS

---

**URL du repository** : https://github.com/kkedji/portfolio
**Documentation Netlify** : https://docs.netlify.com/

Besoin d'aide ? Consultez la documentation ou contactez-moi !
