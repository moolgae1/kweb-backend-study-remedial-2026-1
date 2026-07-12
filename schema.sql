-- KWEB 2026-1 BE 구제 과제 - 데이터베이스 스키마
-- 아래 순서대로 실행하세요.

-- 1) 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS kweb_todo
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE kweb_todo;

-- 2) todo 테이블 생성
CREATE TABLE IF NOT EXISTS todo (
    id          BIGINT       NOT NULL AUTO_INCREMENT,
    title       VARCHAR(255) NOT NULL,
    description TEXT         NULL,
    is_done     BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- 3) (선택) 테스트용 예시 데이터
INSERT INTO todo (title, description, is_done) VALUES
  ('장보기', '우유, 계란, 빵 사기', FALSE),
  ('운동하기', '30분 러닝', TRUE);
