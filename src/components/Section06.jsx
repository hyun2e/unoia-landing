import AICard from "./AICard";
import Headline from "./Headline";
import styled from "styled-components";

const AICardInfo = [
  [
    "넷플릭스 VS 디즈니+ VS 유튜브? 🥊",
    "젓가락 VS 포크? 🥊",
    "나라별 팁 문화는 어떻게 다를까? 💰",
    "첫 만남에 어떻게 인사를 할까? 🙋‍♀️",
    "AI가 예술 · 창작 활동을 대체할 수 있을까? 🤖",
  ],
  [
    "각국에서 가장 인기있는 스포츠는? ⚽️🏀",
    "집들이 갈 때 신발을 신을까, 벗을까? 🥾",
    "여태 본 경치 중 숨 막히게 아름다웠던 곳? 🏔️",
    "이상적인 직장 문화는? 🏙️",
    "각 나라의 문화를 잘 보여주는 드라마는? 🌏",
  ],
  [
    "내  집 마련을 하려면 얼마를 모아야 할까? 🏠",
    "‘트럼프 변수'에 대한 생각은? 🇺🇸",
    "각 나라의 '연애'와 '썸'은 어떻게 다를까? 💕",
    "존댓말 VS 반말? 🥊",
    "약속 시간이 잡히면 언제까지 나갈까? 🕖",
  ],
  [
    "호텔 VS 에어비앤비? 🥊",
    "퓨전 음식에 대한 생각은? 🍍🍕",
    "각 나라의 흔한 아침 루틴은? ☀️",
    "크리스마스는 가족들과 or 친구들과? 🎄",
    "암기력 VS 창의력  🥊",
  ],
  [
    "미니멀리즘 VS 맥시멀리즘? 🥊",
    "기후 변화에 대한 각국의 대응 방식은? 🌏",
    "나라별로 의미가 다르게 통하는 손짓은? 🤙✌️",
    "각 나라의 독특한 문화 차이를 경험한 적?",
    "부모님과 가장 의견이 달랐던 순간은? 😡",
  ],
];

const StyledSection06 = styled.div`
  background-color: ${({ theme }) => theme.colors.gray600};
  overflow: hidden;

  h2, p {
    color: white;
  }
`;

const AICardContainer = styled.div`
  margin-top: 166px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const Section06 = () => {
  return (
    <StyledSection06>
      <Headline
        title="AI 생성 질문으로 끊이지 않는 대화!"
        title_width="370px"
        description="AI의 흥미로운 질문과 주제로 자연스러운 참여를 유도합니다."
        description_width="255px"
      />
      {/* AICard Container */}
      <AICardContainer>
        {AICardInfo.map((e1, i) => (
          <RowContainer key={i}>
            {e1.map((e2, j) => (
              <AICard key={j} info={e2} row_index={i} />
            ))}
          </RowContainer>
        ))}
      </AICardContainer>
    </StyledSection06>
  );
};

export default Section06;
