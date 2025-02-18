import React from 'react';
import bgImage from '../assets/images/S03_background_img.png'; // 경로 확인 필수!
import styled from 'styled-components';

const StyledSection03 = styled.div`
  background-image: url(${bgImage});
  background-position: center;

  position: relative;
  z-index: -100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MockupImageBack = styled.img`
  position: absolute;
  transform: rotate(-16deg) translate(-180px, -30px);
  z-index: -1;
`;

const MockupImageFront = styled.img`
  padding: 114px 0px;
`;

const Section03 = () => {
  return (
    <StyledSection03>
        <MockupImageBack src="src/assets/images/S03_Mock_up01.png" alt="mockup1" />
        <MockupImageFront src="src/assets/images/S03_Mock_up02.png" alt="mockup2" />
    </StyledSection03>
  );
};

export default Section03;