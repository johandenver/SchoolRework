-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    artist VARCHAR(30),
    genre VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("With or Without you", "U2", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Roxanne", "The Police", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Lovecats", "The Cure", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("With or Without you", "U2", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("California Love", "Dr. Dre", "Rap");

INSERT INTO songs (title, artist, genre)
VALUES ("Picture me Rollin'", "2PAC", "Rap");

INSERT INTO songs (title, artist, genre)
VALUES ("Take Five", "Dave Brubeck", "Jazz");

INSERT INTO songs (title, artist, genre)
VALUES ("Freddie Freeloader", "Miles Davis", "Jazz");