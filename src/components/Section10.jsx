import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledSection10 = styled.div`
  background-color: ${({ theme }) => theme.colors.coral300};
  display: flex;
  justify-content: center;
`;

const SectionWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0px;

  h3 {
    color: white;
  }
`;

const Section10 = () => {
  return (
    <StyledSection10>
      <SectionWrapper>
        <h3>
          언어의 장벽을 넘어
          <br />
          글로벌한 문화를 경험하세요!
        </h3>
        <Button
          type="black-btn"
          href="https://www.figma.com/proto/OxpJvC3XchjOVC4LNvpoxO/6%EC%A1%B0?node-id=5786-37232&t=63vugqGbZz7KnV29-1"
          target="_blank"
        >
          프로토타입 체험하러 가기
        </Button>
      </SectionWrapper>
    </StyledSection10>
  );
};

export default Section10;
