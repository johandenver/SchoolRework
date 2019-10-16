DROP DATABASE IF EXISTS college_db;

CREATE DATABASE college_db;

USE college_db;

CREATE TABLE universities(
    id INTEGER(20) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    location VARCHAR(30),
    score INTEGER(10),
    PRIMARY KEY (id)
);

INSERT INTO universities (name, location, score)
VALUES ("Utah State University", "Logan, UT", "10"), ("University of Utah", "Salt Lake City, UT", "9"), ("Brigham Young University", "Provo, UT", "10");