import styled from "styled-components";
import React, { useState } from "react";
import ConversationBox from "./ConversationBox";
import Modal from "./Modal";
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;

  position: absolute;
  width: 815px;
  height: 627px;
  left: 180px;
  top: 78px;
`;

export default function MainBox() {
  const [visible, setVisible] = useState(false);
  const [chatData, setChatData] = useState([
    { type: "bot", msg: "hello~ooooo" },
  ]);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <MainDiv>
        <ConversationBox chatData={chatData} setChatData={setChatData} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px",
            gap: "4px",

            width: "175px",
            height: "28px",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <div>
            <img src="../../images/loader.svg" />
          </div>
          <h1
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#333333",
              padding: "0 0",
              margin: "0 0",
              marginBottom: "2px",
            }}
          >
            Clear Conversation
          </h1>
        </div>
      </MainDiv>
      <Modal
        visible={visible}
        setVisible={setVisible}
        setChatData={setChatData}
      />
    </div>
  );
}
