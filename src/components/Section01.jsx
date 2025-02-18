import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const SectionContainer = styled.div`
  background-color: #E8E3FC;
  background-position: center;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 300px 0;
  overflow: hidden;
  z-index: 0;
`;

const pendulumAnimation = {
  animate: {
    rotate: [-5, 5, -5], // 시계추처럼 좌우로 흔들리는 애니메이션
    transition: {
      duration: 4, // 4초 동안 한 사이클
      repeat: Infinity, // 무한 반복
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const BgImg1 = styled(motion.img)`
  position: absolute;
  top: 2%;
  left: 7%;
  z-index: -1;
  transform-origin: center; /* 중심축 기준 회전 */
`;

const BgImg2 = styled(motion.img)`
  position: absolute;
  top: 30%;
  left: 55%;
  z-index: -1;
  transform-origin: center;
`;

const BgImg3 = styled(motion.img)`
  position: absolute;
  top: 60%;
  left: -3%;
  z-index: -1;
  transform-origin: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 170px;
`;

const Section01 = () => {
  return (
    <SectionContainer>
      <BgImg1 src="src/assets/images/S01_object03.png" {...pendulumAnimation} />
      <BgImg2 src="src/assets/images/S01_object02.png" {...pendulumAnimation} />
      <BgImg3 src="src/assets/images/S01_object01.png" {...pendulumAnimation} />

      <TextContainer>
        <div>
          <h2 style={{ marginBottom: "20px" }}>
            Emily in Paris를 보고
            <br />
            진짜 프랑스인이 저렇게 생각하는지
            <br />
            궁금했던 적,
          </h2>
          <p style={{ marginTop: "0" }}>
            해당 주제는 AI가 집계한
            <br />
            최근 Unoia 핫이슈 Top3입니다(25년 3월 기준)
          </p>
        </div>

        <div>
          <h2 style={{ marginBottom: "20px" }}>
            다른 나라의 2030의
            <br />
            갓생이 궁금했던 적,
          </h2>
          <p style={{ marginTop: "0" }}>
            해당 주제는 AI가 집계한
            <br />
            최근 Unoia 핫이슈 Top3입니다(25년 3월 기준)
          </p>
        </div>

        <div>
          <h2 style={{ marginBottom: "20px" }}>
            트럼프 당선 이후 뉴스 말고
            <br />
            진짜 다른 나라 20대의
            <br />
            생각이 궁금했던 적,
          </h2>
          <p style={{ marginTop: "0" }}>
            해당 주제는 AI가 집계한 <br />
            최근 Unoia 핫이슈 Top3입니다(25년 3월 기준)
          </p>
        </div>

        <div>
          <h2>있으신가요?</h2>
        </div>
      </TextContainer>
    </SectionContainer>
  );
};

export default Section01;
