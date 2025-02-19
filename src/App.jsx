// src/App.jsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Slider from "./components/Slider";
import NavBar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Section06 from "./components/Section07";
import Section07 from "./components/Section06";
import Section08 from "./components/Section08";
import Section09 from "./components/Section09";
import Section10 from "./components/Section10";
import Footer from "./components/Footer";

// 예시 슬라이드 데이터: src 값으로 정적인 이미지 URL을 사용합니다.
const slidesHero = [
  { src: "src/assets/images/hero01.png", content: "Slide 1" },
  { src: "https://placehold.co/600x400/blue/yellow", content: "Slide 2" },
  { src: "https://placehold.co/600x400/green/black", content: "Slide 3" },
  { src: "https://placehold.co/600x400/red/white", content: "Slide 4" },
  { src: "https://placehold.co/600x400/red/white", content: "Slide 5 - sh" },
];

const slidesSection = [
  { src: "https://placehold.co/600x400/orange/black", content: "Slide 1" },
  { src: "https://placehold.co/600x400/black/white", content: "Slide 2" },
];

const Section = styled.section`
  height: 500px;
  background-color: ${({ $bgColor }) => $bgColor || "#1d94d9"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    font-size: 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1920px;
  margin: auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <ContentWrapper>
          <NavBar />
          {/* 만든 섹션 컴포넌트 추가 */}
          <Herosection />
          <div id="introduce">
            <Section01 />
          </div>
          <Section02 />
          <Section03 />
          <Section04 />
          <div id="keyFeatures">
            <Section05 />
          </div>
          <Section06 />
          <Section07 />
          <Section08 />
          <div id="review">
            <Section09 />
          </div>
          <Section10 />
          <Footer />
        </ContentWrapper>
        {/* 추가 섹션 필요 시 추가 */}
      </>
    </ThemeProvider>
  );
};

export default App;
