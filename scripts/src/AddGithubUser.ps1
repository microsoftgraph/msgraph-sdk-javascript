Param(
    [string]$gitUserName,
    [string]$gitUserEmailId,
    [string]$gitRepoRoot
)

Write-Host "Configuring Github User:" -ForegroundColor Magenta;

Set-Location -Path $gitRepoRoot;
Write-Host "Location changed to Git Repo Root '$(Get-Location)'" -ForegroundColor Green;

git config user.name $gitUserName
git config user.email $gitUserEmailId
Write-Host "Git user.name=$($gitUserName) and user.email=$($gitUserEmailId) is set." -ForegroundColor Green;