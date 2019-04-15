Param(
    [string]$owner,
    [string]$repo,
    [string]$branchName
)

Write-Host "Getting the latest commit SHA for $($branchName):" -ForegroundColor Magenta;

$latestCommitUrl = "https://api.github.com/repos/$($owner)/$($repo)/commits/$($branchName)";

Write-Host "Getting latest commit with '$($latestCommitUrl)'" -ForegroundColor Blue;
$latestCommitData = Invoke-RestMethod -Uri $latestCommitUrl -Method Get;

if ($latestCommitData.Count -eq 0) {
    Write-Host "Unable to get latest commit with '$($latestCommitUrl)'" -ForegroundColor Red;
    EXIT 1;
}

if ([string]::IsNullOrEmpty($latestCommitData.sha)) {
    Write-Host "SHA is not present in the latest commit that is fetched" -ForegroundColor Red;
    Write-Host "Latest Commit Data:" -ForegroundColor Cyan;
    Write-Host -Object $latestCommitData -ForegroundColor Cyan;
    EXIT 1;
}

Write-Host "Latest Commit SHA is '$($latestCommitData.sha)'" -ForegroundColor Green;

Write-Host "##vso[task.setvariable variable=LASTEST_COMMIT_SHA]$($latestCommitData.sha)";

Write-Host "Updated latest commit sha in global variable" -ForegroundColor Green;