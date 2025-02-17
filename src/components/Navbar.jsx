import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Navlogo from '../assets/images/H_logo.svg';

// NavBar 컨테이너 스타일
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.brown50};
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 800;
`;

const ContentsWrapper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

// 네비게이션 버튼 컨테이너
const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// 스크롤 링크 스타일
const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray400};
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.title5};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gray700};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.gray700};
  }
`;


const NavBar = () => {
  return (
    <Nav>
      <ContentsWrapper>
       <img src={Navlogo} width="120" height="auto" />
        <NavButtons>
          <NavLink href="#Section01">유노이아란?</NavLink>
          <NavLink href="#Section02">핵심기능</NavLink>
          <NavLink href="#Section09">후기</NavLink>

          {/* 다운로드 버튼 */}
          <Button type="nav-btn" as="a" href="#Unoiadownload">다운로드</Button>
        </NavButtons>
      </ContentsWrapper>
    </Nav>
  );
};

export default NavBar;