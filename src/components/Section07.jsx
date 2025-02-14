import React from 'react';

const Section07 = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/src/assets/images/S07_background_img.png")`,
        backgroundSize: 'cover', // Make the background cover the entire container
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the background from repeating
      }}
    >
      <div>
        <h2>국경과 언어를 모두 넘어 우리의 궁금증을 실시간으로 나누는 곳</h2>
        <p>궁금한거 있으면 물어도 보고, 핫이슈로 토크배틀도 하고!</p>
      </div>
      <div>
        {/*gif 삽입 필요함*/}
        <img src="" />
      </div>
    </div>
  );
};

export default Section07;
