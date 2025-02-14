// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import NotoSansWoff2 from "../assets/fonts/NotoSansKR-Variable.woff2";

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Pretendard Variables 폰트 정의 */
  @font-face {
    font-family: 'NotoSans';
    src: url(${NotoSansWoff2}) format('woff2');
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
    font-family: 'NotoSans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  h1 {
    font-size: 75px;
    font-weight: 600;
    line-height: 124px;
    color: ${({ theme }) => theme.colors.gray700};
  }

  h2 {
font-size: 50px;
font-weight: 600;
line-height: 68px;
color: ${({ theme }) => theme.colors.gray700};
}

h3 {
font-size: 32px;
font-weight: 400;
line-height: 48px;
color: ${({ theme }) => theme.colors.gray600};
}

p {
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray600};
}
`;  


export default GlobalStyle;