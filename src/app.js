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
    <h1>백엔드 스터디 회고</h1>
    <p>배운 것</p>
    1. 자바스크립트 기본 문법, SQL 쿼리
    2. 데이터베이스 구조
    3. 웹 설계 방식(관심사 분리, API의 개념)

    <h1>구제과제를 하면서 배운 것</h1>
    1. 스터디 시간에는 github codespace에서만 작업했었는데,
    이번 과제에서는 repo를 clone하여 로컬에서 작업하는 경험을 해보았다.
    그래서 로컬 작업환경에서 직접 mySQL을 구축하고, cmd창을 켜서 이런저런
    커맨드를 쓰는 것을 배웠다.
    (git 관련 커맨드, SQL 쿼리쓰는법 등)
    
    2. 사실 과제에서는 모든 파일들이 만들어져 있어서 그 구조를 이해하지 
    않은 채로 코드만 따라 썼었는데, 이번 과제를 위해 공부하면서 백지 상태부터 ai의 도움을
    받아 웹서버를 위한 파일들을 구조에 맞게 만드는 연습을 해보았다. 또한 단순히
    코드를 따라 쓰는 것이 아니라, ai가 알려준 문법을 이해하고 그것을 직접 응용해보면서
    

    3.-layered architecture에 대해 이해하고 구현할 수 있게 되었다. 이번 과제 
    내용이 그것이였기 때문. controller - service - repository 구조로 관심사를
    분리한다는 것이 무엇인지 이해하였다.

    4. ai를 이용한 학습과 작업에 익숙해질 수 있었다. ai 모델은 codex 5.5 high를
    이용하였다. 이번 과제의 목적은 내가 백엔드 개발을 배우는 것이기 때문에 codex는 
    agent이지만 한번도 내 파일을 직접 수정하지 않았고, 내가 만들어놓은 폴더 구조나
    써질러놓은 괴상한 코드를 보며 지적해주기만 하였다.
    ai가 작업을 대신 해줄수 있을뿐만 아니라 학습 도우미로서의 역할도 잘 수행한다는
    것을 느꼈다. 그리고 단순 오류 검증뿐만 아니라 써놓은 코드를 개선할 방향을 제시해
    달라고 해서 코드를 개선하기도 하였다.


    +그 rubric.md에는 미들웨어 3종을 직접 구현해야 하는 것처럼 되어있는데 받은 
    repo에는 전부 구현이 되어있는데 맞나요?

  `);
});


// [라우터] 할 일(To-Do) 관련 API
app.use('/todos', todoRouter);

// [미들웨어] 중앙 에러 처리 - 반드시 모든 라우터 등록 이후, 가장 마지막에 위치해야 합니다.
app.use(errorMiddleware);

module.exports = app;
