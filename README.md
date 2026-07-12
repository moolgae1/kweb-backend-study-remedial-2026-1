# KWEB 2026-1 BE 구제 과제 — 할 일 관리(To-Do) API

이 저장소는 KWEB 2026학년도 1학기 백엔드 준회원 승급 **구제 과제**의 시작 템플릿입니다.
`GET /todos` 엔드포인트는 3-Layered Architecture의 **정답 예시**로 완성되어 있습니다. 이 패턴을 참고하여 나머지 `TODO` 부분을 직접 구현하세요.

과제 명세 전문은 별도로 제공된 `BE 구제 과제 (2026-1).md` 문서를 참고하세요.

---

## 제출 방법 (Fork & Pull Request)

1. 이 템플릿 저장소를 본인 계정으로 **Fork** 합니다.
2. Fork 한 저장소를 clone 하여 과제를 구현합니다.
3. 완료 후 본인 fork에서 **원본 저장소로 Pull Request**를 생성합니다.
4. PR 설명에 아래 3가지를 **본인의 언어로** 작성합니다.
   - 구현하면서 내린 주요 설계 결정
   - 막혔던 부분과 해결 방법
   - 로컬 실행 방법 요약

---

## 폴더 구조

```
src/
├── index.js                  # 서버 실행
├── app.js                    # Express 앱 + 미들웨어/라우터 등록 + GET / 회고 페이지
├── config/db.js              # MySQL 연결
├── routes/todo.route.js      # [Presentation] URL 라우팅
├── controllers/todo.controller.js  # [Presentation] req/res 처리
├── services/todo.service.js  # [Business] 로직/판단
├── repositories/todo.repository.js # [Data Access] SQL 쿼리
└── middlewares/
    ├── logger.middleware.js
    ├── validate.middleware.js
    └── error.middleware.js
```

---

## 로컬 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 데이터베이스 준비

MySQL에 접속하여 `schema.sql`을 실행합니다.

```bash
mysql -u root -p < schema.sql
```

### 3. 환경 변수 설정

`.env.example`을 복사해 `.env`를 만들고 본인 환경에 맞게 값을 채웁니다.

```bash
cp .env.example .env
```

### 4. 서버 실행

```bash
npm start
```

정상적으로 실행되면 `http://localhost:3000` 에서 API를 사용할 수 있습니다.

### 5. 동작 확인 예시

```bash
# 회고 페이지 (브라우저로 접속)
# http://localhost:3000/

# 할 일 목록 조회 (정답 예시로 이미 동작합니다)
curl http://localhost:3000/todos
```

---

## 구현 체크리스트

- [ ] `GET /todos/:id` — 특정 할 일 조회 (없으면 404)
- [ ] `POST /todos` — 할 일 생성 (title 없으면 400)
- [ ] `PATCH /todos/:id` — 할 일 수정
- [ ] `DELETE /todos/:id` — 할 일 삭제 (204)
- [ ] `GET /` — 스터디 회고 페이지 (`res.send`로 HTML 반환)
- [ ] 미들웨어 3종 동작 (로깅 / 유효성 검사 / 중앙 에러 처리)

---

## 생성형 AI 사용 명시 (필수)

과제 수행 중 생성형 AI를 사용했다면, 사용한 부분과 프롬프트를 아래에 정확히 적어주세요.
단, `GET /` 회고 페이지의 내용과 PR 설명은 반드시 **본인이 직접** 작성해야 합니다.

- (예시) `POST /todos`의 INSERT 쿼리 작성에 참고 — 프롬프트: "..."
-

## Disclaimer

이 템플릿은 제작에 생성형 AI가 사용되었습니다.