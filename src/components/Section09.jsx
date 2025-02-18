import React from "react";
import Reviewcard from "./Reviewcard";
import styled from "styled-components";
import Headline from "./Headline";

const StyledSection09 = styled.div`
  background-color: ${({ theme }) => theme.colors.brown50};
`;

const ReviewCardContainer = styled.div`
margin: auto;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`;

const AwardWrapper = styled.div`
  width: 800px;
  margin: auto;
  padding: 48px 0px 60px 0px;
  p {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const AwardImageContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  img {
    margin: 0px 54px;
  }
`;

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
      src: "src/assets/images/S09_img06.png",
    },
    {
      nickname: "PierogiQueen",
      content:
        "친환경 여행에 관심이 많았는데, 유노이아에서 로컬 친구들이 직접 계획을 추천해줘서 좋았어요.",
      src: "src/assets/images/S09_img07.png",
    },
    {
      nickname: "MbappeGOAT9",
      content:
        "단순한 언어 교환이 아니라, 글로벌한 밈과 트렌드를 공유할 수 있어서 더 재밌어요.",
      src: "src/assets/images/S09_img08.png",
    },
    {
      nickname: "SpicySari",
      content:
        "외국인 친구들과 로컬 문화에 대해 대화를 나눠볼 수 있어서 신기했어요!",
      src: "src/assets/images/S09_img09.png",
    },
    {
      nickname: "PikaYui1234",
      content:
        "각국의 정치·사회 문제를 현지인 시각에서 듣다 보니, 미디어와 달라서 흥미로웠어요.",
      src: "src/assets/images/S09_img10.png",
    },
  ];

  return (
    <StyledSection09>
      <Headline
        title="Unoia로 대화를 나눈 유저들의 이야기"
        title_width="460px"
        description="국적에 상관없이 쉽고 재밌게 문화 교류의 장에 참여할 수 있습니다."
        description_width="560px"  
      />
      <ReviewCardContainer>
        <RowContainer>
          {reviewInfoTop.map((review, index) => (
            <Reviewcard
              key={index}
              nickname={review.nickname}
              content={review.content}
              src={review.src}
            />
          ))}
        </RowContainer>
        <RowContainer>
          {reviewInfoBottom.map((review, index) => (
            <Reviewcard
              key={index}
              nickname={review.nickname}
              content={review.content}
              src={review.src}
            />
          ))}
        </RowContainer>
      </ReviewCardContainer>
      <AwardWrapper>
        <p>unoia는 어워드를 수상하고 싶습니다</p>
        <AwardImageContainer>
          <img src="src/assets/images/S09_Prize_left.png" />
          <img src="src/assets/images/S09_Prize_right.png" />
        </AwardImageContainer>
      </AwardWrapper>
    </StyledSection09>
  );
};

export default Section09;
