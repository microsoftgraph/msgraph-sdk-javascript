Param(
    [string]$owner,
    [string]$repo,
    [string]$branchName,
    [string]$newVersion,
    [string]$gitPat
)

Write-Host "Pushing Version bump change to Github:" -ForegroundColor Magenta;

Write-Host "Adding Changes." -ForegroundColor Blue;
git add . | Write-Host;
Write-Host "Changes added to the '$($branchName)' branch." -ForegroundColor Green;

Write-Host "Committing Changes." -ForegroundColor Blue;
git commit -m "Bumped version to '$($newVersion)'" | Write-Host;
Write-Host "Committed the changes to the '$($branchName)' branch." -ForegroundColor Green;

Write-Host "Pushing changes." -ForegroundColor Blue;
git push "https://$($gitPat)@github.com/$($owner)/$($repo).git" HEAD:$branchName | Write-Host;
Write-Host "Pushed the changes to the '$($branchName)' branch." -ForegroundColor Green;