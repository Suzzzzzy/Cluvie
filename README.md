![image](https://user-images.githubusercontent.com/97580836/183573991-fcee684b-182e-4203-9418-280116d5d6e8.png)


## 1. **GitLab 링크**

---

🗣️ [Cluvie 깃랩으로 이동](https://kdt-gitlab.elice.io/ai_track/class_04/ai_project/team18/cluvie)

## 2. 서비스 소개

---

### **🚩Cluvie의 기획 의도**

![image](https://user-images.githubusercontent.com/97580836/183574072-7ffaa393-a1e8-46c0-bd8c-5ef240d84f64.png)

  🤔 **문제 인식 -** 새로운 인간관계의 필요, 나와 취향이 비슷한 사람과 모일 수는 없을까?

- 많은 사람들이 평소 다양한 모임에 참여해야 할 필요성을 느낌
- 그중에서 **취향과 관심사에 의한 불특정 다수와의 모임**이 필요하다는 의견도 기존 인간관계에 의한 모임만큼 많은 비율을 차지
- 모임 앱을 통해 사람을 만나고, 모임에 참여하고자 하는 의향도 비교적 높은 편이었으며, 특히 20~30대 젊은 세대가 모임 앱 이용에 거부감이 적은 편이었음
- 향후 참여해 보고 싶은 모임의 종류 중 영화 모임은 낮지 않은 비율을 차지

[출처: 트렌드 모니터 보고서](https://www.trendmonitor.co.kr/tmweb/trend/allTrend/detail.do?bIdx=1779&code=0401&trendType=CKOREA)

  💰 **시장 가능성** - 팬데믹으로 몸집이 부푼 OTT 시장, 엔데믹으로 다시 회복 중인 극장가

![image](https://user-images.githubusercontent.com/97580836/183574121-694e4f45-fd2a-4a22-a33f-c4390a55cfa8.png)

[출처: 헤럴드경제 뉴스](https://news.v.daum.net/v/20220628110949281)

<aside>
👉 **영화**에 관심 있는 사람들끼리 온/오프라인 **모임**을 만들고 **소통**할 수 있는 서비스 제공

</aside>

### **🎬 Cluvie의 페르소나**

![image](https://user-images.githubusercontent.com/97580836/183574157-68c95ae6-fbf9-427b-99b1-09673492f710.png)

<aside>
📎 영화 보기를 즐기고, 모임 서비스 이용에 거부감이 없는 젊은 층을 타겟으로 하는 모임 주선 
서비스 **클러비!**

</aside>

## 3. 기술 스택

---

![image](https://user-images.githubusercontent.com/97580836/183574173-8e252ef8-026a-4c37-997e-324d67b66c21.png)

### 💻 프론트엔드

| React  | 컴포넌트 기반이므로 UI 재사용성이 높고, 공통적으로 익숙한 기술 스택이면서 커뮤니티가 활성화되어 있기 때문에 러닝 커브가 적었음 |
| --- | --- |
| Typescript | 타입을 명시해주어 코드의 의도를 명확히 할 수 있으므로, 잠재적인 오류를 방지할 수 있고 협업에 용이함 |
| React Query | 서버 데이터와 클라이언트 데이터를 구분하기 좋고, 캐싱 및 로딩 처리에 편리함 |
| Recoil | React Hook과 유사한 사용 방식으로 복잡하지 않고, 코드를 깔끔하게 쓸 수 있음 <br> Context API와 다르게 전역 상태를 쓰지 않는 곳은 리렌더링 되지 않음 |
| Emotion | CSS in JS로, 컴포넌트 형식으로 스타일을 작성할 수 있어 코드 통일성과 재사용성이 좋음 |
| MUI | 다양한 컴포넌트를 제공받아 빠르게 UI를 제작할 수 있음 |
| React Quill | 쉽게 텍스트 에디터를 처리할 수 있음 |

### 🖥️ 백엔드

| Node.js & Express | 코드의 양을 줄여 주고, 추후에 유지 보수에 용이 |
| --- | --- |
| MySQL | 관계형 데이터베이스로 데이터 간 관계를 파악하기 좋고, 빠르게 처리할 수 있음 |
| AWS S3 | 로컬에 저장할 필요 없이 많은 데이터를 보관할 수 있음 |

### 🖥️ 인공지능

| Python/Flask | 웹 프레임워크 쉬운 end point 작성 |
| --- | --- |
| Transformers | 언어 모델 학습을 위한 라이브러리 |
| Bert, Bart, Electra, sRoberta | 프리 트레인 모델 |


### 🖥️ 배포

| Docker Nginx |
| --- |

## 4. 기능 소개

---

1. **메인 페이지**
    - 배너에 영화 이미지 infinite carousel
    - 기준에 따라 일부 클럽 모집글 최대 10개씩 표시
        
    ![클러비_-_메인페이지](https://user-images.githubusercontent.com/97580836/183574507-81a74ddf-4b76-400b-9be0-948e8a16f3cd.gif)
        
2. **로그인 페이지**
    - 이메일 아이디 및 비밀번호 유효성 검사
    - JWT(Access Token, Refresh Token) 이용
3. **회원가입 페이지**
    - 각 input의 유효성 검사
    - 인증 메일 발송 및 확인
        
        ![클러비_-회원가입1](https://user-images.githubusercontent.com/97580836/183574526-fd199d0e-7ac6-493d-afc0-a6f04ae54beb.gif)
        ![클러비_-회원가입2](https://user-images.githubusercontent.com/97580836/183574536-16853487-a0e7-478b-985f-a0a7a151bbf0.gif)
        ![클러비_-회원가입3](https://user-images.githubusercontent.com/97580836/183574550-a446bf55-4ae7-4b06-b007-3c265225fa94.gif)
        
4. **클럽 생성 페이지**
    - 인공지능을 활용한 키워드 및 요약문 추출(해시태그와 한줄소개에 적용 가능)
    - 이미지 업로드
    - React Quill 텍스트 에디터를 이용한 상세 모집글 작성
    - 작성 시 보여질 상세 페이지 미리보기 가능
    
    ![클러비-클럽생성1](https://user-images.githubusercontent.com/97580836/183574563-f0a3ea27-044a-46b3-97f8-d925565444e7.gif)
    ![클러비-클럽생성2](https://user-images.githubusercontent.com/97580836/183574574-f597898f-aec2-44e9-977e-56775013e818.gif)
    ![클러비-클럽생성3](https://user-images.githubusercontent.com/97580836/183574585-bade6bed-26e0-40d3-99d3-19333e393f9e.gif)

5. **전체 클럽 목록 페이지**
    - 무한 스크롤로 모든 클럽 모집글 카드 확인
    - 클럽 필터링
    - 클럽 검색
    - 클럽 찜하기
    - 하나의 카드 클릭 시 해당 클럽 모집글 상세 페이지로 이동
    - (+) 버튼 클릭 시 클럽 생성 페이지로 이동
    
    ![클러비-전체_클럽_목록](https://user-images.githubusercontent.com/97580836/183574601-d717a84c-09d3-4d99-a6cc-bfd6e0ab2d4f.gif)
    
6. **클럽 상세 페이지**
    1. 클럽 기본 카드
        - 클럽 이미지 및 기본 정보
        - [현재 가입된 인원/최대 모집 인원] 확인 가능
        - 클럽 신청하기/찜하기/공유하기
        - 클럽 수정/삭제(클럽장만 가능)
        
       ![클러비_-_신청](https://user-images.githubusercontent.com/97580836/183574615-6927e6a0-f716-4177-b1c1-fbec474f9aaa.gif)
        
    2. 클럽 정보 탭
        - 클럽 생성 시 작성한 기본 정보 및 상세 정보 표시
    3. 클럽 리뷰 탭
        - 모집이 마감된 클럽에 한하여, 해당 클럽의 클럽원들은 참여 후기 작성 가능
        - 참여 후기 확인
        - 평균 별점 확인
    
    ![클러비-상세페이지1](https://user-images.githubusercontent.com/97580836/183574638-e23edfce-a4bf-4c12-827c-87791b7701e4.gif)

    !![클러비-상세페이지2](https://user-images.githubusercontent.com/97580836/183574652-56bd2ba2-b75f-40cc-8eab-e72cfe47a942.gif)
    
    
7. **클럽 수정 페이지**
    - 기존에 작성한 클럽 정보 확인 가능
    - 인공지능을 활용한 키워드 및 요약문 추출(해시태그와 한줄소개에 적용 가능)
    - 이미지 업로드
    - React Quill 텍스트 에디터를 이용한 상세 모집글 작성
    - 작성 시 보여질 상세 페이지 미리보기 가능
8. **내 클럽 목록 페이지**
    1. 내가 클럽장인 클럽 탭
        - 클럽에 가입 신청한 회원 목록 확인 가능
        - 모집이 마감되지 않았을 시 클럽원 수락/수락 해제 가능
        - 모집 마감
        - 모집 마감된 클럽의 클럽원 목록 확인 가능
    2. 내가 클럽원인 클럽 탭
        - 가입된 클럽 중 모집마감된 클럽의 클럽장 및 클럽원 목록 확인 가능
    
    ![클러비-내클럽리스트](https://user-images.githubusercontent.com/97580836/183574670-444dcc3c-84a7-4af0-b50c-05ddbb37d317.gif)
    
9. **마이페이지**
    1. 프로필 카드
        - 회원가입 시 작성한 프로필 확인
        - 프로필 수정 가능
    2. 가입 신청한 클럽 탭
        - 가입 신청한 클럽 목록 확인
        - 가입 신청한 클럽의 승인 상태 확인 가능 (수락 시 내 클럽 리스트에 표시)
        - 가입 신청 취소
    3. 찜한 클럽 탭
        - 찜한 클럽 목록 확인
        - 클럽 찜하기/찜해제
    
    ![클러비-마이페이지](https://user-images.githubusercontent.com/97580836/183574677-f9641e63-c98f-48b6-a101-9170fa93fc0a.gif)
    

## 5. 프로젝트 구성도
- 와이어프레임: [Figma](https://www.figma.com/file/lBGeWRcJnkiAPIFfQIxaWM/3%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1)
- API 명세서: [API](https://www.notion.so/3acbc365292748fdafd8978f945cbf1b?v=ff0ae52f70e54e4c80397cab0118f604)
- Table 구상도: [ER Diagram](https://www.notion.so/table-7431f13d13604dcab21f66242ab97b60)
---


## 6. 팀원 소개 및 역할

---

---

| 이름 | 역할 | 담당 부분 | GitHub |
| --- | --- | --- | --- |
| 장소영 | 팀장, 백엔드  |  클럽 스키마 설계 <br> 클럽 관련 API 작성 <br> 무한 스크롤 API 작성 <br> Flask API 연결 | [링크](https://github.com/Ssoyoung-J) |
| 유수지 | 백엔드 |  데이터 테이블 구상 <br> 회원가입 및 로그인 API 작성 <br> 메인페이지 API 작성 <br> 필터링에 맞는 sql문 작성하여 데이터 select <br> 찜하기 및 신청하기 기능 API 작성 | [링크](https://github.com/Suzzzzzy) |
| 이시은 | 프론트엔드 | 와이어프레임 제작 <br> 메인 <br> 로그인 및 회원가입 <br> 전체 클럽 목록 <br> 클럽 생성 (기본 정보 작성) | [링크](https://github.com/leewol) |
| 신가현 | 프론트엔드 | 와이어프레임 제작 <br> 헤더 <br> 내 클럽 목록 <br> 마이페이지 <br> 클럽 상세 <br> 클럽 생성 (상세 정보 작성, 인공지능 API 연동, 미리보기) 및 수정 | [링크](https://github.com/gshin-a) |
| 성기환 | 인공지능 | Flask API 작성 <br> 요약문 생성, 혐오 표현 탐지, 키워드 추출, 개체명인식 AI 모델 전이학습 | [링크](https://github.com/sungkihwan) |
