import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const StyledSection03 = styled.div`
  background-image: url("../assets/images/S03_background_img.png");
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
  const isInView = useInView(sectionRef, { once: false }); // ❗️ `once: false` → 스크롤할 때마다 반복 실행

  useEffect(() => {
    if (isInView) {
      controlsBack.start({
        x: -120,
        rotate: -12,
        transition: { duration: 0.5 },
      });
      controlsFront.start({ x: 80, rotate: 12, transition: { duration: 0.5 } });
    } else {
      // 🔄 원래 위치로 되돌려서 다시 애니메이션 실행 가능하게 설정
      controlsBack.start({ x: 0, rotate: 0, transition: { duration: 0.5 } });
      controlsFront.start({ x: 0, rotate: 0, transition: { duration: 0.5 } });
    }
  }, [isInView, controlsBack, controlsFront]); // `isInView`가 바뀔 때마다 실행

  return (
    <StyledSection03 ref={sectionRef}>
      <MockupImageBack
        initial={{ x: 0, rotate: 0 }}
        animate={controlsBack}
        src={"/assets/images/S03_Mock_up01.png"}
        alt="mockup1"
      />
      <MockupImageFront
        initial={{ x: 0, rotate: 0 }}
        animate={controlsFront}
        src={"/assets/images/S03_Mock_up02.png"}
        alt="mockup2"
      />
    </StyledSection03>
  );
};

export default Section03;
