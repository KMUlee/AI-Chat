import React, { PureComponent } from "react";
import styled from "styled-components";

const ChatBotMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: right;
`;
const ChatDiv = styled.div`
  background-color: #a56bee;
  border-radius: 10px 10px 0px 10px;
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
  color: white;
  margin: 0 0;
`;

export default function ChatUser({ msg }) {
  return (
    <ChatBotMain>
      <div>
        <ChatDiv>
          <ChatH6>{msg}</ChatH6>
        </ChatDiv>
      </div>
    </ChatBotMain>
  );
}
