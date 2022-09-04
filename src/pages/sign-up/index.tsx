import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import { Container } from "../../components/navbar/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import Footer from "../../components/footer";
import { getValue } from "@testing-library/user-event/dist/types/utils";
import { resourceLimits } from "worker_threads";

interface ISignUp {
  Nick: String;
  id: String;
  password: String;
  passwordCheck: String;
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm<ISignUp>();
  const onSubmit: SubmitHandler<ISignUp> = (values, e) => {
    console.log(values);
    const { Nick, id, password, passwordCheck } = values;
    e?.target.reset();
  };
  return (
    <>
      <S.SignContainer>
        <Navbar />
        <S.SignBox>
          <S.Title>회원 가입</S.Title>
          <S.SignForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nick">닉네임</label>
            <S.Input
              id="nick"
              placeholder="닉네임을 입력하세요"
              {...register("Nick", {
                required: "닉네임을 입력해주세요!",
                minLength: {
                  value: 2,
                  message: "최소 2자 이상의 닉네임을 입력해주세요!",
                },
              })}
            />

            {errors.Nick && <p>{errors.Nick.message}</p>}
            <label htmlFor="id">아이디</label>
            <S.Input
              id="id"
              placeholder="아이디를 입력하세요"
              {...register("id", {
                required: "아이디를 입력해주세요!",
                minLength: {
                  value: 8,
                  message: "최소 8자 이상의 아이디를 입력해주세요!",
                },
              })}
            />
            {errors.id && <p>{errors.id.message}</p>}
            <label htmlFor="password">비밀번호</label>
            <S.Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register("password", {
                required: "비밀번호를 입력해주세요!",
                minLength: {
                  value: 8,
                  message: "최소 8자 이상의 비밀번호를 입력해주세요!",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                  message: "영문,숫자를 혼용하여 입력주세요!",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <S.Input
              id="passwordCheck"
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register("passwordCheck", {
                required: "비밀번호를 입력해주세요!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "비밀번호가 일치하지않습니다!";
                  },
                },
              })}
            />
            {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
            <S.Button type="submit">
              <span>가입하기</span>
            </S.Button>
          </S.SignForm>
        </S.SignBox>
      </S.SignContainer>
      <Footer />
    </>
  );
};

export default SignUpPage;
