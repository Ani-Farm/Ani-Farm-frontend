import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import * as S from "./styles";

interface ILogin {
  id: string;
  pw: string;
}

const LoginPage = () => {
  const [idInfo, setIdInfo] = useState({ id: "", pw: "" });
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [first, setFirst] = useState(0);
  const addIdInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (id.length === 0 || pw.length === 0) {
      console.log("빈캄임");
      return;
    }
    console.log({
      id,
      pw,
    });
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "password") {
      setPw(e.target.value);
      console.log(pw);
    } else {
      setId(e.target.value);
      console.log(id);
    }
  };

  return (
    <>
      <Navbar />
      <S.Container>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginContainer>
          <S.LoginBox>
            <S.LoginInput onChange={onChangeValue}></S.LoginInput>
            {id.length === 0 ? <div> 아이디 입력해주세요</div> : ""}
            <S.PasswordInput onChange={onChangeValue}></S.PasswordInput>
            {pw.length === 0 ? <div> 비번 입력해주세요</div> : ""}
          </S.LoginBox>
          <S.LoginBtn onClick={addIdInfo}>Login</S.LoginBtn>
        </S.LoginContainer>
        <S.SnsAndSignUpContainer>
          <S.SnsSignUpBtn>카카오 로그인</S.SnsSignUpBtn>
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
