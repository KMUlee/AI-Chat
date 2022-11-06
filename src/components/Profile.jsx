import React, { PureComponent, useEffect } from "react";
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
  width: 355px;
  height: 290px;
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
  background: black;
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
export default function Profile({ visible, setVisible }) {
  const handleOnClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (visible == true) {
      document.body.style = "overflow: hidden;";
    } else {
      document.body.style = "overflow: auto;";
    }
  }, [visible]);

  return (
    <>
      <ModalContainer visible={visible}>
        <ModalOverlay onClick={handleOnClick} />
        <ModalContent>
          <div
            style={{
              textAlign: "center",
              paddingTop: "50px",
              paddingLeft: "19px",
              paddingRight: "19px",
            }}
          >
            <ModalH1>
              {
                "프론트 엔드 개발자를 희망하고 있습니다.\n TypeScript를 활용해서 NextJS를 다뤄 본 경험이 있습니다.\n\n 2학년이지만 취직시 휴학을 신청하여 인턴 후 풀타임을 생각하고 있습니다.\n 뽑아주세요!!"
              }
            </ModalH1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "50px",
              }}
            >
              <StyledNegativeButton onClick={handleOnClick}>
                <StyledButtonText style={{ color: "#828282" }}>
                  Cancle
                </StyledButtonText>
              </StyledNegativeButton>
              <StyledPositiveButton
                onClick={() => {
                  setVisible(false);
                  window.location.href =
                    "https://github.com/KMUlee?tab=repositories";
                }}
              >
                <StyledButtonText style={{ color: "#FFFFFF" }}>
                  Go github
                </StyledButtonText>
              </StyledPositiveButton>
            </div>
          </div>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
