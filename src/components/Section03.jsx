import React from 'react';
import bgImage from '../assets/images/S03_background_img.png'; // 경로 확인 필수!

const Section03 = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "1080px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}> 
        <img src="src/assets/images/S03_Mock_up01.png" alt="설명1" />
        <img src="src/assets/images/S03_Mock_up02.png" alt="설명2" />
      </div>
    </div>
  );
};

export default Section03;