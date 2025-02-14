import React from "react";
import styled from "styled-components";
import Button from "./Button";

// NavBar 컨테이너 스타일
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #F6F2EF; /* brown50 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 800;
`;

// 네비게이션 버튼 컨테이너
const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// 스크롤 링크 스타일
const NavLink = styled.a`
  color: #494960;
  font-family: 'NotoSans', sans-serif;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #323242;
  }

  &:focus {
    outline: none;
  }
`;


const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo src="src/assets/images/H_logo.png" alt="MyLogo" /> {/* ✅ import한 이미지 적용 */}
      <NavButtons>
        <NavLink href="#Section01">유노이아란?</NavLink>
        <NavLink href="#Section02">핵심기능</NavLink>
        <NavLink href="#Section09">후기</NavLink>

        {/* 다운로드 버튼 */}
        <Button as="a" href="#Unoiadownload">다운로드</Button>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;