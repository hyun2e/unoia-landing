<<<<<<< HEAD
=======
import React, { useState, useEffect } from "react";
import Headline from "./Headline";
>>>>>>> 5785c75b9c4223c11cc1f7500b045b06d87ae837
import styled from "styled-components";
import { motion } from "framer-motion";

import Headline from "./Headline";
import S05BackgroundImg from "../assets/images/S05_background_img.png";
<<<<<<< HEAD
import FeedBefore from "../assets/images/S05_feed_before.png";
import FeedAfter from "../assets/images/S05_feed_after.png";
import TranslateIconPurpleImg from "../assets/images/S05_translation_icon_purple.png"; // 보라색 아이콘 사용
=======
import FeedBeforeImage from "../assets/images/S05_feed_before.png";
import FeedAfterImage from "../assets/images/S05_feed_after.png";
import TranslateIconImg from "../assets/images/S05_translation_icon.png";
>>>>>>> 5785c75b9c4223c11cc1f7500b045b06d87ae837

const SectionWrapper = styled.div`
  background-image: url(${S05BackgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
<<<<<<< HEAD
  position: relative;
`;

const ImageContainer = styled.div`
  margin-top: 25px;
  width: 85%;
  max-width: 650px;
  position: relative;
  min-height: 500px;
`;

const FeedImage = styled(motion.img)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
`;

const TranslationIconWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 150px;
  right: 10%;
  transform: translateY(30%);
  z-index: 10;
`;

const TranslateIcon = styled.img`
  width: 100%;
`;

=======
  justify-content: flex-start;
  text-align: center;
  position: relative;
  overflow: hidden; /* To ensure content does not go beyond the section */
`;

const FeedContainer = styled.div`
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 120px; /* Increased margin to avoid overlap with description */
`;

const FeedImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: auto;
`;

const AnimatedFeedContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px; /* Adjusted margin to avoid overlap with description */
`;

>>>>>>> 5785c75b9c4223c11cc1f7500b045b06d87ae837
const Section05 = () => {
  const [cursorInMiddle, setCursorInMiddle] = useState(false);
  
  // Track cursor position
  const handleMouseMove = (e) => {
    const section = document.getElementById("section05");
    const sectionRect = section.getBoundingClientRect();
    const cursorPosition = e.clientY - sectionRect.top;

    // Check if cursor is around the middle of the section
    if (cursorPosition > sectionRect.height / 2 - 50 && cursorPosition < sectionRect.height / 2 + 50) {
      setCursorInMiddle(true);
    } else {
      setCursorInMiddle(false);
    }
  };

  // Attach mousemove event listener to track cursor position
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
<<<<<<< HEAD
    <SectionWrapper>
=======
    <Section05Wrapper id="section05">
>>>>>>> 5785c75b9c4223c11cc1f7500b045b06d87ae837
      <Headline
        title="AI 번역 기술로 더 나은 소통을 경험하세요"
        title_width="480px"
        description="AI 기술을 활용한 맥락 기반 번역으로 언어의 장벽 뒤에 가려졌던 궁금증을 풀 수 있습니다."
        description_width="365px"
      />

<<<<<<< HEAD
      <ImageContainer>
        {/* 번역 아이콘 애니메이션 (처음부터 보라색) */}
        <TranslationIconWrapper
          initial={{ scale: 1, opacity: 1 }} // filter 제거
          whileInView={{
            scale: [1, 10, 1],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.4 }}
          viewport={{ amount: 0.5 }}
        >
          <TranslateIcon src={TranslateIconPurpleImg} alt="Translate" />
        </TranslationIconWrapper>

        {/* Before → After 이미지 변경 (아이콘 애니메이션 이후 변경) */}
        <FeedImage
          src={FeedBefore}
          alt="Feed Before"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ amount: 0.5 }}
        />
        <FeedImage
          src={FeedAfter}
          alt="Feed After"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ amount: 0.5 }}
        />
      </ImageContainer>
    </SectionWrapper>
=======
      {/* Feed Section Moves Down */}
      <AnimatedFeedContainer
        initial={{ y: 0 }}
        animate={{ y: cursorInMiddle ? 60 : 0 }} // Move downward by 100px when cursor is in the middle
        transition={{ duration: 0.5 }}
      >
        <FeedContainer>
          {/* Feed Before */}
          <FeedImage
            src={FeedBeforeImage}
            alt="Feed Before"
            initial={{ opacity: 1 }}
            animate={{ opacity: cursorInMiddle ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Feed After */}
          <FeedImage
            src={FeedAfterImage}
            alt="Feed After"
            initial={{ opacity: 0 }}
            animate={{
              opacity: cursorInMiddle ? 1 : 0, // Fade in only when cursor is in the middle
            }}
            transition={{ duration: 0.5 }}
          />
        </FeedContainer>
      </AnimatedFeedContainer>
    </Section05Wrapper>
>>>>>>> 5785c75b9c4223c11cc1f7500b045b06d87ae837
  );
};

export default Section05;
