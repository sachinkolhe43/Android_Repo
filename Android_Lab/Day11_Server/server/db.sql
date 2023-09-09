CREATE DATABASE dmc_db;

USE dmc_db;

CREATE TABLE students (
rollno INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(20),
course VARCHAR(10)
);

INSERT INTO students(name,course) VALUES("rohan","dmc");
INSERT INTO students(name,course) VALUES("rajiv","dmc");