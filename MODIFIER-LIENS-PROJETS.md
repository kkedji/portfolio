# 🔗 Liste des Liens des Projets

**Fichier à modifier** : `src/data/projects.js`

## Power BI (8 projets)

### 1. Elections Législatives Togo Avril 2024
```javascript
link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNWY2NjIwNTMtOTgxNS00NjNkLWE4NTMtY2Y1ZDhhMGU4YzFlIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
```

### 2. Supply Chain Activity Analysis
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiNmNjNjFkM2UtMTNlMy00YjJhLWFhNTYtOWY0NGNlNDk2MmQ1IiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9"
```

### 3. App Store Games Analysis
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiMjRjYmY3OWQtYTRjMS00Y2JlLTk0OWQtZWFlZDU5NDE2YjNhIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
```

### 4. Nigeria Agricultural Export Analysis
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiOGUzZWNlOWUtMTkzOS00ZDAyLWFjZTItODU4MmVhOTUyZDUxIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9"
```

### 5. Financial Analysis of Fitness Co.
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiNGMyODU4ZWMtNzM3OS00MDMwLTkwZWYtODlkM2I3NDZmZTAzIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
```

### 6. FIFA World Cup History
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiNmNiY2FkMjAtMWMyMC00YzMzLWJhZjEtMTE4NTY5NTcxZTcxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
```

### 7. Togo's Economic Indicators Analysis
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiYjE4ZTBjMWUtZTg3MC00NGMzLTgzNWQtYzdjNzMyNDE1ZjNmIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
```

### 8. Climate Change in Sub-Saharan Africa
```javascript
link: "https://app.powerbi.com/view?r=eyJrIjoiYjE4ZTBjMWUtZTg3MC00NGMzLTgzNWQtYzdjNzMyNDE1ZjNmIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
```
**Note** : Ce lien est le même que Togo Economic - À vérifier !

---

## Python (4 projets)

### 9. EDA of Tweets - Popular Hashtags in Togo
```javascript
link: "https://github.com/kkedji/Togo-popular-Twitter-hashtags-Analysis/blob/main/Twitter%20Data%20Analysis.ipynb"
```

### 10. EDA of World Cup Results Since 1930
```javascript
link: "https://colab.research.google.com/drive/1LEVY2wPbMzpLiQH7S9y6GPFK0GPKwpnp#scrollTo=fZqh-6sTBV7G"
```

### 11. EDA of Titanic Passengers Dataset
```javascript
link: "https://colab.research.google.com/drive/1LEVY2wPbMzpLiQH7S9y6GPFK0GPKwpnp"
```
**Note** : Même lien que World Cup - À vérifier !

### 13. Data Cleaning using Python
```javascript
link: "https://github.com/kkedji/Togo-Economic-data-analysis/blob/main/TogoEconomicIndicatorsProject.ipynb"
```

---

## SQL (2 projets)

### 12. Data Cleaning with SQL
```javascript
link: "https://github.com/kkedji/Portfolio-Projects/blob/main/NashvilleHousing%20data%20cleaning%20SQL%20Scripts.sql"
```

### 14. Business Insights with SQL
```javascript
link: "https://github.com/kkedji/Moovies-Store-business"
```

---

## 🔧 Comment Modifier un Lien

1. **Ouvrez** : `src/data/projects.js`

2. **Trouvez le projet** (utilisez Ctrl+F pour chercher le titre)

3. **Remplacez le lien** :
```javascript
{
  id: 8,
  title: "Climate Change in Sub-Saharan Africa",
  link: "VOTRE_NOUVEAU_LIEN_ICI",  // ← Modifiez cette ligne
}
```

4. **Sauvegardez** : Ctrl+S

5. **Testez localement** :
```powershell
npm run dev
```

6. **Poussez sur GitHub** :
```powershell
git add src/data/projects.js
git commit -m "update: Change project links"
git push
```

---

## ⚠️ Liens à Vérifier

Ces projets semblent avoir des liens dupliqués ou manquants :

- [ ] **Climate Change** (id: 8) - Même lien que Togo Economic ?
- [ ] **Titanic Dataset** (id: 11) - Même lien que World Cup ?

Vérifiez vos vrais liens sur :
- Power BI : https://app.powerbi.com/
- GitHub : https://github.com/kkedji/
- Google Colab : https://colab.research.google.com/

---

## 📝 Exemple Complet de Modification

**Avant** :
```javascript
{
  id: 8,
  title: "Climate Change in Sub-Saharan Africa",
  category: "Power BI",
  description: "Rapport Power BI...",
  image: "/images/projects/climate.svg",
  link: "https://app.powerbi.com/view?r=ANCIEN_LIEN",
  tags: ["Power BI", "Climate Change", "Africa"]
}
```

**Après** :
```javascript
{
  id: 8,
  title: "Climate Change in Sub-Saharan Africa",
  category: "Power BI",
  description: "Rapport Power BI...",
  image: "/images/projects/climate.svg",
  link: "https://app.powerbi.com/view?r=NOUVEAU_LIEN",  // ← Changé
  tags: ["Power BI", "Climate Change", "Africa"]
}
```

---

## 💡 Astuce : Obtenir le Lien d'un Rapport Power BI

1. Ouvrez votre rapport sur app.powerbi.com
2. Cliquez sur "Fichier" → "Intégrer le rapport" → "Site web ou portail"
3. Copiez l'URL qui commence par `https://app.powerbi.com/view?r=...`
4. Collez-la dans le champ `link:`

---

## 🎯 Résumé

- **Fichier** : `src/data/projects.js`
- **Ligne à modifier** : `link: "VOTRE_URL_ICI"`
- **14 projets** au total
- **Testez** avant de pousser sur GitHub
