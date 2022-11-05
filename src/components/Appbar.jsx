import React from "react";
import styled from "styled-components";

const StyledDivMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 129px;
  height: 36px;
  left: 20px;
  top: 16px;
`;

const StyledH2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #8b3eeb;
`;

export default function AppBar() {
  return (
    <div
      style={{
        position: "absolute",
        height: "68px",
        width: "100%",
        top: "0px",
        left: "0px",
      }}
    >
      <StyledDivMain>
        <div>
          <img src="../../images/logo.svg" width="36px" height="36px" />
        </div>
        <StyledH2>AI chat</StyledH2>
      </StyledDivMain>
    </div>
  );
}
