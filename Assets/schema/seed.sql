USE spaceB;
-- ADD DEPARTMENT
INSERT INTO Department(name)
VALUES ("Human Resources"),
       ("Design"),
       ("Test"),
       ("Finance");
-- ADD ROLE
INSERT INTO Role(Title, Salary, Department_ID)
VALUES ("CEO", 200000, 1),             -- Human Resources Departments
       ("CEO Assistant", 50000, 1),
       ("Senior Designer", 100000, 2),     -- Design Departments
       ("Junior Designer", 50000, 2),
       ("Senior Tester", 100000 , 3),       -- Test Departments
       ("Junior Tester", 50000 , 3),
       ("Senior Accountant", 100000 , 4),   -- Finance Departments
       ("Accountant", 50000, 4);
 

-- ADD MANAGER  
INSERT INTO Manager (Manager_Name, Role_ID)
VALUES  ("Elon Musk",1),
        ("Kanye West",2),
        ("Bill Gate",3),
        ("Kevin Lebronze",4);

-- ADD EMPLOYEE
INSERT INTO Employee(First, Last, Role_ID) -- ADD CEO BECAUSE CEO DOESN"T HAVE MANAGER
VALUES ("Elon", "Musk", 1);



INSERT INTO Employee(First, Last, Role_ID,Manager_ID)   
VALUES ("Amber", "Heard",2,1),
       ("Kayne","West",3,1),
       ("Kim","Kardashian",4,2),
       ("Bill", "Gate",5,1),
       ("Steve", "Jobs",6,3),
       ("Kevin", "Lebronze",7,1),
       ("Kobe", "Bryant",8,4);
       

SELECT First,Last,Manager_Name FROM Employee INNER JOIN Manager ON Employee.Manager_ID = Manager.id;


-- SHOW EMPLOYEE + JOB 
SELECT First AS First_Name, Last AS Last_Name, Title AS Position FROM Employee RIGHT JOIN Role ON Employee.Role_ID = Role.id;


-- SHOW ALL DATA
SELECT First AS First_Name, Last AS Last_Name, Manager_Name, Title FROM Employee LEFT JOIN Manager ON  Manager.id=Employee.Manager_ID
LEFT JOIN Role ON Role.id=Employee.Role_ID;

USE spaceX;
UPDATE Role
SET Title = "Junior Accountant"   WHERE id = 8;