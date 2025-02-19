import styled from "styled-components";
import { motion } from "framer-motion";

import Headline from "./Headline";
import S05BackgroundImg from "../assets/images/S05_background_img.png";
import FeedBefore from "../assets/images/S05_feed_before.png";
import FeedAfter from "../assets/images/S05_feed_after.png";
import TranslateIconPurpleImg from "../assets/images/S05_translation_icon_purple.png"; // 보라색 아이콘 사용

const SectionWrapper = styled.div`
  background-image: url(${S05BackgroundImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Section05 = () => {
  return (
    <SectionWrapper>
      <Headline
        title="AI 번역 기술로 더 나은 소통을 경험하세요"
        title_width="480px"
        description="AI 기술을 활용한 맥락 기반 번역으로 언어의 장벽 뒤에 가려졌던 궁금증을 풀 수 있습니다."
        description_width="365px"
      />

      <ImageContainer>
        {/* 번역 아이콘 애니메이션 (처음부터 보라색) */}
        <TranslationIconWrapper
          initial={{ scale: 1, opacity: 1 }} // filter 제거
          whileInView={{
            scale: [1, 10, 1],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.6 }}
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
          transition={{ duration: 2.0, delay: 1.4 }}
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
  );
};

export default Section05;
