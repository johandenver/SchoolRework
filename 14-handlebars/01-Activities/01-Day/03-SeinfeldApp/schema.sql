CREATE DATABASE seinfeld_db;
USE seinfeld_db;


CREATE TABLE actors
(
    id int AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    coolness_points int, 
    attitude varchar(30),
    PRIMARY KEY (id)
);








--   * Create a seinfeld_db database with an actors table.

-- * The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).

--   * Add in four actors with different names, coolness_points, and attitudes.