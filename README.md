# Smartphone Emulation

## 실행 방법 작성

```bash
git clone https://github.com/hochan222/smartphone-emulation.git && cd smartphone-emulation && npm install && npm start
```

**cypress 실행 방법**

```bash
npm run cypress:open
```

## 모듈(파일) 구조 작성

```bash
.
├── README.md
├── REQUIREMENTS.md
├── package-lock.json
├── package.json
├── ...
├── public
│   └── index.html
├── src
│   ├── @shared
│   │   ├── constants.ts
│   │   ├── router.ts
│   │   └── utils.ts
│   ├── assets
│   │   ├── end-game-2.png
│   │   ├── end-game.png
│   │   ├── index.ts
│   │   └── ...
│   ├── controller
│   │   ├── alarm-page.ts
│   │   ├── home-page.ts
│   │   ├── index.ts
│   │   ├── memo-page.ts
│   │   └── photo-page.ts
│   ├── index.ts
│   ├── model
│   │   ├── alarm-page.ts
│   │   ├── app-datas.ts
│   │   ├── home-page.ts
│   │   ├── index.ts
│   │   ├── interface.ts
│   │   └── memo-page.ts
│   ├── style.css
│   ├── types
│   │   └── images.d.ts
│   └── view
│       ├── alarm-page.css
│       ├── alarm-page.ts
│       ├── home-page.css
│       ├── home-page.ts
│       ├── index.ts
│       ├── memo-page.css
│       ├── memo-page.ts
│       ├── navigation.css
│       ├── navigation.ts
│       ├── photo-page.css
│       └── photo-page.ts
├── tsconfig.json
└── webpack.config.js
```

- **public 폴더:** html 파일이 존재하는 폴더이다.
- **src 폴더:** 작성되는 모든 자바스크립트 코드는 src 폴더 안에 존재한다.
  - **view 폴더:** 전체적인 로직과는 관련없는 렌더링되는 HTML 태그 요소들을 정의하는 폴더이다.
  - **model 폴더:** Local Storage와 상호 작용하기위한 코드들을 정의하는 폴더이다.
  - **controller 폴더:** 어떤 이벤트가 발생했을때, 해당 이벤트를 처리하기 위한 코드를 정의하는 폴더이다.
  - **assets 폴더:** 앨범 화면에 렌더링되는 이미지들이 해당 폴더에 존재한다.
  - **@shared 폴더:** 유틸 함수나 상수등을 정의하는 폴더이다.
  - **types 폴더:** png, jp(e)g등의 이미지 파일 타입을 정의하는 폴더이다.
- **REQUIREMENTS.md**: 요구사항을 정의한 파일이다.

## 참고 사항 작성

### 요구사항 정의서

- [REQUIREMENTS.md](https://github.com/hochan222/smartphone-emulation/blob/master/REQUIREMENTS.md)

### 스케줄 관리

- [사전 필요 지식 조사 및 계획, 일정](https://github.com/hochan222/smartphone-emulation/issues/1)

### smartphone emulation 구현 후기

- [smartphone emulation](https://egas.tistory.com/128)
