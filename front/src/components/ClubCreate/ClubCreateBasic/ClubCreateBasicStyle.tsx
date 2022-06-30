import styled from "@emotion/styled/macro";
import { Button } from "@mui/material";
import { StyledInput, inputBase } from "@/styles/containers";
import { StyledSpan } from "@/styles/text";

const ClubCreateFormBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ThumnailBox = styled.div<{ noThumnail?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  background-color: ${(props) => (props.noThumnail ? "#d3d3d3" : "")};
  border-radius: 10px;
  position: relative;
  margin-bottom: 35px;
`;

const ThumnailLabel = styled.label<{ noThumnail?: boolean }>`
  position: absolute;
  color: white;
  opacity: ${(props) => (props.noThumnail ? 1 : 0)};
  .thumnail-icon {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
`;
const ThumnailImage = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 60px;
  border-radius: 10px;
`;

const FormBox = styled.div`
  width: 500px;
  height: 600px;
  img {
    margin-bottom: 60px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const HeadCountInput = styled(StyledInput)`
  width: 20%;
  margin-right: 10px;
`;

const MeetingInputBox = styled.div`
  display: flex;
  span {
    margin: 0 10px 0 5px;
  }
`;

const Line = styled.hr`
  width: 1;
  height: 600px;
  opacity: 0.2;
`;

const StyledSelect = styled.select`
  ${inputBase}
  font-size: 16px;
`;

const HashtagsBox = styled.div`
  margin-top: 10px;
`;

const HashtagNotice = styled.span`
  color: #716847;
  font-size: 12px;
`;

const HashtagNotice2 = styled.span`
  color: rgba(113, 104, 71, 0.6);
  font-size: 12px;
`;

const HashtagSpan = styled(StyledSpan)`
  background-color: #716847;
  border: 5px solid #716847;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const HashtagSpan2 = styled(StyledSpan)`
  background-color: #ffc300;
  border: 5px solid #ffc300;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const AIButton = styled(Button)`
  margin-left: 5px;
  padding: 2px 4px;
  font-size: 11px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  background-color: #ffc300;
  &:hover {
    background-color: rgba(255, 195, 0, 0.6);
  }
`;

export {
  ClubCreateFormBox,
  ThumnailBox,
  ThumnailLabel,
  ThumnailImage,
  FormBox,
  InputBox,
  HeadCountInput,
  MeetingInputBox,
  Line,
  StyledSelect,
  HashtagsBox,
  HashtagNotice,
  HashtagNotice2,
  HashtagSpan,
  HashtagSpan2,
  AIButton
};
