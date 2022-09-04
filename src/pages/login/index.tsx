import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import * as S from "./styles";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "60px" }}>로그인 페이지</div>
      <S.Container>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginContainer>
          <S.LoginBox>
            <S.LoginInput></S.LoginInput>
            <S.PasswordInput></S.PasswordInput>
          </S.LoginBox>
          <S.LoginBtn>Login</S.LoginBtn>
        </S.LoginContainer>
        <S.SnsAndSignUpContainer>
          <S.SnsSignUpBtn></S.SnsSignUpBtn>
          <S.SignUpAnchor>
            계정이 없나요? <Link to="/signup">가입</Link>
          </S.SignUpAnchor>
        </S.SnsAndSignUpContainer>
      </S.Container>
      <Footer />
    </>
  );
};

export default LoginPage;
