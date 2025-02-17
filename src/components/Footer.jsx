import React from "react";
import styled from "styled-components";
import FOOTER_IMAGE from '../assets/images/footer_pc.svg';

//푸터 스타일
const Nav = styled.nav`
  top: 0;
  width: 100%;
  height: auto;
  background-color: #EBEBF0; /* gray50 */
  display: flex;
  align-items: center;
  justify-content : center;
  z-index: 800;
`;

const Footer = () => {
  return (
        <Nav>
          <img id="THIS_IS_FOOTER" src={FOOTER_IMAGE} width="800" height="auto" />
        </Nav>
  );
};

export default Footer