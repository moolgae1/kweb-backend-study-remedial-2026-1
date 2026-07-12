// [미들웨어] 들어오는 모든 요청을 콘솔에 로깅합니다.
// 예: [GET] /todos
module.exports = (req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
};
