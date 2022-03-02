## [FE] 무럭무럭ZARA

## 프로젝트 소개

ZARA를 모티브로한 커머스사이트(Front-end 3명 Back-end 3명 팀 Project)
Navigation Bar와 Product Detail Page 역임
장바구니 조회/추가/수정 기능 구현
Path Parameter통한 선택상품 라우팅 구현
Git 활용한 협업 경험 - 프로젝트 초기세팅, 기능별 branch분리,
작업 후 Pull Request 작성 및 merge 시 conflict 대처

## My Highlights

![ezgif com-gif-maker](https://user-images.githubusercontent.com/62171131/149089092-6d363a18-2e56-4017-95c7-d61e54f5e5bb.gif)


## 개발 인원 및 기간

### 개발기간 ( 총 11일)

- 2021/12/27 ~ 2022/1/7
- 프로젝트 관리 : <a href="https://trello.com/b/2f3aGMvW/first-sprint" >Trello</a>

### FRONTEND (3명)

<a href="https://github.com/sseunn1" >김선주</a>

<a href="https://github.com/wjdgotn77" > 정해수 </a>

<a href="https://github.com/hyeonze" > 안현재 </a>

### BACKEND (3명)

이정석, 장우경, 지원석(https://github.com/wecode-bootcamp-korea/28-1st-MRMRZR-backend)

## 적용 기술 및 구현 기능 적용 기술

`Front-End` : JavaScript, React.js, SASS, React-router-dom </br>
`Back-End` : Django, Python, MySQL, 미니콘다 </br>
`Common` : Git, GitHub, Slack, Trello, Notion </br>

## 담당페이지
   
### 안현재
**Navigation Bar**</br>
모든 페이지에서 공동적으로 사용할 네브바 컴포넌트
1. 장바구니를 누르면 우측에서 현재 장바구니 현황을 백엔드와 통신을 해서 화면에 표시
2. 장바구니에서 수량 수정 및 삭제기능 구현

**Product Detail**</br>
리스트에서 라우터를 통해 들어올 수 있는 제품화면
1. Path Parameter를 통해 선택한 상품에 맞는 데이터를 통신해서 화면에 표시
2. 사이즈선택 후 장바구니 버튼을 클릭 시 장바구니에 추가
