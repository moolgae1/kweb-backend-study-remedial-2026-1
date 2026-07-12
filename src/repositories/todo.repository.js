const pool = require('../config/db');

// ============================================================
// [정답 예시] 모든 할 일 조회
// 레포지토리의 역할: 오직 SQL 쿼리만 실행하고 결과를 반환합니다.
// 여기에서 res.json() 같은 응답 코드를 두지 마세요.
// ============================================================
exports.findAll = async () => {
  const [rows] = await pool.query(
    'SELECT id, title, description, is_done, created_at, updated_at FROM todo ORDER BY id DESC'
  );
  return rows;
};

// ============================================================
// [직접 구현] id로 할 일 1개 조회
// ============================================================
exports.findById = async (id) => {
  // TODO: 'SELECT ... FROM todo WHERE id = ?' 쿼리를 작성하고,
  //       결과 1개(없으면 undefined)를 반환하세요.
  //       힌트: const [rows] = await pool.query(sql, [id]); return rows[0];
  throw new Error('아직 구현되지 않았습니다.');
};

// ============================================================
// [직접 구현] 할 일 생성
// ============================================================
exports.create = async ({ title, description }) => {
  // TODO: 'INSERT INTO todo (...) VALUES (...)' 쿼리를 작성하고,
  //       생성된 행을 반환하세요. (insertId를 이용해 다시 조회해도 됩니다.)
  throw new Error('아직 구현되지 않았습니다.');
};

// ============================================================
// [직접 구현] 할 일 수정
// ============================================================
exports.update = async (id, fields) => {
  // TODO: 'UPDATE todo SET ... WHERE id = ?' 쿼리를 작성하세요.
  throw new Error('아직 구현되지 않았습니다.');
};

// ============================================================
// [직접 구현] 할 일 삭제
// ============================================================
exports.remove = async (id) => {
  // TODO: 'DELETE FROM todo WHERE id = ?' 쿼리를 작성하세요.
  throw new Error('아직 구현되지 않았습니다.');
};
