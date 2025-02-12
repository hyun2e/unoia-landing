// src/components/NavBar.jsx
import React from "react";
import styled from "styled-components";
import Button from "./Button";

// NavBar 컨테이너 스타일
const Nav = styled.nav`
  /* position이 fixed니까 스크롤을 내려도 navbar가 따라오겠죠? */
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(44, 62, 80, 0.9); /* 반투명 배경 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
`;

// 로고 스타일
const Logo = styled.div`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: bold;
`;

// 네비게이션 버튼 컨테이너
const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// 스크롤 링크 스타일
const NavLink = styled.a`
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none; /* a태그의 기본 밑줄 제거 */
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus {
    outline: none;
  }
`;

const NavBar = () => {
  return (
    // Nav에 flex를 주니까 자식 요소인 Logo와 NavButton이 가로 정렬 됩니다.
    <Nav>
      <Logo>MyLogo</Logo>
      {/* NavButtons 안의 버튼들도 가로 정렬 되어야하니 NavButtons에도 flex를 줍니다. */}
      <NavButtons>
        <NavLink href="#section1">섹션 1</NavLink>
        <NavLink href="#section2">섹션 2</NavLink>
        {/* 여기에 섹션 3으로 이동하는 NavLink를 추가해봅시다 */}
        <Button type="full-btn" href="https://www.naver.com">
          체험하기
        </Button>
      </NavButtons>
    </Nav>
  );
};

export default NavBar;
