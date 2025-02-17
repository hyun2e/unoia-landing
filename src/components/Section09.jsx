import React from "react";
import Reviewcard from "./Reviewcard";

const Section09 = () => {
  const reviewInfoTop = [
    {
      nickname: "kiwidangdanggold.303",
      content:
        "자국 중심의 뉴스만 보다가, 외국 친구들과 이야기하면서 다양한 시각을 접했어요!",
      src: "src/assets/images/S09_img01.png",
    },
    {
      nickname: "PierogiQueen",
      content:
        "친환경 여행에 관심이 많았는데, 유노이아에서 로컬 친구들이 직접 계획을 추천해줘서 좋았어요.",
      src: "src/assets/images/S09_img02.png",
    },
    {
      nickname: "MbappeGOAT9",
      content:
        "단순한 언어 교환이 아니라, 글로벌한 밈과 트렌드를 공유할 수 있어서 더 재밌어요.",
      src: "src/assets/images/S09_img03.png",
    },
    {
      nickname: "SpicySari",
      content:
        "외국인 친구들과 로컬 문화에 대해 대화를 나눠볼 수 있어서 신기했어요!",
      src: "src/assets/images/S09_img04.png",
    },
    {
      nickname: "PikaYui1234",
      content:
        "각국의 정치·사회 문제를 현지인 시각에서 듣다 보니, 미디어와 달라서 흥미로웠어요.",
      src: "src/assets/images/S09_img05.png",
    },
  ];

  const reviewInfoBottom = [
    {
      nickname: "kiwidangdanggold.303",
      content:
        "자국 중심의 뉴스만 보다가, 외국 친구들과 이야기하면서 다양한 시각을 접했어요!",
      src: "src/assets/images/S09_img01.png",
    },
    {
      nickname: "PierogiQueen",
      content:
        "친환경 여행에 관심이 많았는데, 유노이아에서 로컬 친구들이 직접 계획을 추천해줘서 좋았어요.",
      src: "src/assets/images/S09_img02.png",
    },
    {
      nickname: "MbappeGOAT9",
      content:
        "단순한 언어 교환이 아니라, 글로벌한 밈과 트렌드를 공유할 수 있어서 더 재밌어요.",
      src: "src/assets/images/S09_img03.png",
    },
    {
      nickname: "SpicySari",
      content:
        "외국인 친구들과 로컬 문화에 대해 대화를 나눠볼 수 있어서 신기했어요!",
      src: "src/assets/images/S09_img04.png",
    },
    {
      nickname: "PikaYui1234",
      content:
        "각국의 정치·사회 문제를 현지인 시각에서 듣다 보니, 미디어와 달라서 흥미로웠어요.",
      src: "src/assets/images/S09_img05.png",
    },
  ];

  return (
    <div>
      {/* Title & Description */}
      <div>
        <h2>Unoia로 대화를 나눈 유저들의 이야기</h2>
        <p>국적에 상관없이 쉽고 재밌게 문화 교류의 장에 참여할 수 있습니다.</p>
      </div>
      {/* Reviewcard Container */}
      <div>
        {/* row1 */}
        <div>
          {/* <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard> */}
          {reviewInfoTop.map((review, index) => (
            <Reviewcard
              key={index}
              nickname={review.nickname}
              content={review.content}
              src={review.src}
            />
          ))}
        </div>
        {/* row2 */}
        {/* <div>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
        </div> */}
      </div>
      {/* Bottom Prize Info */}
      <div>
        <p>unoia는 어워드를 수상하고 싶습니다</p>
        <div>
          <img src="src/assets/images/S09_Prize_left.png" />
          <img src="src/assets/images/S09_Prize_right.png" />
        </div>
      </div>
    </div>
  );
};
//글로벌스타일즈에 폰트 넣기
export default Section09;
