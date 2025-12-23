# GitHub Issue Creation Script (PowerShell)
# This script creates GitHub issues from templates

Write-Host "🚀 Creating GitHub Issues for Calculator Project..." -ForegroundColor Green

# Check if gh CLI is installed
if (!(Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI (gh) is not installed." -ForegroundColor Red
    Write-Host "Please install it from: https://cli.github.com/"
    exit 1
}

# Check if authenticated
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not authenticated with GitHub CLI." -ForegroundColor Red
    Write-Host "Please run: gh auth login"
    exit 1
}

# Function to extract body from markdown file (remove frontmatter)
function Get-IssueBody {
    param($FilePath)
    $content = Get-Content $FilePath -Raw
    # Remove YAML frontmatter (between --- markers)
    $content = $content -replace '(?s)^---.*?---\s*', ''
    return $content
}

# Phase 1: Project Setup
Write-Host "📦 Creating Phase 1 issues..." -ForegroundColor Cyan

$body = Get-IssueBody ".github\ISSUE_TEMPLATE\phase-1-1-initialize-project.md"
gh issue create --title "[Setup] Initialize React + Vite Project" --label "setup,P0" --body $body

$body = Get-IssueBody ".github\ISSUE_TEMPLATE\phase-1-2-install-dependencies.md"
gh issue create --title "[Setup] Install Project Dependencies" --label "setup,P0" --body $body

# Phase 2: Core Logic
Write-Host "🧮 Creating Phase 2 issues..." -ForegroundColor Cyan

$body = Get-IssueBody ".github\ISSUE_TEMPLATE\phase-2-3-expression-evaluator.md"
gh issue create --title "[Core Logic] Expression Evaluator (TDD)" --label "core-logic,TDD,P0" --body $body

# Phase 3: UI Components
Write-Host "🎨 Creating Phase 3 issues..." -ForegroundColor Cyan

$body = Get-IssueBody ".github\ISSUE_TEMPLATE\phase-3-1-button-component.md"
gh issue create --title "[UI] Button Component" --label "ui,component,P0" --body $body

# Phase 4: Testing
Write-Host "🧪 Creating Phase 4 issues..." -ForegroundColor Cyan

$body = Get-IssueBody ".github\ISSUE_TEMPLATE\phase-4-2-e2e-testing.md"
gh issue create --title "[Testing] E2E Tests with Playwright" --label "testing,e2e,P0" --body $body

Write-Host "✅ All issues created successfully!" -ForegroundColor Green

# Get repository URL
$repoUrl = gh repo view --json url -q .url
Write-Host "View issues at: $repoUrl/issues" -ForegroundColor Yellow
