import React from 'react';

const Section05 = () => {
  return (
    <div
      style={{
        backgroundImage: `url("src/assets/images/S05_background_img.png")`,
        backgroundSize: 'cover', // Make the background cover the entire container
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the background from repeating
      }}
    >
      <div>
        <h2>AI 번역 기술로 더 나은 소통을 경험 하세요</h2>
        <p>AI 기술을 활용한 맥락 기반 번역으로 언어의 장벽 뒤에 가려 졌던 궁금증을 풀 수 있습니다.</p>
      </div>
      <div>
        <img src="src/assets/images/S05_feed_before.png" alt="Before" />
        <img src="src/assets/images/S05_feed_after.png" alt="After" />
        <img src="src/assets/images/S05_translation_icon.png" alt="Translation Icon" />
      </div>
    </div>
  );
};

export default Section05;
