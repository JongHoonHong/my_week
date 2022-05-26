import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { round } from "lodash";

const Home = (props) => {
  let days = new Date().getDay();
  const history = useHistory();
  const fixedDayList = [];
  const avgNum = [];
  let avgSum = 0;
  let temp = 0;
  let j = 0;

  const dayList = [
    { id: 0, day: "일" },
    { id: 1, day: "월" },
    { id: 2, day: "화" },
    { id: 3, day: "수" },
    { id: 4, day: "목" },
    { id: 5, day: "금" },
    { id: 6, day: "토" },
  ];

  //    오늘 요일가져와서 재배치하여 새로운 배열에 입력
  for (let i = 0; i < 7; i++) {
    if (days > 6) days = 0;
    fixedDayList[i] = dayList[days];
    avgNum[i] = Math.floor(Math.random() * 5 + 1);
    avgSum += avgNum[i];
    days++;
  }
  avgSum = (avgSum / 7).toFixed(1);
  const [avg, setAvg] = useState(avgSum);

  return (
    <Container>
      <Title>내 일주일은?</Title>
      {fixedDayList.map((id, day) => {
        temp = avgNum[j];
        j++;

        return (
          <Wrap>
            <Day>{id.day}</Day>
            {Array.from({ length: 5 }, (item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    backgroundColor: temp < idx ? "#ddd" : "#ffeb3b",
                  }}
                ></div>
              );
            })}

            <Triangle
              onClick={() => {
                history.push(`/LeaveScore/${id.day}`);
              }}
            />
          </Wrap>
        );
      })}
      ;
      <AvgContainer>
        "평균 평점" {avg}
        <ResetBox
          onClick={() => {
            setAvg(parseInt(0).toFixed(1));
          }}
        >
          <ResetBtn>Reset</ResetBtn>
        </ResetBox>
      </AvgContainer>
    </Container>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
`;

const Day = styled.p`
  margin: 0px 0.5rem 0px 0px;
  font-weight: bold;
`;

// const Circle = styled.div`
//   width: 30px;
//   height: 30px;
//   border-radius: 30px;
//   margin: 5px;
//   background-color: ${(props) => props};
// `;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

const Container = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const Title = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const AvgContainer = styled.div`
  width: 8rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: blue;
  padding: 9px;
  font-size: 25px;
  font-weight: bold;
`;

const ResetBox = styled.div`
  width: inherit;
  height: fit-content;
  background-color: dodgerblue;
  border-radius: 6px;
  text-align: center;
  margin: 10px 0px 0px;
`;

const ResetBtn = styled.p`
  color: white;
  font-size: 18px;
`;

export default Home;
