import styled from "styled-components";

export const SignBox = styled.div`
  width: 70%;
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
`;

export const Input = styled.input`
  width: 373px;
  height: 42px;

  margin-top: 10px;
  margin-bottom: 50px;
  background: #fafafa;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    height: 50px;
    width: 403px;
  }
  @media screen and (min-width: 1024px) {
    height: 58px;
    width: 433px;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;

  margin: 0 auto;
  border: none;
  background: #d9d9d9;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;

  :hover {
    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    font-size: 21px;
    :hover {
      font-size: 23px;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 23px;
    :hover {
      font-size: 25px;
    }
  }
`;
