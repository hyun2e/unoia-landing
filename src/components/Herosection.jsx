import React from "react";
import styled from "styled-components";
import Button from "./Button";
import heroImage from "../assets/images/hero_img.png"; 

const HeroSectionWrapper = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  max-width: 400px;
  color: white;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  color: white;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const Herosection = () => {
  return (
    <HeroSectionWrapper>
      <ContentWrapper>
        <div>
          <Title>언어를 잊고 대화를 잇다</Title>
          <Subtitle>You know? We know</Subtitle>
        </div>
        <Button>지금 바로 대화하러 가기</Button>
      </ContentWrapper>
    </HeroSectionWrapper>
  );
};

export default Herosection;
