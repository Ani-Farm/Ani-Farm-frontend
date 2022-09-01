import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/navbar";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const SContainer = styled.div`
  height: 675px;
  width: 656px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginName = styled.div`
  font-size: 36px;
  line-height: 52px;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Noto Sans KR";
  font-style: normal;
  margin-top: 100px;
  margin-bottom: 36px;
  margin-left: 76px;
  color: #000000;
`;

export const Input = styled.input`
  width: 576px;
  height: 84px;

  background: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 23px;
  border-radius: 5px;
`;

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.65);
  width: 100%;
`;

const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "60px" }}>
        <SContainer>
          <LoginName>로그인</LoginName>
          <Input></Input>
          <Input></Input>
          <button>눌러</button>
          <Line />
          <button>눌러</button>
          <div>
            계정이 없나요?
            <span>
              <Link to="#">가입</Link>
            </span>
          </div>
        </SContainer>
      </Container>
    </>
  );
};

export default SignUpPage;
