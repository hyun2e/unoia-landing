// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardWoff2 from "../assets/fonts/PretendardVariable.woff2";

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Pretendard Variables 폰트 정의 */
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardWoff2}) format('woff2');
    font-weight: 1 999; /* 변수 폰트 */
    font-style: normal;
    font-display: swap;
  }

  /* 콘텐츠, 패딩, 보더를 모두 포함하여 컨텐츠 크기를 잡기 위해 모든 요소에 box-sizing: border-box 적용 */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    /* 섹션 이동시 스크롤 될 때 부드러운 애니메이션을 추가해주는 속성이에요 */
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

`;

export default GlobalStyle;
