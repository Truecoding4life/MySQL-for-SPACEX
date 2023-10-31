-- ADD DEPARTMENT
INSERT INTO Department(name)
VALUES ("Human Resources"),("Design"),("Test"),("Finance");
-- ADD ROLE
INSERT INTO Role(title, salary, department_id)
VALUES ("HR Manager", 100000, 1),("HR Assistant", 50000, 1),
    ("Senior Designer", 100000, 2),("Junior Designer", 50000, 2),
    ("Senior Tester", 100000 , 3),("Junior Tester", 50000 , 3),
    ("Senior Accountant", 100000 , 4),("Accountant", 50000, 4);