Param(
    [string]$owner,
    [string]$repo,
    [string]$branchName,
    [string]$previewBranchName,
    [string]$gitPat
)

Write-Host "Merge and Commit the version changes from '$($branchName)' to '$($previewBranchName)':" -ForegroundColor Magenta;

Write-Host "Starting checkout '$($previewBranchName)'" -ForegroundColor Blue;
git checkout $previewBranchName | Write-Host;
Write-Host "Checked out '$($previewBranchName)'" -ForegroundColor Green;

Write-Host "Merging the changes from '$($branchName)' to '$($previewBranchName)'" -ForegroundColor Blue;
git merge $branchName | Write-Host;

$conflictedFiles = git diff --name-only --diff-filter=U;

if (-Not ([string]::IsNullOrEmpty($conflictedFiles))) {
    Write-Host "Unable to Merge" -ForegroundColor Red;
    Write-Host "There are conflicts in below files:" -ForegroundColor Cyan;
    Write-Host -Object $conflictedFiles -ForegroundColor Cyan;
    EXIT 1;
}

Write-Host "Merged changes from '$($branchName)' to '$($previewBranchName)'" -ForegroundColor Green;

Write-Host "Pushing changes." -ForegroundColor Blue;
git push "https://$($gitPat)@github.com/$($owner)/$($repo).git" HEAD:$previewBranchName | Write-Host
Write-Host "Pushed changes to the '$($previewBranchName)' branch." -ForegroundColor Green;
