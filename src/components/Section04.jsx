import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StyledSection = styled.div`
  background-color: #f5f5f5;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 720px;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  z-index: 0.5; /* 텍스트보다 아래 */
`;

const TextContainer = styled(motion.div)`
  font-size: ${({ theme }) => theme.textStyle.P_M.fontSize}; /* 50px */
  font-weight: ${({ theme }) => theme.textStyle.P_M.fontWeight}; /* 600 */
  line-height: ${({ theme }) => theme.textStyle.P_M.LineHeight}; /* 68px */
  color: ${({ theme }) => theme.textStyle.P_M.color}; /* #323242 */
  max-width: 660px;
  text-align: center;
  position: absolute;
  bottom: 50%;
  transform: translate(-50%, 50%);
  z-index: 2; /* GIF 위로 올라오도록 설정 */
  white-space: pre-line; /* 줄 바꿈 유지 */
`;

const Section04 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // 한 번만 실행
    threshold: 0.1, // 10% 보이면 실행
  });

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setShowText(true);
      }, 1000);
    } else {
      setShowText(false); // 스크롤 벗어나면 다시 숨김
    }
  }, [inView]); // inView가 변할 때마다 실행

  return (
    <StyledSection ref={ref}>
      {/* GIF 애니메이션 (항상 보임) */}
      <LogoImage src="/assets/images/logo_collapse.gif" alt="설명1" />

      {/* 스크롤 감지 후 1초 뒤에 서서히 등장하는 텍스트 */}
      {showText && (
        <TextContainer
          initial={{ opacity: 0, y: 50 }} // 처음에는 숨김
          animate={{ opacity: 1, y: 0 }} // 부드럽게 위로 등장
          transition={{ duration: 1.5, ease: "easeOut" }} // 애니메이션 속도 조절
        >
          언어의 장벽을 부수고
          <br />
          Unoia에서
          <br />
          자유롭게 이야기를 나눠보세요!
        </TextContainer>
      )}
    </StyledSection>
  );
};

export default Section04;
