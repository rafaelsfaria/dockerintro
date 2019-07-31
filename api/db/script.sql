CREATE DATABASE IF NOT EXISTS supergeeks;
USE supergeeks;

CREATE TABLE IF NOT EXISTS projects (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(255),
  people TINYINT(255),
  PRIMARY KEY (id)
);

INSERT INTO projects VALUE(0, 'Projeto ambiental', 5);
INSERT INTO projects VALUE(0, 'Projeto coleta', 4);