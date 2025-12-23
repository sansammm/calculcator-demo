#!/bin/bash

# GitHub Issue Creation Script
# This script creates GitHub issues from templates

echo "🚀 Creating GitHub Issues for Calculator Project..."

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

# Phase 1: Project Setup
echo "📦 Creating Phase 1 issues..."

gh issue create \
  --title "[Setup] Initialize React + Vite Project" \
  --label "setup,P0" \
  --body "$(cat .github/ISSUE_TEMPLATE/phase-1-1-initialize-project.md | sed '/^---$/,/^---$/d')"

gh issue create \
  --title "[Setup] Install Project Dependencies" \
  --label "setup,P0" \
  --body "$(cat .github/ISSUE_TEMPLATE/phase-1-2-install-dependencies.md | sed '/^---$/,/^---$/d')"

# Phase 2: Core Logic
echo "🧮 Creating Phase 2 issues..."

gh issue create \
  --title "[Core Logic] Expression Evaluator (TDD)" \
  --label "core-logic,TDD,P0" \
  --body "$(cat .github/ISSUE_TEMPLATE/phase-2-3-expression-evaluator.md | sed '/^---$/,/^---$/d')"

# Phase 3: UI Components
echo "🎨 Creating Phase 3 issues..."

gh issue create \
  --title "[UI] Button Component" \
  --label "ui,component,P0" \
  --body "$(cat .github/ISSUE_TEMPLATE/phase-3-1-button-component.md | sed '/^---$/,/^---$/d')"

# Phase 4: Testing
echo "🧪 Creating Phase 4 issues..."

gh issue create \
  --title "[Testing] E2E Tests with Playwright" \
  --label "testing,e2e,P0" \
  --body "$(cat .github/ISSUE_TEMPLATE/phase-4-2-e2e-testing.md | sed '/^---$/,/^---$/d')"

echo "✅ All issues created successfully!"
echo "View issues at: $(gh repo view --json url -q .url)/issues"
