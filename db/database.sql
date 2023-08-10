CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY(ID)
);

DESCRIBE employee;

INSERT INTO employee VALUES
  (1,'Joe',1000),
  (2,'Maria',3000),
  (3,'Jesus',5000);
