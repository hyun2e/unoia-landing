// src/components/Button.js
import React from "react";
import styled from "styled-components";

// BlackButton 스타일 정의
const BlackButton = styled.a`
  display: inline-block;
  padding: 28px 60px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.title2};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: white;
  background-color: black;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.coral400};
  }
`;

// CoralButton 스타일 정의
const CoralButton = styled.a`
  display: inline-block;
  padding: 28px 60px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.title1};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: white;
  background-color: ${({ theme }) => theme.colors.coral400};
  border-radius: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.coral600};
    color: white;
  }
`;


// NavButton 스타일 정의
const NavButton = styled.a`
  display: inline-block;
  padding: 14px 26px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.default};
  color: white;
  background-color: ${({ theme }) => theme.colors.coral400};
  border-radius: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.coral600};
    color: white;
  }
`;



// Button 컴포넌트
// full-btn
const Button = ({ type, href, children }) => {
  switch (type) {
    case "black-btn":
      return (
        <BlackButton href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </BlackButton>
      );
    case "nav-btn":
    return (
      <NavButton href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </NavButton>
    );
    case "coral-btn":
    default:
      return (
        <CoralButton href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </CoralButton>
      );
  }
};

export default Button;
