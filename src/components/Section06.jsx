import React from 'react'

const Section06 = () => {
  return (
    <div>
      {/* Title & Description */}
      <div>
        <h2>Ai 프롬프트로 끊이지 않는 대화 소재!</h2>
        <p>AI가 질문과 주제를 선정해 자연스러운 참여를 유도합니다.</p>
      </div>
      {/* AiChatList, 사진 수정 필요*/}
      <div>
        <img src="/src/assets/images/S06_AI_feed01.png" />
        <img src="/src/assets/images/S06_AI_feed02.png" />
        <img src="/src/assets/images/S06_AI_feed03.png" />
        <img src="/src/assets/images/S06_AI_feed04.png" />
        <img src="/src/assets/images/S06_AI_feed05.png" />
       </div>
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
