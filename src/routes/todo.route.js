const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');
const validateMiddleware = require('../middlewares/validate.middleware');

// ===== [정답 예시] 아래 엔드포인트는 완성되어 있습니다. 패턴을 참고하세요. =====
// GET /todos - 할 일 목록 조회
router.get('/', todoController.getTodos);

// ===== [직접 구현] 아래 엔드포인트들을 완성하세요. =====

// GET /todos/:id - 특정 할 일 조회
router.get('/:id', todoController.getTodoById);

// POST /todos - 할 일 생성 (validateMiddleware가 title을 먼저 검사합니다)
router.post('/', validateMiddleware, todoController.createTodo);

// PATCH /todos/:id - 할 일 수정
router.patch('/:id', todoController.updateTodo);

// DELETE /todos/:id - 할 일 삭제
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
