import React from "react";
import styled from "styled-components";

const CardWapper = styled.div`
  width: 166px;
  height: 248px;
  margin: 6px 0px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.67%, rgba(0, 0, 0, 0.80) 100%), url(${({ src }) => src}) lightgray 50%;
  box-shadow: 0px 0px 0px 0.667px rgba(0, 0, 0, 0.20), 0px 0px 1.334px 0px rgba(0, 0, 0, 0.08), 0px 1.334px 4.002px 0px rgba(0, 0, 0, 0.10);

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.body2};
    line-height: ${({ theme }) => theme.lineHeights.body2};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: white;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.body3};
    line-height: ${({ theme }) => theme.lineHeights.body3};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: white;

    margin: 8px 16px 14px 16px;
  }
`;

const Reviewcard = ({ nickname, content, src }) => {
  return (
    <CardWapper src={src}>
      <h4>{nickname}</h4>
      <p>{content}</p>
    </CardWapper>
  );
};

export default Reviewcard;
