import React from 'react'

const reviewInfo = [
  {
    id: "kiwidangdanggold.303", 
    content: "자국 중심의 뉴스만 보다가, 외국 친구들과 이야기하면서 다양한 시각을 접했어요!",
    src: "src/assets/images/S09_img01.png"
  },
  {
    id: "PierogiQueen", 
    content: "친환경 여행에 관심이 많았는데, 유노이아에서 로컬 친구들이 직접 계획을 추천해줘서 좋았어요.",
    src: "src/assets/images/S09_img02.png"
  },
  {
    id: "MbappeGOAT9",
    content: "단순한 언어 교환이 아니라, 글로벌한 밈과 트렌드를 공유할 수 있어서 더 재밌어요.",
    src: "src/assets/images/S09_img03.png"},
  {
    id: "SpicySari", 
    content: "외국인 친구들과 로컬 문화에 대해 대화를 나눠볼 수 있어서 신기했어요!",
    src: "src/assets/images/S09_img04.png"},
  {
    id: "PikaYui1234", 
    content: "각국의 정치·사회 문제를 현지인 시각에서 듣다 보니, 미디어와 달라서 흥미로웠어요.",
    src: "src/assets/images/S09_img05.png"},
];

const Reviewcard = () => {
  return (
    <div style={{
      backgroundImage: `${reviewInfo[0].src}`
    }}>
      <h4>kiwidangdanggold.303</h4>
      <p>자국 중심 뉴스만 보다가, 외국 친구들과 이야기하면서 다양한 시각을 접할 수 있었어요.</p>
    </div>
  )
}

export default Reviewcard