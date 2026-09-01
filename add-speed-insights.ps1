npm install @vercel/speed-insights

$content = Get-Content app\layout.tsx -Raw

if ($content -notmatch "from `"@vercel/speed-insights/next`"") {
  $content = "import { SpeedInsights } from `"@vercel/speed-insights/next`";`n" + $content
}

if ($content -notmatch "<SpeedInsights") {
  $content = $content -replace "\{children\}", "{children}`n        <SpeedInsights />"
}

Set-Content -Path app\layout.tsx -Value $content -Encoding utf8

Write-Host "--- Updated layout.tsx ---"
Get-Content app\layout.tsx

Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
