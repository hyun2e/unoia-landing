import React, { useRef, useEffect } from 'react';
import bgImage from '../assets/images/S03_background_img.png'; // 경로 확인 필수!
import mockup1 from '../assets/images/S03_Mock_up01.png'; // ✅ 이미지 import
import mockup2 from '../assets/images/S03_Mock_up02.png'; // ✅ 이미지 import
import styled from 'styled-components';
import { motion, useAnimation, useInView } from "framer-motion";

const StyledSection03 = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  position: relative;
  z-index: -100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MockupImageBack = styled(motion.img)`
  position: absolute;
  z-index: -1;
`;

const MockupImageFront = styled(motion.img)`
  padding: 114px 0px;
`;

const Section03 = () => {
  const sectionRef = useRef(null);
  const controlsBack = useAnimation();
  const controlsFront = useAnimation();
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        controlsBack.start({ x: -120, rotate: -12, transition: { duration: 0.5 } });
        controlsFront.start({ x: 80, rotate: 12, transition: { duration: 0.5 } });
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isInView, controlsBack, controlsFront]);

  return (
    <StyledSection03 ref={sectionRef}>
        <MockupImageBack 
          initial={{ x: 0, rotate: 0 }} 
          animate={controlsBack} 
          src={mockup1} 
          alt="mockup1" 
        />
        <MockupImageFront 
          initial={{ x: 0, rotate: 0 }} 
          animate={controlsFront} 
          src={mockup2} 
          alt="mockup2" 
        />
    </StyledSection03>
  );
};

export default Section03;
