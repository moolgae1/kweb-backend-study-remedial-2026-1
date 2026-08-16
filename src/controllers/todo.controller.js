const todoService = require('../services/todo.service');

// 아직 구현되지 않은 부분을 표시하기 위한 헬퍼입니다. (구현하면서 삭제하세요)
const notImplemented = () =>
  Object.assign(new Error('아직 구현되지 않았습니다.'), { status: 501 });

// ============================================================
// [정답 예시] GET /todos
// 컨트롤러의 역할: req에서 값을 꺼내고 -> service 호출 -> res로 응답.
// 여기에 SQL이나 비즈니스 로직을 두지 마세요.
// ============================================================
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getAllTodos();
    res.status(200).json({ success: true, data: todos });
  } catch (err) {
    next(err); // 에러는 직접 처리하지 말고 error.middleware로 넘깁니다.
  }
};

// ============================================================
// [직접 구현] GET /todos/:id
// ============================================================
exports.getTodoById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await todoService.getTodoById(id);
    res.status(200).json({ success: true, data: todo });
    // TODO: req.params.id를 꺼내 todoService를 호출하고, 200으로 응답하세요.
  } catch (err) {
    next(err);
  }
};

// ============================================================
// [직접 구현] POST /todos
// ============================================================
exports.createTodo = async (req, res, next) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const todo = await todoService.createTodo({title, description});
    res.status(201).json({ success: true, data: todo });
    // TODO: req.body에서 title, description을 꺼내 todoService를 호출하고, 201로 응답하세요.
  } catch (err) {
    next(err);
  }
};

// ============================================================
// [직접 구현] PATCH /todos/:id
// ============================================================
exports.updateTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const fields = req.body;
    const todo = await todoService.updateTodo(id, fields);
    res.status(200).json({ success: true, data: todo });
    // TODO: req.params.id와 req.body를 이용해 todoService를 호출하고, 200으로 응답하세요.
  } catch (err) {
    next(err);
  }
};

// ============================================================
// [직접 구현] DELETE /todos/:id
// ============================================================
exports.deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    await todoService.deleteTodo(id);
    // TODO: req.params.id로 todoService를 호출하고, 204로 응답하세요.
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
