import React, { PureComponent } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 280px;
  height: 240px;
  border-radius: 10px;
`;

const ModalH1 = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #333333;
  margin: 0 0;
`;

const StyledNegativeButton = styled.div`
  border-radius: 10px;
  background: #ececf3;
  width: 110px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledPositiveButton = styled.div`
  border-radius: 10px;
  background: #fe7474;
  width: 110px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledButtonText = styled.h6`
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 0 0;
`;

export default function Modal({ visible, setVisible, setChatData }) {
  const handleOnClick = () => {
    setVisible(false);
  };

  return (
    <>
      <ModalContainer visible={visible}>
        <ModalOverlay onClick={handleOnClick} />
        <ModalContent>
          <div
            style={{
              width: "245px",
              height: "54px",
              paddingTop: "67px",
              paddingLeft: "19px",
            }}
          >
            <ModalH1>
              {"Are you sure you want to clear\nthis conversation"}
            </ModalH1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                justifyContent: "center",
                alignContent: "center",
                position: "absolute",
                bottom: "29px",
                marginLeft: "5px",
              }}
            >
              <StyledNegativeButton onClick={handleOnClick}>
                <StyledButtonText style={{ color: "#828282" }}>
                  Cancle
                </StyledButtonText>
              </StyledNegativeButton>
              <StyledPositiveButton
                onClick={() => {
                  setChatData([{ type: "bot", msg: "hello~ooooo" }]);
                  setVisible(false);
                }}
              >
                <StyledButtonText style={{ color: "#FFFFFF" }}>
                  Clear
                </StyledButtonText>
              </StyledPositiveButton>
            </div>
          </div>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
