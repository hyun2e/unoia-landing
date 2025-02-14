import React from 'react'

const saveFunctionInfo = [
  {title: "손쉽게 분류하는 앨범형 보관함", src: "src/assets/images/S08_Mock_up03.png"},
  {title: "열띈 토론 후 AI 요약으로 대화 내용을 한 눈에 확인", src: "src/assets/images/S08_Mock_up04.png"},
  {title: "다른사람의 피드도, 내가 쓴 피드도 저장", src: "src/assets/images/S08_Mock_up05.png"},
];

const Section08 = () => {
  return (
    <div>
      {/* Title & Description */}
      <div>
        <h2>내가 만난 세계, 보관함에 저장</h2>
        <p>전 세계 친구들과 대화하는 경험을 요약하고 저장해 언제든 꺼내보세요.</p>
      </div>
      {/* Slide Container */}
      <div>
        <div>
          <h3>손쉽게 분류하는 앨범형 보관함</h3>
          <img src = "src/assets/images/S08_Mock_up03.png" />
        </div>
        <div>
          <h3>열띈 토론 후 AI 요약으로 대화 내용을 한 눈에 확인</h3>
          <img src = "src/assets/images/S08_Mock_up04.png" />
        </div>
        <div>
          <h3>다른사람의 피드도, 내가 쓴 피드도 저장</h3>
          <img src = "src/assets/images/S08_Mock_up05.png" />
        </div>
      </div>
    </div>
  )
}

export default Section08