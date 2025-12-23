# GitHub Issue Templates Guide

이 디렉토리에는 프로젝트의 각 Phase별 GitHub 이슈 템플릿이 포함되어 있습니다.

## 📋 생성된 템플릿

### Phase 1: Project Setup
- `phase-1-1-initialize-project.md` - React + Vite 프로젝트 초기화
- `phase-1-2-install-dependencies.md` - 의존성 패키지 설치

### Phase 2: Core Logic (TDD)
- `phase-2-3-expression-evaluator.md` - 계산 엔진 구현 (TDD)

### Phase 3: UI Components
- `phase-3-1-button-component.md` - Button 컴포넌트 (수동 테스트)

### Phase 4: Testing
- `phase-4-2-e2e-testing.md` - E2E 테스트 (Playwright)

## 🚀 사용 방법

### 방법 1: GitHub 웹 인터페이스에서 수동 생성

1. GitHub 저장소로 이동
2. "Issues" 탭 클릭
3. "New issue" 클릭
4. 템플릿 선택
5. 내용 확인 후 "Submit new issue" 클릭

### 방법 2: GitHub CLI로 일괄 생성

```bash
# GitHub CLI 설치 확인
gh --version

# 저장소 디렉토리로 이동
cd calculcator-demo

# 템플릿에서 이슈 생성 (예시)
gh issue create --title "[Setup] Initialize React + Vite Project" \
  --body-file .github/ISSUE_TEMPLATE/phase-1-1-initialize-project.md \
  --label "setup,P0"

# 또는 스크립트로 일괄 생성 (아래 스크립트 참조)
```

### 방법 3: 스크립트로 자동 생성

`create-issues.sh` 스크립트를 사용하여 모든 이슈를 한 번에 생성할 수 있습니다.

```bash
chmod +x .github/scripts/create-issues.sh
./.github/scripts/create-issues.sh
```

## 📝 템플릿 구조

각 템플릿은 다음 섹션을 포함합니다:

1. **작업 배경 (Background)**: 왜 이 작업이 필요한지
2. **작업 내용 (Tasks)**: 구체적인 체크리스트
3. **인수 조건 (Acceptance Criteria)**: 완료 기준
4. **참고 자료 (References)**: 관련 문서 링크
5. **예상 시간 (Estimated Time)**: 작업 소요 시간

## 🏷️ 라벨 체계

- `setup`: 프로젝트 설정 관련
- `core-logic`: 핵심 로직 구현
- `ui`: UI 컴포넌트
- `component`: React 컴포넌트
- `testing`: 테스트 관련
- `TDD`: TDD 방법론 적용
- `e2e`: E2E 테스트
- `P0`: 최우선 순위 (Must Have)
- `P1`: 높은 순위 (Should Have)
- `P2`: 낮은 순위 (Nice to Have)

## 📌 추가 템플릿 생성

더 많은 Phase의 이슈 템플릿이 필요하면 기존 템플릿을 참고하여 동일한 형식으로 생성하세요.

### 템플릿 파일명 규칙
```
phase-{phase-number}-{task-number}-{task-name}.md
```

예시:
- `phase-2-4-number-formatter.md`
- `phase-3-2-display-component.md`
- `phase-5-1-pwa-configuration.md`

## 🔗 관련 문서

- [ROADMAP.md](../../docs/ROADMAP.md) - 전체 프로젝트 로드맵
- [TASKS.md](../../TASKS.md) - 세부 작업 체크리스트
- [TechSpec.md](../../docs/TechSpec.md) - 기술 명세서
