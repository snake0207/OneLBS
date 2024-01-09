# ccs-admin

# 코드 가이드

코드 작성시 참고해야하는 사항입니다.

## global style

전역 스타일링은 GlobalStyles 파일에 작성합니다.

## contents 디렉토리

2곳 이상에서 사용해야하는 상수값, 유틸함수등 변하지 않는 값들을 관리합니다.

## modal

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
