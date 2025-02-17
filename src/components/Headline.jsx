import React from 'react';
import styled from "styled-components";

// 섹션 헤드라인이 반복되서 컴포넌트를 만들어봤습니다.
// 근데 직접 설정하는게 더 쉬울 것 같기도 해서 같이 이야기 나눠보면 좋겠습니다!
const HeadingWrapper = styled.div`
    margin-top: 100px;
    
    h2 {
        margin: auto;
        width: ${({ $title_width }) => $title_width};
        text-align: center;
    }

    p {
        margin: auto;
        margin-top: 24px;
        margin-bottom: 52px;
        width: ${({ $description_width }) => $description_width};
        text-align: center;
    }
`;

const Headline = ({ title, title_width, description, description_width }) => {
  return (
    <HeadingWrapper $title_width = {title_width} $description_width = {description_width}>
        <h2>{title}</h2>
        <p>{description}</p>
    </HeadingWrapper>
  )
}

export default Headline