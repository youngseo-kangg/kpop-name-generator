import * as eslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import unusedImports from "eslint-plugin-unused-imports";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      // 빌드 출력 디렉토리
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      // 기타 제외할 디렉토리/파일
      "node_modules/**",
      "**/*.config.js",
      "**/*.config.mjs",
      "coverage/**",
    ],
    plugins: {
      "@typescript-eslint": eslint,
      "@next/next": nextPlugin,
      "unused-imports": unusedImports,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // var 키워드 사용 허용 (예: var x = 1;)
      "no-var": "error",

      // 기본 미사용 변수 검사 비활성화 (TypeScript 버전으로 대체)
      "no-unused-vars": "off",

      // 사용하지 않는 변수 에러 처리 (예: const x = 1; // x를 사용하지 않으면 에러)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // var를 const/let으로 변환
      "prefer-const": [
        "error",
        {
          destructuring: "all",
          ignoreReadBeforeAssign: true,
        },
      ],

      // any 타입 사용시 경고 (예: let x: any = 1;)
      "@typescript-eslint/no-explicit-any": "warn",

      // 함수 반환 타입 명시하지 않을 때 경고 (예: function foo() { return 1; })
      "@typescript-eslint/explicit-function-return-type": "off",

      // 외부로 노출되는 함수/클래스의 타입 명시하지 않을 때
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // 빈 인터페이스 선언시 경고 (예: interface Foo {})
      "@typescript-eslint/no-empty-interface": "warn",

      // 타입 추론이 가능한데 명시적 타입 지정시 경고 (예: let x: number = 1;)
      "@typescript-eslint/no-inferrable-types": "warn",

      // console.log() 사용 경고
      "no-console": "warn",

      // debugger 구문 사용 금지
      "no-debugger": "error",

      // 선언되지 않은 변수 사용 금지
      "no-undef": "error",

      // 중복 import 금지
      "no-duplicate-imports": "error",

      // 1. 기본 React 규칙
      "react/prop-types": "off", // TypeScript 사용시 불필요
      "react/react-in-jsx-scope": "off", // React 17 이상에서 불필요
      "react/jsx-curly-brace-presence": ["error", "never"], // JSX에서 불필요한 중괄호 금지

      // 컴포넌트 규칙
      "react/function-component-definition": [
        "error",
        {
          // 함수형 컴포넌트 정의 방식 통일
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-pascal-case": "error", // 컴포넌트 이름은 PascalCase로
      "react/jsx-no-useless-fragment": "error", // 불필요한 Fragment 사용 금지
      "react/jsx-key": "error", // 반복문에서 key prop 필수
      "react/jsx-no-duplicate-props": "error", // 중복 prop 금지

      // Hooks 규칙
      "react-hooks/rules-of-hooks": "error", // Hooks 규칙 준수
      "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 배열 검사

      // 접근성 규칙
      "jsx-a11y/alt-text": "error", // img 태그에 alt 속성 필수
      "jsx-a11y/aria-props": "error", // 올바른 aria 속성 사용
      "jsx-a11y/role-has-required-aria-props": "error", // role에 필요한 aria 속성 확인

      // 성능 관련 규칙
      "react/no-array-index-key": "warn", // 배열 인덱스를 key로 사용하지 않기
      "react/jsx-no-bind": [
        "warn",
        {
          // 렌더링시 새로운 함수 생성 방지
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
        },
      ],

      // 코드 스타일
      "react/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ], // 여러 줄일 때 prop 한 줄에 하나
      "react/jsx-first-prop-new-line": ["error", "multiline"], // 여러 prop일 때 첫 prop 새 줄에
      "react/jsx-closing-bracket-location": ["error", "line-aligned"], // JSX 닫는 괄호 위치
      "react/jsx-wrap-multilines": [
        "error",
        {
          // 여러 줄 JSX 괄호 처리
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],

      // Promise 관련 규칙
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",

      // === 2. Next.js 관련 규칙들 ===
      // 라우팅 및 네비게이션
      "@next/next/no-html-link-for-pages": "error", // 내부 라우팅에 <a> 대신 Link 사용
      "@next/next/no-sync-scripts": "error", // 동기 스크립트 사용 금지

      // 이미지 최적화
      "@next/next/no-img-element": "error", // <img> 대신 next/image의 Image 사용
      "@next/next/no-unwanted-polyfillio": "error", // 불필요한 Polyfill 방지

      // 성능 최적화
      "@next/next/no-css-tags": "error", // <link rel="stylesheet"> 대신 내장 CSS 지원 사용
      "@next/next/google-font-display": "error", // 구글 폰트 최적화
      "@next/next/google-font-preconnect": "error", // 구글 폰트 preconnect 설정

      // 페이지 최적화
      "@next/next/no-page-custom-font": "error", // 페이지별 폰트 로드 방지
      "@next/next/no-title-in-document-head": "error", // _document에서 <title> 사용 금지
      "@next/next/no-head-element": "error", // <head> 대신 next/head의 Head 사용

      // 서버 사이드
      "@next/next/no-script-component-in-head": "error", // next/head 내 Script 컴포넌트 사용 금지

      // 개발 환경
      "@next/next/no-typos": "error", // Next.js 관련 타이핑 오류 방지

      // 배포 최적화
      "@next/next/inline-script-id": "error", // 인라인 스크립트에 nonce 또는 id 필수
      "@next/next/no-assign-module-variable": "error", // module.exports 할당 금지

      // 실험적 기능
      "@next/next/no-before-interactive-script-outside-document": "error", // beforeInteractive 스크립트 위치 제한

      // 사용하지 않는 import 자동 제거
      "unused-imports/no-unused-imports": "error",
    },
  },
];
