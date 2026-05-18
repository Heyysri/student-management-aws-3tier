CREATE DATABASE IF NOT EXISTS studentdb;
USE studentdb;

CREATE TABLE students (
  id          BIGINT NOT NULL AUTO_INCREMENT,
  name        VARCHAR(255) NOT NULL,
  email       VARCHAR(255) NOT NULL,
  course      VARCHAR(255),
  branch      VARCHAR(255),
  mobile      VARCHAR(20),
  percentage  DOUBLE,
  PRIMARY KEY (id)
);