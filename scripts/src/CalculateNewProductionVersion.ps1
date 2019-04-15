Param(
    [string]$owner,
    [string]$repo,
    [string]$previewStr
)

Write-Host "Calculating new Production Version:" -ForegroundColor Magenta;

$newVersionStr;

$releasesUrl = "https://api.github.com/repos/$($owner)/$($repo)/releases";

Write-Host "Getting list of releases with '$($releasesUrl)'" -ForegroundColor Blue;
$releasesJSON = Invoke-RestMethod -Uri $releasesUrl -Method Get;

if ($releasesJSON.Count -eq 0) {
    Write-Host "Unable to get releases list with '$($releasesUrl)'" -ForegroundColor Red;
    Write-Host "NOTE: This Script cannot handle the first release" -ForegroundColor Cyan;
    EXIT 1;
}

$latestReleaseJSON = $releasesJSON[0]; 
$latestReleaseVersionStr = $latestReleaseJSON.tag_name;
$isPreRelease = $latestReleaseJSON.prerelease;

if ([string]::IsNullOrEmpty($latestReleaseVersionStr)) {
    Write-Host "Unable read the latest release tag name" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

if ([string]::IsNullOrEmpty($isPreRelease)) {
    Write-Host "Unable read the latest release is pre-release or not" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

$isPreRelease = $isPreRelease -as [bool];

if (!$isPreRelease) {
    Write-Host "Preview is not released for the latest changes in '$($branchName)' branch" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

$versionArr = $latestReleaseVersionStr.split("-");

if ([string]::IsNullOrEmpty($versionArr[1])) {
    Write-Host "Latest release is a Preview release but the '$($previewStr)' is missing in version string $($latestReleaseVersionStr)" -ForegroundColor Red;
    Write-Host "Latest Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $latestReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

$newVersionStr = $versionArr[0];

Write-Host "Current version is '$($latestReleaseVersionStr)'" -ForegroundColor Blue;
Write-Host "New calculated version is '$($newVersionStr)'" -ForegroundColor Green;

Write-Host "##vso[task.setvariable variable=NEW_VERSION_STRING]$($newVersionStr)";

Write-Host "Updated new version in global variable" -ForegroundColor Green;