const express = require('express');
const loggerMiddleware = require('./middlewares/logger.middleware');
const errorMiddleware = require('./middlewares/error.middleware');
const todoRouter = require('./routes/todo.route');

const app = express();

// JSON 형식의 요청 body를 파싱합니다.
app.use(express.json());

// [미들웨어] 모든 요청을 로깅합니다.
app.use(loggerMiddleware);

// ============================================================
// [필수 구현: GET /] 스터디 회고 페이지 (HTML)
// - res.json()이 아니라 res.send()로 HTML을 반환해야 합니다.
// - 이번 백엔드 스터디에서 배운 것 / 얻은 것
// - 가장 중요하다고 생각하는 개념 3가지와 그 이유
// 반드시 "본인의 언어로" 작성하세요.
// ============================================================
app.get('/', (req, res) => {
  // TODO: 아래 예시를 본인의 회고 내용으로 바꿔 작성하세요.
  res.send(`
    <h1>TODO: 스터디 회고 페이지를 작성하세요</h1>
    <p>이 부분을 본인의 언어로 채워주세요.</p>
  `);
});


// [라우터] 할 일(To-Do) 관련 API
app.use('/todos', todoRouter);

// [미들웨어] 중앙 에러 처리 - 반드시 모든 라우터 등록 이후, 가장 마지막에 위치해야 합니다.
app.use(errorMiddleware);

module.exports = app;
