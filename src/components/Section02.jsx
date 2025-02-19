import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSection02 = styled.div`
  background-color: #ffffff;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const AnimatedContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.textStyle.P_L.fontSize}; /* 75px */
  font-weight: ${({ theme }) => theme.textStyle.P_L.fontWeight}; /* 600 */
  line-height: ${({ theme }) => theme.textStyle.P_L.LineHeight}; /* 124px */
  color: ${({ theme }) => theme.textStyle.P_L.color}; /* 진한 회색 */
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.textStyle.P_S.fontSize}; /* 32px */
  font-weight: ${({ theme }) => theme.textStyle.P_S.fontWeight}; /* 400 */
  line-height: ${({ theme }) => theme.textStyle.P_S.LineHeight}; /* 48px */
  color: ${({ theme }) => theme.textStyle.P_S.color}; /* 연한 회색 */
  max-width: 760px;
  margin-top: 16px;
`;

const Section02 = () => {
  return (
    <StyledSection02>
      {/* Title과 Description을 감싸는 컨테이너를 motion.div로 감싸서 함께 애니메이션 적용 */}
      <AnimatedContainer
        initial={{ scale: 1 }} /* 초기 크기 */
        whileInView={{ scale: [1, 1.2, 1] }} /* 커졌다가 다시 작아짐 */
        transition={{ duration: 1 }} /* 애니메이션 지속 시간 */
        viewport={{ amount: 0.5 }} /* 화면 50% 이상 보이면 실행 */
      >
        <Title>지금 바로 물어보세요</Title>
        <Description>
          Unoia는 다양한 문화권의 사람들과 질문을 통해 교류하며 트렌드와 이해를 쌓아 가는 문화 교류 플랫폼입니다.
        </Description>
      </AnimatedContainer>
    </StyledSection02>
  );
};

export default Section02;
