import { SignType } from "../types/api";
import axios, { AxiosError } from "axios";

//회원가입
export const signUp = async (data: SignType) => {
  try {
    await axios.post("/auth/sign-up", data);
  } catch (error) {
    const message = error as unknown as AxiosError;
    return message;
  }
};

//로그인
export const localLogin = async (id: string, password: string) => {
  const data = { id, password };
  try {
    await axios.post("/auth/sign-in", data, { withCredentials: true });
  } catch (error) {
    const message = error as unknown as AxiosError;
    return message;
  }
};

//로그아웃
export const logout = async () => {
  try {
    await axios.post("/auth/sign-out", {}, { withCredentials: true });
  } catch (error) {
    const message = error as unknown as AxiosError;
    return message;
  }
};

//카카오 로그인
export const kakaoLogin = async (query: string) => {
  try {
    await axios.post(`/oauth/token${query}`);
  } catch (error) {
    const message = error as unknown as AxiosError;
    return message;
  }
};

//리프래쉬 토큰
export const refreshToken = async () => {
  try {
    await axios.post("/auth/refresh");
  } catch (error) {
    const message = error as unknown as AxiosError;
    return message;
  }
};
