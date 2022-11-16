DROP DATABASE IF EXISTS reading_log;

CREATE DATABASE reading_log;

\c reading_log;

DROP TABLE IF EXISTS books;

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    book_title TEXT NOT NULL,
    book_author TEXT NOT NULL,
    isbn_number TEXT NOT NULL,
    publication TEXT,
    book_picture TEXT,
    reading_level TEXT NOT NULL
)
    -- student_id INT NOT NULL REFERENCES teacher(teahcer_id) ON DELETE CASCADE
    -- teacher_id INT NOT NULL REFERENCES student(studen_id) ON DELETE CASCADE
-- )

-- --create the comments table
-- DROP TABLE IF EXISTS comments;
-- CREATE TABLE comments(
--     comment_id SERIAL PRIMARY KEY,
--     commentor TEXT,
--     content TEXT,
--     teachers_id INTEGER REFERENCES student(student_id)
--     ON DELETE CASCADE
-- )

