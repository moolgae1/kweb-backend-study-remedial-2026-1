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
  const [rows] = await pool.query(
    'SELECT id, title, description, is_done, created_at, updated_at FROM todo WHERE id = ?',
    [id]
  );
  return rows[0];
};

// ============================================================
// [직접 구현] 할 일 생성
// ============================================================
exports.create = async ({ title, description }) => {
  // TODO: 'INSERT INTO todo (...) VALUES (...)' 쿼리를 작성하고,
  //       생성된 행을 반환하세요. (insertId를 이용해 다시 조회해도 됩니다.)
  const [result] = await pool.query(
    'INSERT INTO todo (title, description) VALUES (?, ?)',
    [title, description]
  );
  const createdTodo = await exports.findById(result.insertId);
  return createdTodo;
};

// ============================================================
// [직접 구현] 할 일 수정
// ============================================================
exports.update = async (id, fields) => {
  //변경 가능한 열만 나열
  const allowedFields = ["title", "description", "is_done"];
  
  const setParts = [];
  const values = [];

  //fields를 순회하면서 변경가능 열의 값을 가지고 있는 녀석을
  //setParts와 values에 집어넣습니다.
  for (const [key, value] of Object.entries(fields)) {
    if (allowedFields.includes(key)) {
      setParts.push(`${key} = ?`);
      values.push(value);
    };
  };

  //validate 미들웨어에서 400을 처리해주긴 하지만
  //만약 allowedFields에 없는 열만 들어올 경우 400을 여기서 보냅니다.
  if (setParts.length === 0) {
    throw Object.assign(new Error('수정할 값이 없습니다.'), { status: 400 });
  };

  values.push(id);
  
  await pool.query(
    `UPDATE todo SET ${setParts.join(', ')} WHERE id = ?`,
    values
  );

  const updatedTodo = await exports.findById(id);
  return updatedTodo;

  //기존 todo를 가져와서 안들어온 값을 유지하고 title, description, is_done을 모두 UPDATE하는 방법과 
  //위 방법을 ai가 추천해주었는데, ai가 위의 방법을 실무에서 더 많이 사용된다고 하여 ai의 도움을 받아
  //저렇게 구현하였습니다.
  
};

// ============================================================
// [직접 구현] 할 일 삭제
// ============================================================
exports.remove = async (id) => {
  // TODO: 'DELETE FROM todo WHERE id = ?' 쿼리를 작성하세요.
  await pool.query(
    'DELETE FROM todo WHERE id = ?',
    [id]
  );
};
