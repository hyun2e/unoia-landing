// src/components/Button.js
import React from "react";
import styled from "styled-components";

// FullButton 스타일 정의
const FullButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

// OutlineButton 스타일 정의
const OutlineButton = styled.a`
  display: inline-block;
  padding: 10px 22px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;

// Button 컴포넌트
// full-btn
const Button = ({ type, href, children }) => {
  switch (type) {
    case "outline-btn":
      return (
        <OutlineButton href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </OutlineButton>
      );
    case "full-btn":
    default:
      return (
        <FullButton href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </FullButton>
      );
  }
};

export default Button;
