import React from "react";
import Navbar from "../../components/navbar";
import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import Footer from "../../components/footer";
import { SignType } from "../../types/api";
import { signUp } from "../../apis/auth";
import { useMutation } from "@tanstack/react-query";

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignType>();

  const { mutate } = useMutation(signUp);

  const onSubmit: SubmitHandler<SignType> = async (values, e) => {
    console.log(values);
    const { nickname, id, password, password_re } = values;
    const data: SignType = {
      nickname,
      id,
      password,
      password_re,
    };
    mutate(data, {
      onError(error) {
        console.log(error);
      },
    });
    e?.target.reset();
  };
  return (
    <>
      <S.SignContainer>
        <Navbar />
        <S.SignBox>
          <S.Title>회원 가입</S.Title>
          <S.SignForm onSubmit={handleSubmit(onSubmit)}>
            <S.NickNameInput>
              <label htmlFor="nickname">닉네임</label>
              <S.Input
                id="nickname"
                placeholder="닉네임을 입력하세요"
                {...register("nickname", {
                  required: "닉네임을 입력해주세요!",
                  minLength: {
                    value: 2,
                    message: "최소 2자 이상의 닉네임을 입력해주세요!",
                  },
                })}
              />
              {errors.nickname && <p>{errors.nickname.message}</p>}
            </S.NickNameInput>
            <S.IdInput>
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
            </S.IdInput>
            <S.PasswordInput>
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
            </S.PasswordInput>
            <S.PasswordReInput>
              <label htmlFor="password_re">비밀번호 확인</label>
              <S.Input
                id="password_re"
                type="password"
                placeholder="비밀번호를 입력하세요"
                {...register("password_re", {
                  required: "비밀번호를 입력해주세요!",
                  validate: {
                    matchesPreviousPassword: (value) => {
                      const { password } = getValues();
                      return (
                        password === value || "비밀번호가 일치하지않습니다!"
                      );
                    },
                  },
                })}
              />
              {errors.password_re && <p>{errors.password_re.message}</p>}
            </S.PasswordReInput>

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
