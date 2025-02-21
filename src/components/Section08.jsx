import React, { useRef, useEffect } from "react";
import Headline from "./Headline";
import styled from "styled-components";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// SectionWrapper: 핀 효과를 위해 추가 스크롤 영역 제공
const SectionWrapper = styled.div`
  height: 300vh; /* 전체 스크롤 길이 (필요에 따라 조절) */
  position: relative;
`;

// StyledSection08: 100vh 높이 & 화면에 고정 (pin)
const StyledSection08 = styled.div`
  background-color: ${({ theme }) => theme.colors.brown50};
  overflow: hidden;
  height: 100vh;
  position: sticky;
  top: 0;
`;

// SideSlide: 애니메이션 대상 요소
const SideSlide = styled(motion.div)`
  background-color: ${({ theme, bgcolor }) => theme.colors[bgcolor]};
  border-radius: 14px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  position: absolute;
  width: 100%;

  h3 {
    margin: 300px 0 300px 40px;
    width: 300px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    text-align: right;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 90px;
  width: 362px;
  height: 610px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const Section08 = () => {
  // 실제 스크롤 되는 컨테이너에 ref 연결
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 두 번째 SideSlide:
  // 0%~33%: "90%" 고정
  // 33%~45%: "90%" -> "8%x" 선형 전환
  // 46%~65% 및 그 이후: "6%" 고정
  const secondSlideX = useTransform(
    scrollYProgress,
    [0, 0.33, 0.45, 0.65, 1],
    ["90%", "90%", "14%", "6%", "6%"]
  );
  // (부드러운 효과를 원하면 useSpring으로 감싸는 것도 고려)
  const smoothSecondSlideX = useSpring(secondSlideX, {
    damping: 20,
    stiffness: 100,
  });

  // 세 번째 SideSlide:
  // 0%~66%: "95%" 고정
  // 66%~85%: "95%" -> "14%" 선형 전환
  // 46%~65% 및 그 이후: "12%" 고정
  const thirdSlideX = useTransform(
    scrollYProgress,
    [0, 0.66, 0.85, 1],
    ["95%", "95%", "20%", "12%"]
  );
  const smoothThirdSlideX = useSpring(thirdSlideX, {
    damping: 20,
    stiffness: 100,
  });

  // scrollYProgress 값이 바뀔 때마다 콘솔에 출력 (디버깅용)
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll progress:", latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    // containerRef를 SectionWrapper에 연결
    <SectionWrapper ref={containerRef}>
      <StyledSection08>
        <Headline
          title="내가 만난 세계, 보관함에 저장!"
          title_width="330px"
          description="전 세계 친구들과 대화하는 경험을 요약하고 저장해 언제든 꺼내보세요."
          description_width="296px"
        />

        {/* 첫 번째 SideSlide: 고정 (x: 0) */}
        <SideSlide bgcolor="mint300">
          <h3>
            손쉽게 분류하는
            <br />
            앨범형 보관함
          </h3>
          <ImageWrapper>
            <img src="/assets/images/S08_Mock_up03.png" alt="Mock Up 03" />
          </ImageWrapper>
        </SideSlide>

        {/* 두 번째 SideSlide */}
        <SideSlide bgcolor="coral200" style={{ x: smoothSecondSlideX }}>
          <h3>
            다른 사람의 피드도,
            <br />
            내가 쓴 피드도 저장
          </h3>
          <ImageWrapper>
            <img src="/assets/images/S08_Mock_up04.png" alt="Mock Up 04" />
          </ImageWrapper>
        </SideSlide>

        {/* 세 번째 SideSlide */}
        <SideSlide bgcolor="purple200" style={{ x: smoothThirdSlideX }}>
          <h3>
            AI로 요약된 대화,
            <br /> 한 눈에 확인하는 내용
          </h3>
          <ImageWrapper>
            <img src="/assets/images/S08_Mock_up05.png" alt="Mock Up 05" />
          </ImageWrapper>
        </SideSlide>
      </StyledSection08>
    </SectionWrapper>
  );
};

export default Section08;
