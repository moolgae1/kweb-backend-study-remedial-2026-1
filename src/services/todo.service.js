const todoRepository = require('../repositories/todo.repository');

// ============================================================
// [정답 예시] 모든 할 일 조회
// 서비스의 역할: 비즈니스 로직/판단을 담당하고 repository를 호출합니다.
// (예: "없는 할 일이면 404 에러를 던진다" 같은 판단을 여기서 합니다.)
// ============================================================
exports.getAllTodos = async () => {
  return await todoRepository.findAll();
};

// ============================================================
// [직접 구현] 특정 할 일 조회
// ============================================================
exports.getTodoById = async (id) => {
  // TODO: repository.findById(id)로 조회하고,
  //       결과가 없으면 아래처럼 404 에러를 던지세요.
  //       throw Object.assign(new Error('할 일을 찾을 수 없습니다.'), { status: 404 });
  const todo = await todoRepository.findById(id);
  if (!todo) {
    throw Object.assign(new Error('할 일을 찾을 수 없ㅇ습니다.'), { status: 404 });
  }
  return todo;
};

// ============================================================
// [직접 구현] 할 일 생성
// ============================================================
exports.createTodo = async ({ title, description }) => {
  // TODO: repository.create(...)로 생성하고, 생성된 할 일을 반환하세요.
  const todo = await todoRepository.create({title, description});
  return todo;
};

// ============================================================
// [직접 구현] 할 일 수정
// ============================================================
exports.updateTodo = async (id, fields) => {
  // TODO: 먼저 존재 여부를 확인(없으면 404)하고, repository.update(...)로 수정하세요.
  const todo = await todoRepository.findById(id);
  if (!todo) {
    throw Object.assign(new Error('할 일을 찾을 수 없습니다.'), { status: 404 });
  };
  const updatedTodo = await todoRepository.update(id, fields);
  return updatedTodo;
};

// ============================================================
// [직접 구현] 할 일 삭제
// ============================================================
exports.deleteTodo = async (id) => {
  const todo = await todoRepository.findById(id);
  if (!todo) {
    throw Object.assign(new Error('할 일을 찾을 수 없습니다.'), { status: 404 });
  };
  await todoRepository.remove(id);
  
};
