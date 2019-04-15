Param(
    [string]$gitRepoRoot
)

Write-Host "Removing Github User:" -ForegroundColor Magenta;

Set-Location -Path $gitRepoRoot;
Write-Host "Location changed to Git Repo Root $(Get-Location)" -ForegroundColor Green;

git config --unset user.name
git config --unset user.email
Write-Host "Git user.name and user.email is unset." -ForegroundColor Green;