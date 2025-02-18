import React, { useState, useEffect } from "react";
import Headline from "./Headline";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";

import S05BackgroundImg from "../assets/images/S05_background_img.png";
import FeedImage from "../assets/images/S05_feed_before.png";


const Section05Wrapper = styled.div`
  background-image: url(${S05BackgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column; /* Stacking elements vertically */
  align-items: center;
  justify-content: center;
  text-align: center; /* Optional: center-align text in the section */
`;

const TranslationIconWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-image: url("../assets/images/S05_translation_icon.png");
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
`;

const FeedContainer = styled.div`
  width: 720px;
  height: auto; // Set your preferred height
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px; // Adds space between headline and feed image
`;

const Section05 = () => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll tracking hook from framer-motion
  const { scrollYProgress } = useScroll();

  // Update scrollY value when the user scrolls
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latestScrollY) => {
      setScrollY(latestScrollY * 100); // Convert to percentage
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Section05Wrapper>
      <Headline
        title="AI 번역기술로 더 나은 소통을 경험하세요"
        title_width="480px"
        description="AI 기술을 활용한 맥락 기반 번역으로 언어의 장벽 뒤에 가려졌던 궁금증을 풀 수 있습니다."
        description_width="365px"
      />
      <TranslationIconWrapper
        animate={{
          scale: 1 + scrollY / 1000, // Scale based on scroll progress
          backgroundColor: `rgba(128, 0, 128, ${scrollY / 100})`, // Change to purple with scroll
        }}
      />
      <FeedContainer>
        <img src={FeedImage} alt="Feed Before" />
      </FeedContainer>
    </Section05Wrapper>
  );
};

export default Section05;
