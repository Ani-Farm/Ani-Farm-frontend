import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 360px;
  width: 65%;
  max-width: 270px;
  margin: 0 auto;
  margin-bottom: 500px;
  margin-top: 90px;
`;

export const LoginTitle = styled.div`
  font-size: 30px;
  padding-top: 25px;
  align-self: flex-start;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #ffffff;
  margin-top: 10px;
  width: 100%;
`;

export const LoginBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 130px;
  justify-content: space-between;
  margin-bottom: 10px;
  /* & > div > div {
    font-size: 0.6rem;
    color: red;
    opacity: 0.6;
  } */
`;

export const LoginDiv = styled.div`
  height: 150px;
`;

export const LoginInput = styled.input.attrs({ placeholder: "아이디" })`
  background-color: #fafafa;
  padding: 0 5px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const PasswordInput = styled.input.attrs({
  placeholder: "비밀번호",
  type: "password",
})`
  background-color: #fafafa;
  padding: 0 5px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  font-family: "Jua";
  background-color: #eeeeee;
  border: 1px solid #fafafa;
  border-radius: 10px;
  color: #766656;
  font-size: 15px;
  width: 100px;
  height: 40px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const WarningText = styled.div`
  font-size: 0.6rem;
  color: red;
  opacity: 0.6;
  margin-top: 1px;
`;

export const SnsAndSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid;
  padding-top: 20px;
  margin-top: 10px;
`;

export const SnsSignUpBtn = styled.button`
  font-family: "Jua";
  background-color: #fee502;
  border: 1px solid #ffffff;
  color: #766656;
  font-family: "Jua";
  border-radius: 10px;
  width: 150px;
  height: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SignUpAnchor = styled.h3`
  & > a {
    color: #9bb6fb;
    &:hover {
      opacity: 0.8;
    }
  }
`;
