import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled/macro";

import { ContainerBox, StyledInput } from "@/styles/containers";
import { InputBox, UserInputDiv, FormButton } from "@/styles/user";
import { StyledLabel } from "@/styles/text";

import {
  isEmailValid,
  isPasswordValid,
  isPasswordConfirmed,
  isNicknameValid,
  showValidIcon,
} from "@/utils/validation";
import * as Api from "@/utils/api";

// TODO : 회원가입 실패 시 alert

const SignUpFormInnerBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignUpInputBox = styled(InputBox)`
  input {
    margin-bottom: 20px;
  }
  .icon {
    margin-top: 9px;
  }
`;

const RadioInputDiv = styled(UserInputDiv)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledRadioLabel = styled.label`
  border: 1px solid #d3d3d3;
  border-radius: 7px;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    animation: 0.1s linear forwards bgcolor-hover;
    cursor: pointer;
  }
  @keyframes bgcolor-hover {
    from {
    }
    to {
      background-color: #ffc300;
      border: 1px solid #ffc300;
    }
`;

const StyledRadioInput = styled.input`
  display: none;
  &:checked + ${StyledRadioLabel} {
    background-color: #ffc300;
    border: 1px solid #ffc300;
  }
`;

const StyledDateInput = styled.input`
  appearance: none;
  outline: none;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border-radius: 7px;
  border: 1px solid #d3d3d3;
  background: transparent;
  padding-left: 10px;
  font-family: inherit;
  font-size: 14px;

  ::-webkit-datetime-edit-text {
    padding: 0 20px;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    padding-right: 10px;
    font-size: 18px;
  }
  :focus {
    animation: 0.7s linear forwards border-focus;
  }
  @keyframes border-focus {
    from {
      border: 1px solid #d3d3d3;
    }
    to {
      border: 1px solid #ffc300;
    }
`;

function SignUpForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    sex: "",
  });

  const isFormValid =
    isEmailValid(form.email) &&
    isPasswordValid(form.password) &&
    isPasswordConfirmed(form.password, form.confirmPassword) &&
    isNicknameValid(form.nickname) &&
    form.birthday &&
    form.sex;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // * 유저 데이터 create(post) > 로그인(post) > 메인 페이지로 이동
    const { email, password, nickname, birthday, sex } = form;
    Api.post("/users", {
      email,
      password,
      nickname,
      birthday,
      sex,
    })
      .then((res) => {
        console.log("회원가입 성공!");
        console.log(res);

        Api.post("/signIn", {
          email,
          password,
        })
          .then((resSignIn) => {
            console.log("로그인 성공!");
            console.log(resSignIn);

            navigate("/");
          })
          .catch((errSignIn) => {
            console.log("로그인 실패!!");
            console.error(errSignIn);
          });
      })
      .catch((err) => {
        console.log("회원가입 실패!!");
        console.error(err);
      });
  };

  return (
    <ContainerBox>
      <SignUpFormInnerBox onSubmit={handleSumbit} autoComplete='off'>
        <h1>회원가입</h1>
        <SignUpInputBox>
          <StyledLabel htmlFor='email'>이메일</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='text'
              name='email'
              value={form.email}
              onChange={onChange}
            />
            {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
          </UserInputDiv>

          <StyledLabel htmlFor='password'>비밀번호</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='password'
              name='password'
              value={form.password}
              onChange={onChange}
            />
            {form.password ? showValidIcon(isPasswordValid(form.password)) : ""}
          </UserInputDiv>

          <StyledLabel htmlFor='confirmPassword'>비밀번호 확인</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='password'
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={onChange}
            />
            {form.confirmPassword
              ? showValidIcon(
                  isPasswordConfirmed(form.password, form.confirmPassword)
                )
              : ""}
          </UserInputDiv>

          <StyledLabel htmlFor='nickname'>닉네임</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='text'
              name='nickname'
              value={form.nickname}
              onChange={onChange}
            />
            {form.nickname ? showValidIcon(isNicknameValid(form.nickname)) : ""}
          </UserInputDiv>

          <StyledLabel>성별</StyledLabel>
          <RadioInputDiv id='sex'>
            <StyledRadioInput
              id='women'
              type='radio'
              name='sex'
              value='여성'
              checked={form.sex === "여성"}
              onChange={onChange}
            />
            <StyledRadioLabel htmlFor='women'>여성</StyledRadioLabel>
            <StyledRadioInput
              id='men'
              type='radio'
              name='sex'
              value='남성'
              checked={form.sex === "남성"}
              onChange={onChange}
            />
            <StyledRadioLabel htmlFor='men'>남성</StyledRadioLabel>
            <StyledRadioInput
              id='none'
              type='radio'
              name='sex'
              value='여성도 남성도 아니에요'
              checked={form.sex === "여성도 남성도 아니에요"}
              onChange={onChange}
            />
            <StyledRadioLabel htmlFor='none'>
              여성도 남성도 아니에요
            </StyledRadioLabel>
          </RadioInputDiv>
          <StyledLabel>생년월일</StyledLabel>

          <UserInputDiv>
            <StyledDateInput
              type='date'
              name='birthday'
              value={form.birthday}
              onChange={onChange}
            />
          </UserInputDiv>
          <FormButton
            type='submit'
            disabled={!isFormValid}
            isFormValid={!!isFormValid}
            social=''
          >
            회원가입
          </FormButton>
        </SignUpInputBox>
      </SignUpFormInnerBox>
    </ContainerBox>
  );
}

export default SignUpForm;