Param(
    [string]$gitRepoRoot
)

Write-Host "Get package version and update it in the global varaible:" -ForegroundColor Magenta;

$pathToPackageJson = "$($gitRepoRoot)/package.json";
$packageJson = Get-Content -Path $pathToPackageJson -Raw | ConvertFrom-Json;
Write-Host "Package version is '$($packageJson.version)'" -ForegroundColor Green;

Write-Host "##vso[task.setvariable variable=VERSION_STRING]$($packageJson.version)";

Write-Host "Updated version in global variable" -ForegroundColor Green;
