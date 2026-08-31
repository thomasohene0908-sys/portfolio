$output = "project-export.txt"
Remove-Item $output -ErrorAction SilentlyContinue

$files = Get-ChildItem -Recurse -File -Include *.tsx,*.ts,*.css -Path app,components,lib | Where-Object { $_.FullName -notmatch "node_modules" }

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($PWD.Path.Length + 1)
    Add-Content -Path $output -Value "=========================================="
    Add-Content -Path $output -Value "FILE: $relativePath"
    Add-Content -Path $output -Value "=========================================="
    Get-Content $file.FullName | Add-Content -Path $output
    Add-Content -Path $output -Value ""
}

Write-Host "Done. Exported to $output"
