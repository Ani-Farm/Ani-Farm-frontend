import styled from "styled-components";
import logoTitle from "../../assets/logo/logoTitle.svg";

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  backdrop-filter: blur(5px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 1440px;
    padding: 0 50px;
  }
`;

export const LeftMenuContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LogoTitle = styled.img.attrs({ src: logoTitle })`
  width: 80%;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: auto;
    margin-right: 50px;
  }
  @media screen and (min-width: 1024px) {
    width: auto;
    margin-right: 70px;
  }
`;
export const LeftMenu = styled.div`
  display: none;
  position: relative;
  top: 6px;
  align-items: center;
  justify-content: center;
  color: #717171;
  &:last-child {
    margin-left: 30px;
  }
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const RightMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightMenu = styled(LeftMenu)`
  &:first-child {
    margin-right: 30px;
  }
`;

export const HambergerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  border: 1px solid #717171;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const SubMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50px;
  right: 0;
  width: 120px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
`;
export const SubMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #717171;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:last-child {
    border-bottom: none;
  }
`;
