DROP DATABASE IF EXISTS spaceB;
CREATE DATABASE spaceB;

USE spaceX;
CREATE TABLE Department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30) NOT NULL
);

CREATE TABLE Role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(30) NOT NULL,
    Salary DECIMAL(10) NOT NULL,
    Department_ID INT,
    FOREIGN KEY (Department_ID) REFERENCES Department(id) ON DELETE SET NULL
);

CREATE TABLE Manager(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Manager_Name VARCHAR(30) NOT NULL,
    Role_ID INT,
    FOREIGN KEY (Role_ID) REFERENCES Role(id) ON DELETE SET NULL
);
CREATE TABLE Employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    First VARCHAR(30) NOT NULL,
    Last VARCHAR(30) NOT NULL,
    Role_ID INT, 
    Manager_ID INT,
    FOREIGN KEY (Role_ID) REFERENCES Role(id) ON DELETE SET NULL, 
    FOREIGN KEY (Manager_ID) REFERENCES Manager(id) ON DELETE SET NULL
);