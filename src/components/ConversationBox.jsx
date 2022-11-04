import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChatBot from "./Chat_bot";
import ChatUser from "./Chat_user";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 627px;
  max-width: 600px;
  max-height: 627px;
  background: #f4f4f7;
  border-radius: 10px;
  flex-grow: 0;
`;

const StyledInputDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 12px;
  gap: 10px;

  position: absolute;
  width: 560px;
  height: 50px;
  left: 20px;
  bottom: 15px;

  cursor: pointer;

  background: #ffffff;
  border: 2px solid #ececf3;
  border-radius: 10px;
`;

const StyledInputBox = styled.input`
  width: 500px;
  border: none;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const StyledImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledChatDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 500px;
  overflow-y: scroll;
`;

export default function ConversationBox({ chatData, setChatData }) {
  const [msg, setMsg] = useState("");
  const [submit, setSubmit] = useState({ type: false, msg: "" });

  const handleChange = ({ target: { value } }) => {
    setMsg(value);
  };

  const getAIChatData = async (msgData) => {
    const res = await fetch(
      "https://main-chatbot-api-ainize-team.endpoint.ainize.ai/v1/bot/chat",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: msgData }),
      }
    )
      .then((res) => res.json())
      .then((data) => setChatData([...chatData, { type: "bot", msg: data }]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.trim().length == 0) return;
    const userMsg = msg;
    setMsg("");
    setChatData((data) => [...data, { type: "user", msg: userMsg }]);
    setSubmit({ ...submit, type: true, msg: userMsg });
  };

  const messageBoxRef = useRef();

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    if (submit.type == true) {
      setSubmit({ ...submit, type: false, msg: "" });
      getAIChatData(submit.msg);
    }
  }, [chatData, submit]);

  return (
    <div>
      <StyledDiv>
        <StyledChatDiv ref={messageBoxRef}>
          {chatData.map((data) => {
            if (data.type == "bot") {
              return <ChatBot msg={data.msg} />;
            } else if (data.type == "user") {
              return <ChatUser msg={data.msg} />;
            }
          })}
        </StyledChatDiv>

        <form onSubmit={handleSubmit}>
          <StyledInputDiv>
            <StyledInputBox onChange={handleChange} value={msg} />
            <StyledImage onClick={handleSubmit}>
              <img src="../../images/send.svg" width="24px" height="24px" />
            </StyledImage>
          </StyledInputDiv>
        </form>
      </StyledDiv>
    </div>
  );
}
