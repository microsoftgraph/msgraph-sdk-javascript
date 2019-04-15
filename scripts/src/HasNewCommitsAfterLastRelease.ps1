Param(
    [string]$owner,
    [string]$repo,
    [string]$branchName
)
    
Write-Host "Checking for availability of new commits after last release:" -ForegroundColor Magenta;
$releasesUrl = "https://api.github.com/repos/$($owner)/$($repo)/releases";

Write-Host "Getting list of releases with '$($releasesUrl)'" -ForegroundColor Blue;
$releasesJSON = Invoke-RestMethod -Uri $releasesUrl -Method Get;

if ($releasesJSON.Count -eq 0) {
    Write-Host "Unable to get releases list with '$($releasesUrl)'" -ForegroundColor Red;
    Write-Host "NOTE: This Script cannot handle the first release!" -ForegroundColor Cyan;
    EXIT 1;
}

$lastReleaseJSON = $releasesJSON[0];
$publishedTime = $lastReleaseJSON.published_at;
$lastReleaseTag = $lastReleaseJSON.tag_name;

if ([string]::IsNullOrEmpty($publishedTime)) {
    Write-Host "Unable read the last release published time" -ForegroundColor Red;
    Write-Host "Last Release Data:" -ForegroundColor Red;
    Write-Host -Object $lastReleaseJSON -ForegroundColor Red;
    EXIT 1;
}

if ([string]::IsNullOrEmpty($lastReleaseTag)) {
    Write-Host "Unable read the last release tag name" -ForegroundColor Red;
    Write-Host "Last Release Data:" -ForegroundColor Red;
    Write-Host -Object $lastReleaseJSON -ForegroundColor Red;
    EXIT 1;
}

$newCommitsUrl = "https://api.github.com/repos/$($owner)/$($repo)/commits?sha=$($branchName)&since=$($publishedTime)";

Write-Host "Getting commits after last release with '$($newCommitsUrl)'" -ForegroundColor Blue;
$newCommitsJSON = Invoke-RestMethod -Uri $newCommitsUrl -Method Get;

if ($newCommitsJSON.Count -gt 0) {
    Write-Host "There are atleast '$($newCommitsJSON.Length)' Commits in '$($branchName)' branch after last release with tag $'($lastReleaseTag)'" -ForegroundColor Green;
    EXIT 0;
}
else {
    Write-Host "Unable to get commits after last release with '$($newCommitsUrl)'" -ForegroundColor Red;
    Write-Host "NOTE: Possibly, there are no commits in '$($branchName)' branch after last release with tag '$($lastReleaseTag)'" -ForegroundColor Cyan;
    Write-Host "To verify there are not commits, make a request by pasting '$($newCommitsUrl)' in your browser" -ForegroundColor Cyan;
    EXIT 1;
}