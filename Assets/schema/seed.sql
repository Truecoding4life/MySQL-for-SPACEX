USE spaceX;
-- ADD DEPARTMENT
INSERT INTO Department(name)
VALUES ("Human Resources"),("Design"),("Test"),("Finance");
-- ADD ROLE
INSERT INTO Role(Title, Salary, Department_ID)
VALUES ("CEO", 200000, 1),("CEO Assistant", 50000, 1),
    ("Senior Designer", 100000, 2),("Junior Designer", 50000, 2),
    ("Senior Tester", 100000 , 3),("Junior Tester", 50000 , 3),
    ("Senior Accountant", 100000 , 4),("Accountant", 50000, 4);
 

-- ADD MANAGER 
INSERT INTO Manager (Manager_Name, Role_ID)
VALUES ("Elon Musk",1);

-- ADD EMPLOYEE
INSERT INTO Employee(First, Last, Role_ID)
VALUES ("Elon", "Musk", 1);

INSERT INTO Employee(First, Last, Role_ID,Manager_ID)   
VALUES ("Amber", "Heard", 2);

SELECT First,Last,Manager_Name FROM Employee INNER JOIN Manager ON Employee.Manager_ID = Manager.id;