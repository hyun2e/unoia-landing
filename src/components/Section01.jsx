import React from 'react'

const Section01 = () => {
  return (
    <div style={{
      backgroundColor: "#E8E3FC",//Purple50
      backgroundPosition: "center",
      height: "1080px"
    }}>

    <img src='src/assets/images/S01_object03.png' />
    <img src='src/assets/images/S01_object02.png'/>
    <img src='src/assets/images/S01_object01.png'/>

    {/*텍스트 컨테이너*/}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}> 
        <div>
          <div>
            <h2>Emily in Paris를 보고 진짜 프랑스인이 저렇게 생각하는지 궁금했던 적,</h2>
            <p>해당 주제는 AI가 집계한 최근 Unoia 핫이슈 Top3입니다(25년 3월 기준)</p>
          </div>

          <div>
            <h2>다른 나라의 2030의 갓생이 궁금했던 적,</h2>
            <p>해당 주제는 AI가 집계한 최근 Unoia 핫이슈 Top3입니다(25년 3월 기준)</p>
          </div>

        <div>
            <h2>트럼프 당선 이후 뉴스 말고 진짜 다른나라 20대의 생각이 궁금했던 적,</h2>
            <p>해당 주제는 AI가 집계한 최근 Unoia 핫이슈 Top3입니다(25년 3월 기준)</p>
          </div>

          <div>
            <h2>있으신가요?</h2>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section01;