// [미들웨어] POST /todos 요청 body의 유효성을 검사합니다.
// title이 없거나 빈 문자열이면 400을 반환하고, 다음 로직으로 넘어가지 않습니다.
module.exports = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'title은 필수 항목입니다.',
    });
  }

  next();
};
