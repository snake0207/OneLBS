# gpss-admin project

# Code Convention

코드 작성 규칙입니다.

## 명명 규칙

### 변수

-   소문자로 시작하는 카멜케이스 형태로 작성한다.
-   환경변수 같은 상수값의 경우는 모두 대문자로 작성하며 단어 구분은 '\_'를 사욯한다.
-   boolean 변수는 접수다로 is를 사용한다.
-   배열 변수는 복수형을 사용한다.
-   배열 변수외의 Map, Set과 같은 컬렉션 변수는 형식을 접미사로 사용한다. (ex. userMap)
-   임시로 사용되는 변수에는 i, j, k, v 등 짧은 변수명을 사용한다.

### 함수

-   화살표 함수를 사용해서 구현한다.
-   컴포넌트 외의 함수는 소문자로 시작하며 카멜케이스 형태로 작성한다.
-   mothod의 행위를 유추할 수 있는 동사를 포함한다. (ex. getName())
-   API 연동의 경우 http method + action + 설명으로 명칭을 정한다.
    -   action의 경우 조회(get), 수정(update), 삭제(delete)로 한다. mothod와 action이 겹치는 경우 하나만 사용한다.
-   Boolean 타입의 응답을 반환하는 함수는 접두사로 is를 사용한다.
-   이벤트 함수는 handle + action + name 으로 구성한다. (ex. handleClickButton)

## Code formmat

-   prettier, eslint로 규칙 통일.
-   세미콜론은 작성하지 않는다.
-   single quote를 사용한다.
-   4 depth를 사용한다.
-   한줄로 표현되는 if, else 구문은 한 줄로 처리한다.
-   화살표 함수에서 매개변수가 하나여도 괄호로 감싸준다.

## 주석

기본적으로 "//"을 주석으로 사용하지만 다른 개발자의 이해가 필요한 복잡한 함수의 경우 함수 정의부분에 jsDoc 주석을 사용한다.

-   설명
-   @param 입력 파라미터
-   @return 결과 반환값
-   @throws 에러처리

# Code Guide

코드 작성시 참고해야하는 사항입니다.

## Global Style

전역 스타일링은 GlobalStyles 파일에 작성합니다.

## contents 디렉토리

2곳 이상에서 사용해야하는 상수값, 유틸함수등 변하지 않는 값들을 관리합니다.

## Modal

common에 존재하는 modal 디렉토리 아래에 도메인별로 분리하여 구현합니다.

1. contents/constant.js 파일에 MODAL_TITLE을 추가합니다.
2. GlobalModal.jsx 파일에 MODAL_COMPONENT_ARR의 값을 추가합니다. 여기서 component는 구현된 modal 콘텐츠 컴포넌트입니다.
3. modalStore.js의 useModalStore를 사용해 modal을 전역적으로 사용할 수 있습니다.

## Zustand

아래 글을 참고해서 store를 생성합니다. 도메인에 따라서 세부적으로 분리합니다.

[Working with Zustand](https://tkdodo.eu/blog/working-with-zustand)

[한국어 번역](https://hyunjinee.notion.site/Working-with-Zustand-73c2d6bbb53d4c6e9944ddc5e23706a1)

## providers

1. components/providers 디렉토리 아래에 provider 컴포넌트를 구현합니다.
2. provider 추가시 루트 컴포넌트인 main.jsx에서 사용합니다.

이렇게 구현하면 provider에 주입이 필요한 값들을 React를 통해서 관리가 가능하고 동시에 루트 컴포넌트를 감싸서 사용할 수 있습니다.

> provider를 감싸는 순서에 주의해야 합니다.

# VS Code extension 추천

## Auto Import - ES6, TS, JSX, TSX

컴포넌트, 유틸함수등 이름을 작성하면 자동으로 import 경로를 추천해준다.

## Auto Rename Tag

html 태그의 이름 변경시 닫는 태그의 이름도 같이 변경된다.

## ESLint

eslintrc.cjs 파일에 작성된 규칙을 VS Code에 적용시켜준다.

## Prettier - Code formatter

prettierrc.cjs 파일에 작성된 규칙을 VS Code에 적용, 저장 시 자동 포멧팅, 문법 오류 수정 등을 제공한다.

## Git Graph

연결된 레포지토리의 내역을 그래프로 보여준다.

## GitLens -- Git supercharged

해당 코드를 누가 작성했는지 알 수 있다.

## vscode-styled-components

styled component 사용시 css코드에 대한 자동완성 기능을 제공한다.
