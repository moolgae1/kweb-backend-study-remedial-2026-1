// [미들웨어] 컨트롤러/서비스에서 next(err)로 넘긴 에러를 한 곳에서 처리합니다.
// 반드시 모든 라우터 등록 이후, app.js의 가장 마지막에 등록되어야 합니다.
// 에러 처리 미들웨어는 인자가 (err, req, res, next) 4개여야 Express가 인식합니다.
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || '서버 내부 오류가 발생했습니다.',
  });
};
