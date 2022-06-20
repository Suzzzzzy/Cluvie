import React, { useEffect, useState } from "react";

import * as Interface from "@/utils/interface";
import { onChangeFunction } from "@/utils/eventHandler";
import testimage from "@/asset/images/testimage.PNG";

import { ColumnContainerBox, StyledInput } from "@/styles/containers";
import { StyledLabel } from "@/styles/text";
import {
  ClubCreateFormBox,
  FormBox,
  InputBox,
  HeadCountInput,
  MeetingInputBox,
  Line,
  StyledSelect,
  HashtagsBox,
  HashtagNotice,
  HashtagSpan
} from "./ClubCreateBasicStyle";

function ClubCreateBasic(props: Interface.ClubState) {
  const [ hashtag, setHashtag ] = useState("");
  const [ hashtagArr, setHashtagArr ] = useState<string[]>([]);

  const { clubInfo, setClubInfo } = props;

  const onChange = onChangeFunction(setClubInfo);

  const handleCheckBox = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    
    setClubInfo((prev: any) => ({
      ...prev,
      [target.name]: (target.checked ? 1 : 0),
    }));
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    
    setClubInfo((prev: any) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  const handleHashtagChange = (event: React.ChangeEvent <HTMLInputElement>) => {
    setHashtag(event.target.value);
  }

  const handleHashtagEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    
    if (event.key === "Enter") {
      // 중복 처리
      if (hashtagArr.includes(value)) {
        alert("이미 등록된 해시태그입니다!");
        return;
      }

      // 3개까지만 입력 가능
      if (hashtagArr.length === 3) {
        alert("해시태그를 3개 모두 입력하셨습니다!");
        return;
      }

      setHashtagArr((prev) => [...prev, value]);
      setHashtag(""); 
    }
  }

  const handleSpanClickDelete = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedHashtag = event.currentTarget.id;
    const newHashtagArr = hashtagArr.filter((el: string) => el !== clickedHashtag);

    setHashtagArr(() => newHashtagArr);
    setHashtag("");
  }

  // hashtagArr 변경될 때 clubInfo를 업데이트
  useEffect(() => {
    setClubInfo((prev: any) => ({
      ...prev,
      hashtags: hashtagArr.join(","),
    }));
  }, [hashtagArr]);
  
  return (
    <ColumnContainerBox>
      <h1>클럽 생성하기</h1>
      <ClubCreateFormBox>
        <FormBox>
          <img
            src={testimage}
            alt='Club Thumnail'
            width={500}
            height={300}
          />
          <InputBox>
            <StyledLabel htmlFor='name'>클럽명</StyledLabel>
            <StyledInput
              type='text'
              name='name'
              value={clubInfo.name}
              onChange={onChange}
            />
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor='intro'>한줄 소개</StyledLabel>
            <StyledInput
              type='text'
              name='intro'
              value={clubInfo.intro}
              onChange={onChange}
            />
          </InputBox>
        </FormBox>
        <Line />
        <FormBox>
          <InputBox>
            <StyledLabel htmlFor='head_count'>최대 모집 인원</StyledLabel>
            <HeadCountInput
              type='number'
              name='head_count'
              value={clubInfo.head_count}
              onChange={onChange}
              min='1'
            />
            <span>명</span>
          </InputBox>
          <MeetingInputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingMethod'>진행 방식</StyledLabel>
              <input
                type='checkbox'
                name='online'
                value={clubInfo.online}
                onClick={handleCheckBox}
              />
              <span>온라인</span>
              <input
                type='checkbox'
                name='offline'
                value={clubInfo.offline}
                onClick={handleCheckBox}
              />
              <span>오프라인</span>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingDay'>진행 요일</StyledLabel>
              <input type='checkbox' name='weekday' value={clubInfo.weekday} onClick={handleCheckBox} />
              <span>평일</span>
              <input type='checkbox' name='weekend' value={clubInfo.weekend} onClick={handleCheckBox} />
              <span>주말</span>
            </InputBox>
          </MeetingInputBox>
          <InputBox>
            <StyledLabel htmlFor='duration'>진행 기간</StyledLabel>
            <StyledSelect name='duration' id='duration' onChange={handleSelect}>
              <option value='0'>미정</option>
              <option value='1'>단기</option>
              <option value='2'>1~2개월</option>
              <option value='3'>3~4개월</option>
              <option value='4'>5~6개월</option>
              <option value='5'>6개월 이상</option>
              <option value='6'>장기</option>
            </StyledSelect>
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor='hashtags'>해시태그
              <HashtagNotice>최대 3개를 입력해 주세요</HashtagNotice>
            </StyledLabel>
            <StyledInput
              type='text'
              name='hashtags'
              value={hashtag}
              onChange={handleHashtagChange}
              onKeyPress={handleHashtagEnter}
            />
            <HashtagsBox>
              {hashtagArr.map((el: string) => <HashtagSpan id={el} key={el} onClick={handleSpanClickDelete}>#{el}</HashtagSpan>)}
            </HashtagsBox>
          </InputBox>
        </FormBox>
      </ClubCreateFormBox>
    </ColumnContainerBox>
  );
}

export default ClubCreateBasic;