import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const SectionContainer = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-image: url("/src/assets/images/S07_background_img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  text-align: center;
`;

const Section07 = () => {
  return (
    <SectionContainer> 
      <ContentWrapper>
        <Headline
        title="국경과 언어를 모두 넘어 우리의 궁금증을 실시간으로 나누는 곳!"
        title_width="650px"
        description="궁금한 거 있으면 물어도 보고, 핫이슈로 토크배틀도 하고!"
        description_width="500px"
      />
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Section07;
