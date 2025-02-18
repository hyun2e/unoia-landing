import React from "react";
import styled from "styled-components";
import Button from "./Button";

const UnoiadownloadWrapper = styled.div`
  background-color: "#F6F2EF";//brown50
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
          <Title>지금까지 총 000명이<br / >
          다운로드 버튼을 눌러주셨어요</Title>
          <Subtitle>You know? We know</Subtitle>
        </div>
            <Button type="nav-btn" as="a" href="#Section01">
                다운로드
            </Button>
      </ContentWrapper>
    </HeroSectionWrapper>
  );
};

export default Unoiadownload;