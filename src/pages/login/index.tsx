import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import * as S from "./styles";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [checkInput, setCheckInput] = useState<string[]>([]);
  const addIdInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCheckInput(["아이디를 입력해주세요!", "비밀번호를 입력해주세요!"]);
    let info = { id, pw };
    console.log(info);
    // axios 코드에 info 넣어주기
    // 결과에 맞는 코드 작성하기
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
            <S.LoginDiv>
              <S.LoginInput onChange={onChangeValue}></S.LoginInput>

              <S.WarningText>{id.length ? null : checkInput[0]}</S.WarningText>
            </S.LoginDiv>
            <S.LoginDiv>
              <S.PasswordInput onChange={onChangeValue}></S.PasswordInput>

              <S.WarningText>{pw.length ? null : checkInput[1]}</S.WarningText>
            </S.LoginDiv>
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
