## 요구 사항

### 공통

- [x] 바닐라 스크립트로 작성 (ES5, ES6, Typescript만 사용)
- [x] Chrome 최신버전에서 동작 확인
- [x] 패키지 모듈관리는 npm만 사용
- [x] polyfill, webpack, Testing framework 외의 다른 패키지 사용 금지
- [x] 적절한 마크업 구조 및 태그 사용
  - [x] nav
  - [x] article
  - [x] section
  - [x] noscript
  - [x] time
- 검토 사항
  - [x] 테스트 코드 작성
    - [x] padStart, atoi
  - [x] 코드 구조, 코딩 스타일 리펙토링
- README.md 파일
  - [x] 실행 방법 작성
  - [x] 모듈(파일) 구조 작성
  - [x] 참고 사항 작성
- [x] 앱에서 “BACK” 버튼 클릭 시에 홈 화면 으로 이동
- [x] SPA(Single Page Application)로 코드 작성

### Step 1

- [x] 기본 폴더 구조 만들기
- [x] 모바일 기기 layout 만들기

### Step 2

### 홈 화면

- Navigation
  - [x] 상단에 날짜와 시간을 표시한다.
- Home
  - [x] 아래 3개의 앱이 표시된다.
  - [x] 앱은 Drag & Drop 으로 서로 위치를 이동할 수 있어야 한다.
  - [x] 각 앱 버튼 클릭시 해당 앱 화면으로 이동한다.
    - [ ] `http://localhost:5500/alarm` 상태에서 새로고침시 오류 해결하기.
  - **drag event 사용**
- Storage
  - [x] 앱의 위치는 Local Storage에 저장되어야 한다.
    - [x] 브라우저 Reload 후에도 앱이 바뀐 위치로 렌더링 된다.
  - **LocalStorage API, histroy API, popstate event, dataset 사용**
    - https://developer.mozilla.org/en-US/docs/Web/API/Location

### 앱 알림 화면

- Navigation
  - [x] 상단에 날짜와 시간을 표시한다.
  - [x] 좌측 상단에 `BACK` 버튼이 있다.
    - [x] `BACK` 버튼을 누르면 뒤로 간다.
  - [x] 우측 상단에 `NEW` 버튼이 있다.
    - `margin:auto`: [flexbox로 만들 수 있는 10가지 레이아웃](https://d2.naver.com/helloworld/8540176)
  - [x] `NEW` 버튼 클릭 시 바로 아래 입력창이 렌더링된다.
    - [x] 분은 10분 단위로 입력할 수 있다.
    - [x] 저장을 클릭하면 아래 리스트에 추가되고 입력창은 사라진다.
- Alarm List
  - [x] 알람
    - [x] **알람은 1시부터 24시까지 표현되어야한다.**
    - [x] **알람의 숫자가 1글자이면, 앞에 0으로 한칸 체워준다.**
  - [x] 해당 페이지로 경로가 설정될 때, 알람 리스트를 렌더링한다.
  - [x] **알람의 개수는 15개를 이하이다. 15개를 넘었을 때, 에러 메세지를 출력한다.**
  - [x] 알람 리스트에 “삭제” 클릭 시 해당 리스트가 삭제된다.
  - [x] 다른 앱을 사용 중이더라도, 알람은 동작해야한다.
  - [x] 알람 시간이 되면 alert 창으로 알람 시간을 띄어준다.
    - [x] **알람은 예약된 알람 개수만큼 alert 창을 띄운다.**
  - [x] alert 창 확인 클릭시, 해당 알람은 삭제된다.
- Storage
  - [x] 알람 리스트는 LocalStorage에 저장된다.
  - [x] 브라우저 Reload 후에도, 저장한 정보 그대로 렌더링 된다.

### 메모 화면

- Navigation
  - [x] 상단에 날짜와 시간을 표시한다.
  - [x] 좌측 상단에 `BACK` 버튼이 있다.
    - [x] `BACK` 버튼을 누르면 뒤로 간다.
  - [x] 우측 상단에 `NEW` 버튼이 있다.
  - [x] `NEW` 버튼 클릭 시 바로 아래 입력창이 렌더링된다.
    - [x] input 태그를 사용한다.
    - [x] 메모를 입력하세요가 placeholder로 출력된다.
    - [x] 메모가 공란이면 alert 메세지를 띄운다.
    - [x] **input focus 상태에서** 엔터키 입력 시 저장되고, 입력창은 사라진다.
- Memo List
  - [x] 메모 리스트는 메모를 2줄만 표시한다.
  - [x] 해당 메모 클릭 시 모든 메모 내용이 나오도록 펼쳐져야 한다.
  - [x] 한번에 하나의 메모만 펼칠 수 있다.
  - [ ] 메모 스크롤 만들기
- Storage
  - [x] 모든 메모는 LocalStorage에 저장된다.
  - [x] 브라우저 Reload 후에도 저장된 메모가 그대로 렌더링 된다.

### 사진 화면

- Navigation
  - [x] 상단에 날짜와 시간을 표시한다.
  - [x] 좌측 상단에 `BACK` 버튼이 있다.
    - [x] `BACK` 버튼을 누르면 뒤로 간다.
  - [x] 우측 상단에 `NEW` 버튼이 존재하지 않는다.
- Photo List
  - [x] 사진은 로컬에 10개이상 저장되어있어야 한다.
  - [x] 저장된 사진을 화면에 렌더링 한다.
  - [x] 상단에 모든 사진 리스트가 나오며 가로 스크롤이 되어야 한다.
    - [x] **초기 화면의 스크롤 위치는 현재 선택된 사진이 초 밑에 오도록 한다.**
    - [x] **초기 화면의 선택된 사진은 리스트에서 사진이 선택되었다는 표시가 되어있다.**
  - [x] 리스트에서 사진을 선택 하면, 사진이 선택되었다는 표시가 된다.
    - [x] 리스트에 Border로 표시
    - position 속성을 `fixed` 또는 `absoute`로 값을 주면 지정된 노드는 전체 노드에서 분리된다. 즉, 전체 노드에 걸쳐 Reflow 비용이 들지 않으며, 해당 노드의 Repaint 비용만 들어가게 된다.
- Photo
  - [x] 선택된 사진은 아래에 표시된다.
  - [x] 가로 세로 중앙 정렬되어야한다.
  - [x] 화면 비율에 알맞게 렌더링 되어야한다.
