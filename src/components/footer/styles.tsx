import styled from "styled-components";
import instagram from "../../assets/logo/instagramIcon.svg";
import facebook from "../../assets/logo/facebookIcon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: #eeeeee;
  @media screen and (min-width: 768px) {
    padding: 0 10em;
  }
`;

export const InfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Terms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 25px;
  & > p:first-child {
    margin-right: 15px;
  }
  & > p {
    cursor: pointer;
  }
  & > p:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 0;
  }
`;

export const SNSButtons = styled.div`
  display: flex;
  & > img:first-child {
    margin-right: 30px;
  }
  & > img {
    cursor: pointer;
  }
  & > img:hover {
    opacity: 0.8;
  }
`;

export const InstagramIcon = styled.img.attrs({ src: instagram })``;
export const FacebookIcon = styled.img.attrs({ src: facebook })``;

export const FooterText = styled.h1`
  font-weight: 900;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
