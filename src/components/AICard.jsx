import React from 'react'
import styled from 'styled-components'

const ExtraLargeCard = styled.div`
  height: 150px;
  width: 792px;
  background-color: white;
  border-radius: 40px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.heading2};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

const LargeCard = styled.div`
  height: 104px;
  width: 556px;
  background-color: white;
  opacity: 0.8;
  border-radius: 30px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.title1};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.gray700};
    opacity: 0.9;
  }
`;

const MediumCard = styled.div`
  height: 80px;
  width: 424px;
  background-color: white;
  opacity: 0.6;
  border-radius: 26px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.title4};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.gray700};
    opacity: 0.8;
  }
`;

const SmallCard = styled.div`
  height: 64px;
  width: 364px;
  background-color: white;
  opacity: 0.4;
  border-radius: 20px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.title5};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.gray700};
    opacity: 0.7;
  }
`;

const ExtraSmallCard = styled.div`
  height: 52px;
  width: 282px;
  background-color: white;
  opacity: 0.2;
  border-radius: 16px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.body2};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.gray700};
    opacity: 0.6;
  }
`;

const resizeCard = (info, row_index) => {
  switch (row_index) {
    case 4:
      return (
        <ExtraLargeCard>
          <h4>{info}</h4>
        </ExtraLargeCard>
      );
    case 3:
      return (
        <LargeCard>
          <h4>{info}</h4>
        </LargeCard>
      );
    case 2:
      return (
        <MediumCard>
          <h4>{info}</h4>
        </MediumCard>
      );
    case 1:
      return (
        <SmallCard>
          <h4>{info}</h4>
        </SmallCard>
      );
    case 0:
    default:
      return (
        <ExtraSmallCard>
          <h4>{info}</h4>
        </ExtraSmallCard>
      );
  }

};

const AICard = ({info, row_index}) => {
  return (
    <>
      {resizeCard(info, row_index)}
    </>
  )
}

export default AICard