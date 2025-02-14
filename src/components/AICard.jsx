import React from 'react'
import styled from 'styled-components'

const StyledAICard = styled.div`
  height: 150px;
  width: 830px;
  background-color: white;
  border-radius: 40px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.heading2};
  color: ${({ theme }) => theme.colors.gray700};
`;

const AICard = ({info}) => {
  return (
    <StyledAICard>
        <h4>{info}</h4>
    </StyledAICard>
  )
}

export default AICard