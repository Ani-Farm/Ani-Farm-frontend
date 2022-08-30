import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router";
import * as S from "./styles";

const Navbar = () => {
  const [hambergerClick, setHambergerClick] = useState(false);
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.InnerContainer>
        <S.LeftMenuContainer>
          <S.LogoTitle onClick={() => navigate("/")} />
          <S.LeftMenu>게시판</S.LeftMenu>
          <S.LeftMenu>채팅방</S.LeftMenu>
        </S.LeftMenuContainer>
        <S.RightMenuContainer>
          <S.RightMenu onClick={() => navigate("/login")}>로그인</S.RightMenu>
          <S.RightMenu onClick={() => navigate("/signup")}>
            회원가입
          </S.RightMenu>
          <S.HambergerContainer
            onClick={() => setHambergerClick((prev) => !prev)}
          >
            <HiMenu size={25} color="#717171" />
          </S.HambergerContainer>
          {hambergerClick && (
            <S.SubMenu>
              <S.SubMenuItem>로그인</S.SubMenuItem>
              <S.SubMenuItem>회원가입</S.SubMenuItem>
              <S.SubMenuItem>게시판</S.SubMenuItem>
              <S.SubMenuItem>채팅방</S.SubMenuItem>
            </S.SubMenu>
          )}
        </S.RightMenuContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Navbar;
