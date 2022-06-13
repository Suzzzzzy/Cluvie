import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

import { ContainerBox } from "../../styles/Container";
import * as Api from "../../utils/api";

// TODO : 스타일 - 데이터 create(API), 비밀번호 일치 확인, input박스 커스텀, radio 커스텀
// TODO : 검증 - 이메일, 비밀번호, 비밀번호 일치, 닉네임

const RegisterFormInnerBox = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 50px;
  }
`;

const RegisterInputs = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: relative;
    width: 100%;
  }
  div > input {
    width: 100%;
  }
  .icon {
    position: absolute;
    top: 0;
    right: 1%;
    margin-top: 3px;
    width: 20px;
    height: 20px;
  }
  .icon-ok {
    color: #00a424;
  }
  .icon-no {
    color: #ff0000;
  }

  input {
    margin-bottom: 20px;
  }
  input[type="radio"] {
    // display: none;
  }
`;

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    sex: "",
  });

  const isEmailValid = (email: string) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };
  const isPasswordValid = form.password.length >= 6;
  const isPasswordConfirmed = form.password === form.confirmPassword;
  const isNicknameValid = form.nickname.length >= 2;
  const isFormValid =
    isEmailValid(form.email) &&
    isPasswordValid &&
    isPasswordConfirmed &&
    isNicknameValid;

  const showValidIcon = (validation: boolean) => {
    return validation ? (
      <CheckCircleOutlineIcon className='icon icon-ok' />
    ) : (
      <DoNotDisturbIcon className='icon icon-no' />
    );
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);

    // * 데이터 create 후 메인 페이지로 이동하기
    // const { email, password, nickname, birthDate, sex } = form;
    // Api.post("/users", {
    //   email,
    //   password,
    //   nickname,
    //   birthDate,
    //   sex,
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <ContainerBox>
      <RegisterFormInnerBox onSubmit={handleSumbit}>
        <h1>회원가입</h1>
        <RegisterInputs>
          <label htmlFor='email'>
            이메일
            <div>
              <input
                type='text'
                name='email'
                value={form.email}
                onChange={onChange}
              />
              {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
            </div>
          </label>
          <label htmlFor='password'>
            비밀번호
            <div>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={onChange}
              />
              {form.password ? showValidIcon(isPasswordValid) : ""}
            </div>
          </label>
          <label htmlFor='confirmPassword'>
            비밀번호 확인
            <div>
              <input
                type='password'
                name='confirmPassword'
                value={form.confirmPassword}
                onChange={onChange}
              />
              {form.confirmPassword ? showValidIcon(isPasswordConfirmed) : ""}
            </div>
          </label>
          <label htmlFor='nickname'>
            닉네임
            <div>
              <input
                type='text'
                name='nickname'
                value={form.nickname}
                onChange={onChange}
              />
              {form.nickname ? showValidIcon(isNicknameValid) : ""}
            </div>
          </label>
          성별
          <div id='sex' onChange={onChange}>
            <label htmlFor='women'>
              <input type='radio' name='sex' value='여성' />
              여성
            </label>
            <label htmlFor='men'>
              <input type='radio' name='sex' value='남성' />
              남성
            </label>
            <label htmlFor='none'>
              <input type='radio' name='sex' value='여성도 남성도 아니에요' />
              여성도 남성도 아니에요
            </label>
          </div>
          생년월일
          <div className='birth'>
            <input
              type='date'
              name='birthDate'
              value={form.birthDate}
              onChange={onChange}
            />
          </div>
          <button type='submit' disabled={!isFormValid}>
            회원가입
          </button>
        </RegisterInputs>
      </RegisterFormInnerBox>
    </ContainerBox>
  );
}

export default RegisterForm;