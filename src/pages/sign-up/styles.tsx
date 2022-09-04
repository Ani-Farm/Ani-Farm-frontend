import styled from "styled-components";

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const SignBox = styled.div`
  width: 70%;
  height: 100%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & > label:not(:first-child) {
    margin-top: 20px;
  }

  & > label:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  width: 373px;
  height: 52px;

  margin-top: 8px;
  margin-bottom: 3px;
  background: #fafafa;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    height: 55px;
    width: 403px;
  }

  @media screen and (min-width: 1024px) {
    height: 57px;
    width: 433px;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 40px;

  margin: 0 auto;
  margin-top: 20px;
  border: none;
  background: #d9d9d9;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;

  cursor: pointer;

  :hover {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 21px;
    width: 275px;
    height: 40px;
    :hover {
      font-size: 23px;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 23px;
    width: 280px;
    height: 45px;
    :hover {
      font-size: 25px;
    }
  }
`;
