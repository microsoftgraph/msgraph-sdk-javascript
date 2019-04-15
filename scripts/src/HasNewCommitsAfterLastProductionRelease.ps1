Param(
    [string]$owner,
    [string]$repo,
    [string]$previewBranchName
)

Write-Host "Checking whether there exists new commits after last production release:" -ForegroundColor Magenta;

$releasesUrl = "https://api.github.com/repos/$($owner)/$($repo)/releases";

Write-Host "Getting list of releases with '$($releasesUrl)'" -ForegroundColor Blue;
$releasesJSON = Invoke-RestMethod -Uri $releasesUrl -Method Get;

if ($releasesJSON.Count -eq 0) {
    Write-Host "Unable to get releases list with '$($releasesUrl)'" -ForegroundColor Red;
    Write-Host "NOTE: This Script cannot handle the first release" -ForegroundColor Cyan;
    EXIT 1;
}

$lastReleaseJSON = $releasesJSON[0]; 
$isPreRelease = $lastReleaseJSON.prerelease;

if ([string]::IsNullOrEmpty($isPreRelease)) {
    Write-Host "Unable read the last release is pre-release or not" -ForegroundColor Red;
    Write-Host "Last Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $lastReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

$isPreRelease = $isPreRelease -as [bool];

if (-Not ($isPreRelease)) {
    Write-Host "Preview is not released for the latest changes in '$($previewBranchName)' branch" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

Write-Host "Checking for availability of new commits after last production release:" -ForegroundColor Magenta;
$latestReleaseUrl = "https://api.github.com/repos/$($owner)/$($repo)/releases/latest";

Write-Host "Getting latest production release with '$($latestReleaseUrl)'" -ForegroundColor Blue;
$latestReleaseJSON = Invoke-RestMethod -Uri $latestReleaseUrl -Method Get;

if ($latestReleaseJSON.Count -eq 0) {
    Write-Host "Unable to get latest production release with '$($latestReleaseUrl)'" -ForegroundColor Red;
    Write-Host "NOTE: This Script cannot handle the first release!" -ForegroundColor Cyan;
    EXIT 1;
}

$publishedTime = $latestReleaseJSON.published_at;
$latestReleaseTag = $latestReleaseJSON.tag_name;

if ([string]::IsNullOrEmpty($publishedTime)) {
    Write-Host "Unable read the latest production release published time" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Red;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Red;
    EXIT 1;
}

if ([string]::IsNullOrEmpty($latestReleaseTag)) {
    Write-Host "Unable read the latest production release tag name" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Red;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Red;
    EXIT 1;
}

$newCommitsUrl = "https://api.github.com/repos/$($owner)/$($repo)/commits?sha=$($previewBranchName)&since=$($publishedTime)";

Write-Host "Getting commits after latest production release with '$($newCommitsUrl)'" -ForegroundColor Blue;
$newCommitsJSON = Invoke-RestMethod -Uri $newCommitsUrl -Method Get;

if ($newCommitsJSON.Count -gt 0) {
    Write-Host "There are atleast '$($newCommitsJSON.Length)' Commits in '$($previewBranchName)' branch after last production release with tag $($latestReleaseTag)" -ForegroundColor Green;
    EXIT 0;
}
else {
    Write-Host "Unable to get commits after latest production release with ." -ForegroundColor Red;
    Write-Host "NOTE: Possibly, there are no commits in '$($previewBranchName)' branch after last production release with tag $($latestReleaseTag)" -ForegroundColor Cyan;
    Write-Host "To verify there are not commits, make a request by pasting '$($newCommitsUrl)' in your browser" -ForegroundColor Cyan;
    EXIT 1;
}