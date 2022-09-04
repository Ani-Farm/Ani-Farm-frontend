import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 380px;
  width: 65%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 60px;
`;

export const LoginTitle = styled.div`
  font-size: 30px;
  align-self: flex-start;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 200px;
`;

export const LoginBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 90px;
  justify-content: space-between;
`;

export const LoginInput = styled.input.attrs({ placeholder: "로그인" })`
  background-color: #fafafa;
  padding: 0 5px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const PasswordInput = styled(LoginInput).attrs({
  placeholder: "비밀번호",
})``;

export const LoginBtn = styled.button`
  background-color: #eeeeee;
  width: 130px;
  height: 40px;
`;

// export const Hr = styled.hr`
//   position: absolute;
//   width: 100%;
//   color: black;
// `;

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
`;

export const SnsSignUpBtn = styled.button`
  background-color: #fee502;
  width: 150px;
  height: 40px;
`;

export const SignUpAnchor = styled.h3`
  & > a {
    color: #9bb6fb;
    &:hover {
      opacity: 0.8;
    }
  }
`;
