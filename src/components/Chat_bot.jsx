import React, { PureComponent } from "react";
import styled from "styled-components";

const ChatBotMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const ChatDiv = styled.div`
  display: inline-block;
  background-color: #ffffff;
  border-radius: 0px 10px 10px 10px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;

  max-width: 270px;
  word-break: break-all;
`;

const ChatH6 = styled.h6`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  margin: 0 0;
`;

const ChatH3 = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-size: 12px;
  margin: 0 0;
  font-weight: 400;
  line-height: 16px;
`;

export default function ChatBot({ msg }) {
  return (
    <ChatBotMain>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <h3 style={{ margin: "0 0", fontSize: "20px" }}>🤖</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <ChatH3>{"{BotName}"}</ChatH3>
        <ChatDiv>
          <ChatH6>{msg}</ChatH6>
        </ChatDiv>
      </div>
    </ChatBotMain>
  );
}
