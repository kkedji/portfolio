# Script PowerShell pour vérifier et afficher l'état de vos images de projets

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  VÉRIFICATION DES IMAGES DE PROJETS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$projectsPath = "public\images\projects"

# Vérifier si le dossier existe
if (Test-Path $projectsPath) {
    Write-Host "✓ Dossier projects/ existe" -ForegroundColor Green
    Write-Host ""
    
    # Lister les fichiers
    $files = Get-ChildItem -Path $projectsPath -File
    
    if ($files.Count -eq 0) {
        Write-Host "⚠ Aucune image trouvée dans le dossier" -ForegroundColor Yellow
    } else {
        Write-Host "Images présentes ($($files.Count)) :" -ForegroundColor Green
        foreach ($file in $files) {
            $size = [math]::Round($file.Length / 1KB, 2)
            Write-Host "  → $($file.Name) ($size KB)" -ForegroundColor White
        }
    }
} else {
    Write-Host "✗ Le dossier projects/ n'existe pas" -ForegroundColor Red
    Write-Host "  Créez-le avec: mkdir public\images\projects" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "PROJETS QUI ONT BESOIN D'IMAGES :" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$projectsList = @(
    "1. togo-elections.jpg (Elections Législatives Togo)",
    "2. supply-chain.jpg (Supply Chain Analysis)",
    "3. app-store-games.jpg (App Store Games)",
    "4. nigeria-export.jpg (Nigeria Agricultural Export)",
    "5. fitness-finance.jpg (Financial Analysis Fitness)",
    "6. fifa-worldcup.jpg (FIFA World Cup)",
    "7. togo-economy.jpg (Togo Economic Indicators)",
    "8. climate-africa.jpg (Climate Change Africa)",
    "9. twitter-togo.jpg (Twitter Hashtags Togo)",
    "10. worldcup-eda.jpg (World Cup EDA)",
    "11. titanic-eda.jpg (Titanic Dataset)",
    "12. sql-cleaning.jpg (SQL Data Cleaning)",
    "13. python-cleaning.jpg (Python Data Cleaning)",
    "14. sql-business.jpg (Business Insights SQL)"
)

foreach ($project in $projectsList) {
    Write-Host $project -ForegroundColor Cyan
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "INSTRUCTIONS :" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Prenez des captures d'écran de vos rapports Power BI" -ForegroundColor White
Write-Host "2. Redimensionnez-les à 800x600 pixels" -ForegroundColor White
Write-Host "3. Sauvegardez-les dans public\images\projects\" -ForegroundColor White
Write-Host "4. Utilisez les noms suggérés ci-dessus" -ForegroundColor White
Write-Host ""
Write-Host "Guide complet: AJOUTER-IMAGES-PROJETS.md" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
