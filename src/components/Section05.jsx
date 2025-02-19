import React, { useState, useEffect } from "react";
import Headline from "./Headline";
import styled from "styled-components";
import { motion } from "framer-motion";

import S05BackgroundImg from "../assets/images/S05_background_img.png";
import FeedBeforeImage from "../assets/images/S05_feed_before.png";
import FeedAfterImage from "../assets/images/S05_feed_after.png";
import TranslateIconImg from "../assets/images/S05_translation_icon.png";

const Section05Wrapper = styled.div`
  background-image: url(${S05BackgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <Section05Wrapper id="section05">
      <Headline
        title="AI 번역기술로 더 나은 소통을 경험하세요"
        title_width="480px"
        description="AI 기술을 활용한 맥락 기반 번역으로 언어의 장벽 뒤에 가려졌던 궁금증을 풀 수 있습니다."
        description_width="365px"
      />

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
  );
};

export default Section05;
