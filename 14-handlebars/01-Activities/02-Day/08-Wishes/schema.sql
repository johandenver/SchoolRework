CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(100) NOT NULL, 
PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('travel to Japan');
INSERT INTO wishes (wish) VALUES ('sleep in tomorrow');
INSERT INTO wishes (wish) VALUES ('find treasure');
