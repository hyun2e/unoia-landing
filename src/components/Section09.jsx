import React from "react";
import Reviewcard from "./Reviewcard";
import styled, { keyframes } from "styled-components";
import Headline from "./Headline";

const StyledSection09 = styled.div`
  background-color: ${({ theme }) => theme.colors.brown50};
  overflow: hidden; /* 가로 스크롤 방지 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

/* 첫 번째 줄 애니메이션 (왼쪽 이동) */
const moveLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); } /* 3배로 늘려서 자연스럽게 반복 */
`;

/* 두 번째 줄 애니메이션 (오른쪽 이동) */
const moveRight = keyframes`
  0% { transform: translateX(-33.33%); } /* 3배로 늘려서 자연스럽게 반복 */
  100% { transform: translateX(0); }
`;

const ReviewCardContainer = styled.div`
  margin: auto;
  width: 900px; /* 카드 리스트의 너비 고정 */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: max-content; /* 가로 길이를 제한 없이 늘릴 수 있도록 설정 */
  animation: ${(props) => (props.direction === "left" ? moveLeft : moveRight)}
    24s linear infinite; /* 무한 반복 */
`;

/* 개별 카드 사이 간격 추가 */
const ReviewCardWrapper = styled.div`
  margin-right: 10px; /* 카드 사이 여백 */
`;

/* 카드 리스트를 세 번 반복하여 끊김 없이 연결 */
const ExtendedRow = styled.div`
  display: flex;
`;

const AwardWrapper = styled.div`
  margin-top: 40px;
  padding: 48px 0px 60px 0px;
  text-align: center;

  p {
    margin-bottom: 30px;
  }
`;

const AwardImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  img {
    margin: 0px 54px;
  }
`;

const Section09 = () => {
  const reviewInfo = [
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
    <StyledSection09>
      <Headline
        title="Unoia로 대화를 나눈 유저들의 이야기"
        title_width="460px"
        description="국적에 상관없이 쉽고 재밌게 문화 교류의 장에 참여할 수 있습니다."
        description_width="560px"  
      />
      <ReviewCardContainer>
        {/* 첫 번째 줄 (왼쪽으로 이동) */}
        <RowContainer direction="left">
          <ExtendedRow>
            {reviewInfo.concat(reviewInfo).concat(reviewInfo).map((review, index) => (
              <ReviewCardWrapper key={index}>
                <Reviewcard
                  nickname={review.nickname}
                  content={review.content}
                  src={review.src}
                />
              </ReviewCardWrapper>
            ))}
          </ExtendedRow>
        </RowContainer>

        {/* 두 번째 줄 (오른쪽으로 이동) */}
        <RowContainer direction="right">
          <ExtendedRow>
            {reviewInfo.concat(reviewInfo).concat(reviewInfo).map((review, index) => (
              <ReviewCardWrapper key={index}>
                <Reviewcard
                  nickname={review.nickname}
                  content={review.content}
                  src={review.src}
                />
              </ReviewCardWrapper>
            ))}
          </ExtendedRow>
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
