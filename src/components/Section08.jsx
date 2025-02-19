import React from "react";
import Headline from "./Headline";
import styled from "styled-components";
import { motion } from "framer-motion";

// styled-components 부분
const StyledSection08 = styled.div`
  background-color: ${({ theme }) => theme.colors.brown50};
  overflow: hidden;
  padding-bottom: 700px;
  position: relative;  // 부모 요소에 relative 추가
`;

const SideSlide = styled(motion.div)`
  background-color: ${({ theme, bgcolor }) => theme.colors[bgcolor]};
  border-radius: 14px 0px 0px 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;

  position: absolute;  // absolute로 설정하여 겹치게 함

  width: 100%;          // 너비 고정 (부모 요소에 맞게)
  height: 100%;         // 높이 고정 (부모 요소에 맞게)

  h3 {
    margin: 300px 0px 300px 40px;
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
  return (
    <StyledSection08>
      <Headline
        title="내가 만난 세계, 보관함에 저장!"
        title_width="330px"
        description="전 세계 친구들과 대화하는 경험을 요약하고 저장해 언제든 꺼내보세요."
        description_width="296px"
      />
      
      {/* 첫 번째 SideSlide */}
      <SideSlide
        bgcolor="mint300"
      >
        <h3>손쉽게 분류하는<br />앨범형 보관함</h3>
        <ImageWrapper>
          <img src="src/assets/images/S08_Mock_up03.png" />
        </ImageWrapper>
      </SideSlide>

      {/* 두 번째 SideSlide (첫 번째 완료 후 시작) */}
      <SideSlide
        bgcolor="coral200"
        initial={{ x: "90%" }}
        whileInView={{ x: "100px" }}  // 두 번째는 약간 덜 이동하도록 수정
        transition={{ duration: 1, delay: 1 }}  // 1초 후 애니메이션 시작
      >
        <h3>다른 사람의 피드도,<br />내가 쓴 피드도 저장</h3>
        <ImageWrapper>
          <img src="src/assets/images/S08_Mock_up04.png" />
        </ImageWrapper>
      </SideSlide>

      {/* 세 번째 SideSlide (두 번째 완료 후 시작) */}
      <SideSlide
        bgcolor="purple200"
        initial={{ x: "95%" }}
        whileInView={{ x: "200px" }}  // 세 번째는 더 덜 이동하도록 수정
        transition={{ duration: 1, delay: 2 }}  // 2초 후 애니메이션 시작
      >
        <h3>AI로 요약된 대화, <br /> 한 눈에 확인하는 내용</h3>
        <ImageWrapper>
          <img src="src/assets/images/S08_Mock_up05.png" />
        </ImageWrapper>
      </SideSlide>

    </StyledSection08>
  );
};

export default Section08;
