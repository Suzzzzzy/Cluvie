## 🗣️클러비(cluvie)

### **`클러비(cluvie)`**

1. 프로젝트 주제: 관심 있는 영화에 대해 이야기할 수 있는 모임을 주선하는 서비스
2. 엔드유저에게 보이는 웹 서비스 타이틀 및 한 줄 소개: 영화 보고 친해져요!
3. 팀 구성원의 전체 이름과 역할

| 이름 | 역할 |
| ------ | ------ |
| 장소영 | 팀장, 백엔드 |
| 유수지 | 백엔드 |
| 이시은 | 프론트엔드 |
| 신가현 | 프론트엔드 |
| 성기환 | 인공지능 |


### **`서비스 설명`**

##### 1. 기획 의도
- 영화에 관심 있는 사람들끼리 소통할 수 있는 서비스를 제공
- 코로나가 완화되면서 대면 모임 활성화
- 영화를 주제로 다양한 모임 형태 생성 가능
- 관심 분야가 비슷한 사람들끼리의 친목 도모, 영화 산업 활성화

##### 2. 사용된 인공지능 알고리즘 및 모델 과 기술스택
- 인공지능 : beomi/kcElectra-base, koBart, srobertaModel, Transfer learning, 
- ElectraForSequenceClassification : 혐오글 탐지, 
- ElectraForTokenClassification : NER
- BartForConditionalGeneration : 요약문 생성
- SentenceTransformers : 키워드 추출
- 프론트엔드: React, Typescript, React-Query, EmotionJS
- 백엔드: NodeJS, MySQL, Redis, Websocket

##### 3. 웹 서비스의 최종적인 메인 기능과 서브 기능 설명
- 메인 기능
   1. 영화 모임 구성
       - 모임 생성
       - 모임 검색
       - 채팅
       - 조회수, 찜하기
   2. 로그인, 회원가입
       - 소셜 로그인
   3. 마이페이지
       - (가입 모임 없는 경우)모임 바로가기
       - 가입한 모임
       - 찜하기한 모임
- 서브 기능
   1. 자유게시판
       - 게시판 CRUD
   2. 영화 정보 제공
       - 영화 정보
       - 영화 검색
       - 영화 리뷰
   3. 마이페이지
       - 내가 쓴 리뷰
       - 내가 쓴 게시글
   4. 사용자 네트워크
       - 다이렉트 메시지

##### 4. 프로젝트 구성
- 와이어프레임 (whimsical, figma 등 링크 삽입): [Figma](https://www.figma.com/file/lBGeWRcJnkiAPIFfQIxaWM/3%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1)
- 스토리보드 및 유저 시나리오

##### 5. 프로젝트 평가 기준
- 메인 기능의 완성도
- 각 파트의 기술 스택 활용도
- 일정에 잘 맞춰서 진행되었는지
