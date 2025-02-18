import React from 'react'
import Headline from './Headline';
import styled from 'styled-components';

const saveFunctionInfo = [
  {title: "손쉽게 분류하는 앨범형 보관함", src: "src/assets/images/S08_Mock_up03.png"},
  {title: "열띈 토론 후 AI 요약으로 대화 내용을 한 눈에 확인", src: "src/assets/images/S08_Mock_up04.png"},
  {title: "다른사람의 피드도, 내가 쓴 피드도 저장", src: "src/assets/images/S08_Mock_up05.png"},
];

const StyledSection08 = styled.div`
  background-color: ${({ theme }) => theme.colors.brown50};
  overflow: hidden;
`;

const SideSlide = styled.div`
  background-color: ${({ theme }) => theme.colors.mint300};
  border-radius: 14px 0px 0px 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;

  position: relative;

  h3 {
    margin: 300px 0px 300px 40px;
    width: 215px;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

const ImageWrapper = styled.div`
  margin-top: 90px;
  width: 362px;
  height: 610px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const RightElements = styled.div`
  background-color: ${({ theme }) => theme.colors.coral200};
  border-radius: 14px 0px 0px 0px;
  width: 180px;
  height: 100%;
  position: absolute;
  left: 1740px;

  div {
    background-color: ${({ theme }) => theme.colors.purple200};
    border-radius: 14px 0px 0px 0px;
    width: 90px;
    height: 100%;
    margin-left: auto;
  }
`;

const Section08 = () => {
  return (
    <StyledSection08>
      <Headline
        title="내가 만난 세계, 보관함에 저장!"
        title_width="330px"
        description="전 세계 친구들과 대화하는 경험을 요약하고 저장해 언제든 꺼내보세요."
        description_width="296px"
      />
      <SideSlide>
        <h3>손쉽게 분류하는 앨범형 보관함</h3>
        <ImageWrapper>
          <img src = "src/assets/images/S08_Mock_up03.png" />
        </ImageWrapper>
        <RightElements>
          <div />
        </RightElements>
      </SideSlide>
    </StyledSection08>
  )
}

export default Section08