import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

function LeaveScore(props) {
  const history = useHistory();
  const params = useParams();
  const [rate, setRate] = useState(0);
  return (
    <Wrap>
      <SelectedDay>
        <AvgScore>{params.day}요일</AvgScore> 평점 남기기
      </SelectedDay>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 0",
          width: "100%",
        }}
      >
        {Array.from({ length: 5 }, (item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setRate(idx + 1);
              }}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "30px",
                margin: "5px",
                backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
              }}
            ></div>
          );
        })}
      </div>
      <LeaveBtn
        onClick={() => {
          history.goBack();
        }}
      >
        평점 남기기
      </LeaveBtn>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
`;

const SelectedDay = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const AvgScore = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 900;
  background: orange;
  padding: 0.2rem;
  border-radius: 5px;
`;

const WrapAvg = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
    width: 100%;
}
`;

const AvgCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
`;

const LeaveBtn = styled.button`
  width: 100%;
  background-color: purple;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: rgb(255, 255, 255);
`;

export default LeaveScore;
