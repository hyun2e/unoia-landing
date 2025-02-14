import React from 'react'
import Reviewcard from './Reviewcard'

const Section09 = () => {
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
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
        </div>
        {/* row2 */}  
        <div>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
          <Reviewcard></Reviewcard>
        </div>
       </div>
      {/* Bottom Prize Info */}
      <div>
        <p>unoia는 어워드를 수상하고 싶습니다</p>
        <div> 
          <img src = "src/assets/images/S09_Prize_left.png" />
          <img src = "src/assets/images/S09_Prize_right.png" />
        </div>
      </div>
    </div>
  ) 
}
//글로벌스타일즈에 폰트 넣기
export default Section09
