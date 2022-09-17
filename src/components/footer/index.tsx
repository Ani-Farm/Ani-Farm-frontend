import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.InfoConatiner>
        <S.Terms>
          <p>이용약관</p>
          <p>개인정보 처리방침</p>
        </S.Terms>
        <S.SNSButtons>
          <S.InstagramIcon />
          <S.FacebookIcon />
        </S.SNSButtons>
      </S.InfoConatiner>
      <S.FooterText>© 2022. AniFarm. All rights reserved.</S.FooterText>
    </S.Container>
  );
};

export default Footer;
