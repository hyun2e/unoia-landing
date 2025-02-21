import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const SectionContainer = styled.section`
  width: 100%;
  height: 1080px;
  color: white;
  position: relative; // 비디오를 배경처럼 사용하기 위해 상대 위치 지정
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1; // 텍스트 위에 오지 않도록 뒤로 보내기
`;

const Section07 = () => {
  return (
    <SectionContainer>
      <Headline
        title="국경과 언어를 모두 넘어 우리의 궁금증을 실시간으로 나누는 곳!"
        title_width="650px"
        description="궁금한 거 있으면 물어도 보고, 핫이슈로 토크배틀도 하고!"
        description_width="500px"
      />
      <BackgroundVideo
        src={"/assets/images/section07.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
    </SectionContainer>
  );
};

export default Section07;
