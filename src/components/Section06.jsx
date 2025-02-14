import React from 'react'
import AICard from './AICard';

const AICardInfo = [
  [
      "미니멀리즘 VS 맥시멀리즘? 🥊",
      "기후 변화에 대한 각국의 대응 방식은? 🌏",
      "나라별로 의미가 다르게 통하는 손짓은? 🤙✌️",
      "각 나라의 독특한 문화 차이를 경험한 적?",
      "부모님과 가장 의견이 달랐던 순간은? 😡",
  ],
  [
      "호텔 VS 에어비앤비? 🥊",
      "퓨전 음식에 대한 생각은? 🍍🍕",
      "각 나라의 흔한 아침 루틴은? ☀️",
      "크리스마스는 가족들과 or 친구들과? 🎄",
      "암기력 VS 창의력  🥊",
  ],
  [
      "내  집 마련을 하려면 얼마를 모아야 할까? 🏠",
      "‘트럼프 변수'에 대한 생각은? 🇺🇸",
      "각 나라의 '연애'와 '썸'은 어떻게 다를까? 💕",
      "존댓말 VS 반말? 🥊",
      "약속 시간이 잡히면 언제까지 나갈까? 🕖",
  ],
  [
      "각국에서 가장 인기있는 스포츠는? ⚽️🏀",
      "집들이 갈 때 신발을 신을까, 벗을까? 🥾",
      "여태 본 경치 중 숨 막히게 아름다웠던 곳? 🏔️",
      "이상적인 직장 문화는? 🏙️",
      "각 나라의 문화를 잘 보여주는 드라마는? 🌏",
  ],
  [
      "넷플릭스 VS 디즈니+ VS 유튜브? 🥊",
      "젓가락 VS 포크? 🥊",
      "나라별 팁 문화는 어떻게 다를까? 💰",
      "첫 만남에 어떻게 인사를 할까? 🙋‍♀️",
      "AI가 예술 · 창작 활동을 대체할 수 있을까? 🤖",
  ],
];

const Section06 = () => {
  return (
    <div>
      {/* Title & Description */}
      <div>
        <h2>Ai 프롬프트로 끊이지 않는 대화 소재!</h2>
        <p>AI가 질문과 주제를 선정해 자연스러운 참여를 유도합니다.</p>
      </div>
      {/* AICard Container 5개 */}
      {AICardInfo.map(e1 => <div>
        {e1.map((e2) => <AICard info = {e2} />)}
      </div>)}
    </div>
  );
};

export default Section06

// 아래쪽 코드는 에니메이션 포함/ 코드 확인 필요 / App.jsx 에 Section07 랜더링 필요함.
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import styled from "styled-components";

// // ✅ 이미지 리스트 (public/images/ 폴더에 있어야 함)
// const images = [
//   "/src/assets/images/S07_AI_feed01.png",
//   "/src/assets/images/S07_AI_feed02.png",
//   "/src/assets/images/S07_AI_feed03.png",
//   "/src/assets/images/S07_AI_feed04.png",
//   "/src/assets/images/S07_AI_feed05.png",
// ];

// // ✅ Styled-components 최소한의 스타일 적용
// const SectionContainer = styled.section`
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   padding: 50px 20px;
// `;

// const SliderWrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ChatCard = styled(motion.img)`
//   display: block;
//   max-width: 100%;
//   height: auto;
// `;

// const Section07 = () => {
//   const [index, setIndex] = useState(0); // 현재 보이는 이미지 인덱스

//   // 4초마다 자동으로 다음 이미지로 변경
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <SectionContainer>
//       {/* h1과 p는 GlobalStyles에서 스타일이 지정됨 */}
//       <h1>Ai 프롬프트로 끊이지 않는 대화 소재!</h1>
//       <p>AI가 질문과 주제를 선정해 자연스러운 참여를 유도합니다.</p>

//       {/* 카드 슬라이더 */}
//       <SliderWrapper>
//         <AnimatePresence mode="wait">
//           <ChatCard
//             key={index}
//             src={images[index]}
//             alt="AI Chat Card"
//             initial={{ opacity: 0, scale: 1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 1 }}
//             transition={{ duration: 1 }}
//           />
//         </AnimatePresence>
//       </SliderWrapper>
//     </SectionContainer>
//   );
// };

// export default Section07;
