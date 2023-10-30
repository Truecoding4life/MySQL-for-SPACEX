DROP DATABASE IF EXISTS "spaceX";
CREATE DATABASE `spaceX`;

USE "spaceX";
CREATE TABLE "department"(
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30) NOT NULL
);

CREATE TABLE "role"(
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(30) NOT NULL,
    Salary DECIMAL(4) NOT NULL,
    Department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE "employee"(
    id NOT NULL AUTO_INCREMENT PRIMARY KEY,
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    Role_id INT NOT NULL,
    Manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

CREATE TABLE "manger"(
    id NOT NULL AUTO_INCREMENT=100 PRIMARY KEY,
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    Role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id)
);