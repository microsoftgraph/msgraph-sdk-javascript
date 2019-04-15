Param(
    [string]$owner,
    [string]$repo,
    [string]$previewStr
)

Write-Host "Calculating new Preview Version:" -ForegroundColor Magenta;

$newVersionStr;

$releasesUrl = "https://api.github.com/repos/$($owner)/$($repo)/releases";

Write-Host "Getting list of releases with '$($releasesUrl)'" -ForegroundColor Blue;
$releasesJSON = Invoke-RestMethod -Uri $releasesUrl -Method Get;

if ($releasesJSON.Count -eq 0) {
    Write-Host "Unable to get releases list with '$($releasesUrl)'" -ForegroundColor Red;
    Write-Host "NOTE: This Script cannot handle the first release" -ForegroundColor Cyan;
    EXIT 1;
}

$lastReleaseJSON = $releasesJSON[0]; 
$lastReleaseVersionStr = $lastReleaseJSON.tag_name;
$isPreRelease = $lastReleaseJSON.prerelease;

if ([string]::IsNullOrEmpty($lastReleaseVersionStr)) {
    Write-Host "Unable read the last release tag name" -ForegroundColor Red;
    Write-Host "Last Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $lastReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

if ([string]::IsNullOrEmpty($isPreRelease)) {
    Write-Host "Unable read the last release is pre-release or not" -ForegroundColor Red;
    Write-Host "Last Release Data:" -ForegroundColor Cyan;
    Write-Host -Object $lastReleaseJSON -ForegroundColor Cyan;
    EXIT 1;
}

$isPreRelease = $isPreRelease -as [bool];
$versionArr = $lastReleaseVersionStr.split(".");
if ($isPreRelease) {
    if (!$versionArr[2].Contains("-$($previewStr)")) {
        Write-Host "Lastest release '$($lastReleaseVersionStr)' is mentioned as pre-release but '$($previewStr)' is missing in version string" -ForegroundColor Red;
        Write-Host "Last Release Data:" -ForegroundColor Cyan;
        Write-Host -Object $lastReleaseJSON -ForegroundColor Cyan;
        EXIT 1;
    }
    $previewVersionStr = $versionArr[$versionArr.Count - 1];
    $previewVersion = $previewVersionStr -as [int];
    $newPreviewVersion = $previewVersion + 1;
    $versionArr[$versionArr.Count - 1] = $newPreviewVersion;
    $newVersionStr = $versionArr -join ".";
    Write-Host "Current version is '$($lastReleaseVersionStr)'" -ForegroundColor Blue;
    Write-Host "New calculated version is '$($newVersionStr)'" -ForegroundColor Green;
}
else {
    if ($versionArr[2].Contains("-$($previewStr)")) {
        Write-Host "Lastest release '$($lastReleaseVersionStr)' is mentioned as production release but version string has '$($previewStr)'" -ForegroundColor Red;
        Write-Host "Last Release Data:" -ForegroundColor Cyan;
        Write-Host -Object $lastReleaseJSON -ForegroundColor Cyan;
        EXIT 1;
    }
    $minorVersionStr = $versionArr[1];
    $minorVersion = $minorVersionStr -as [int];
    $newMinorVersion = $minorVersion + 1;
    $newPatchVersion = 0;
    $newPreviewVersion = 1;
    $versionArr[1] = $newMinorVersion;
    $versionArr[2] = "$($newPatchVersion)-$($previewStr).$($newPreviewVersion)";
    $newVersionStr = $versionArr -join ".";
    Write-Host "Current version is '$($lastReleaseVersionStr)'" -ForegroundColor Blue;
    Write-Host "New calculated version is '$($newVersionStr)'" -ForegroundColor Green;
}

Write-Host "##vso[task.setvariable variable=NEW_VERSION_STRING]$($newVersionStr)";

Write-Host "Updated new version in global variable" -ForegroundColor Green;