Param(
    [string]$owner,
    [string]$repo,
    [string]$branchName,
    [string]$gitPat
)
Write-Host "Merge and Commit the changes into '$($branchName)' till last release:" -ForegroundColor Magenta;

Write-Host "Checking out '$($branchName)'" -ForegroundColor Blue;
git checkout main | Write-Host;
Write-Host "Checked out" -ForegroundColor Green;

Write-Host "Pulling '$($branchName)'" -ForegroundColor Blue;
git pull origin main --allow-unrelated-histories | Write-Host;
Write-Host "Pulled '$($branchName)'" -ForegroundColor Green;

Write-Host "Getting SHA for last commit in the latest release" -ForegroundColor Blue;
$latestReleaseCommitSHA = git rev-list --tags --max-count=1;

if([string]::IsNullOrEmpty($latestReleaseCommitSHA)) {
    Write-Host "Unable to get the SHA for last commit in latest release" -ForegroundColor Red;
    EXIT 1;
}

Write-Host "SHA for last commit in the latest release is '$($latestReleaseCommitSHA)'" -ForegroundColor Green;

Write-Host "Merging Changes till '$($latestReleaseCommitSHA)'" -ForegroundColor Blue;
git merge $latestReleaseCommitSHA | Write-Host;

Write-Host "Checking Conflicted Files";
$conflictedFiles = git diff --name-only --diff-filter=U;

if (-Not [string]::IsNullOrEmpty($conflictedFiles)) {
    Write-Host "Unable to Merge" -ForegroundColor Red;
    Write-Host "There are conflicts in below files:" -ForegroundColor Cyan;
    Write-Host -Object $conflictedFiles -ForegroundColor Cyan;
    EXIT 1;
}

Write-Host "Merged changes to '$($branchName)'" -ForegroundColor Green;

Write-Host "Pushing changes." -ForegroundColor Blue;
git push "https://$($gitPat)@github.com/$($owner)/$($repo).git" HEAD:$branchName | Write-Host;
Write-Host "Pushed changes to the $($branchName) branch." -ForegroundColor Green;
