DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS questions_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;

PRAGMA foreign_keys = ON;

CREATE TABLE users(
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL
);

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT,
  user_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE questions_follows(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  user_id INTEGER,
  parent_id INTEGER,
  body TEXT,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id)
);

CREATE TABLE question_likes(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,
  liked BOOLEAN,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO 
  users(fname, lname)
  VALUES('Ian', 'Dechow'), ('Manraj', 'Singh');

INSERT INTO 
  questions(title, body, user_id)
  VALUES('SQL?', 'What is SQL and why should I care?', 1),
  ('Ruby', 'What is Ruby is it better than Python?', 2);

INSERT INTO
  replies(question_id, user_id, parent_id, body)
  VALUES(1, 1, 1, 'Because SQL is useful.'),
  (2, 2, 2, 'I am not sure if it is.');

