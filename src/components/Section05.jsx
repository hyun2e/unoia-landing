import React from "react";
import Headline from "./Headline";
import styled from "styled-components";
import { motion } from "framer-motion";

import S05BackgroundImg from "../assets/images/S05_background_img.png";
import FeedImage from "../assets/images/S05_feed_before.png";
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
  justify-content: center;
  text-align: center;
`;

const TranslationIconWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  /* background-image: url("src/assets/images/S05_translation_icon.png");
  background-size: contain;
  background-repeat: no-repeat; */
`;

const TranslateIcon = styled.img`
  width: 100%;
`;

const FeedContainer = styled.div`
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`;

const Section05 = () => {
  return (
    <Section05Wrapper>
      <Headline
        title="AI 번역기술로 더 나은 소통을 경험하세요"
        title_width="480px"
        description="AI 기술을 활용한 맥락 기반 번역으로 언어의 장벽 뒤에 가려졌던 궁금증을 풀 수 있습니다."
        description_width="365px"
      />
      <TranslationIconWrapper
        // 요소가 50% 이상 보이면 애니메이션 시작, 한 번만 실행
        whileInView={{ scale: 3 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <TranslateIcon src={TranslateIconImg} alt="Translate" />
      </TranslationIconWrapper>
      <FeedContainer>
        <img src={FeedImage} alt="Feed Before" />
      </FeedContainer>
    </Section05Wrapper>
  );
};

export default Section05;
