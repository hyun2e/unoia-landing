import React from "react";
import Button from "./Button";

const Herosection = () => {
  return (
    <div
      style={{
        backgroundImage: `url("../assets/images/hero_img.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1>언어를 잊고 대화를 잇다</h1>
        <p>You know? We know</p>
        <Button>지금 바로 대화하러 가기</Button>
      </div>
    </div>
  );
};

export default Herosection;
