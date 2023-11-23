CREATE DATABASE IF NOT EXISTS Lucky_Shrub;

USE Lucky_Shrub;

CREATE TABLE
    Orders (
        OrderID INT NOT NULL PRIMARY KEY,
        ClientID VARCHAR(10),
        ProductID VARCHAR(10),
        Quantity INT,
        Cost DECIMAL(6, 2)
    );

CREATE TABLE
    employees (
        EmployeeID int NOT NULL,
        EmployeeName varchar(150) DEFAULT NULL,
        Department varchar(150) DEFAULT NULL,
        ContactNo varchar(12) DEFAULT NULL,
        Email varchar(100) DEFAULT NULL,
        AnnualSalary int DEFAULT NULL,
        PRIMARY KEY (EmployeeID)
    );

INSERT INTO
    Orders (OrderID, ClientID, ProductID, Quantity, Cost)
VALUES
    (1, "Cl1", "P1", 10, 500),
    (2, "Cl2", "P2", 5, 100),
    (3, "Cl3", "P3", 20, 800),
    (4, "Cl4", "P4", 15, 150),
    (5, "Cl3", "P3", 10, 450),
    (6, "Cl2", "P2", 5, 800),
    (7, "Cl1", "P4", 22, 1200),
    (8, "Cl3", "P1", 15, 150),
    (9, "Cl1", "P1", 10, 500),
    (10, "Cl2", "P2", 5, 100);

INSERT INTO
    employees
VALUES
    (
        1,
        'Seamus Hogan',
        'Recruitment',
        '351478025',
        'Seamus.h@luckyshrub.com',
        50000
    ),
    (
        2,
        'Thomas Eriksson',
        'Legal',
        '351475058',
        'Thomas.e@ luckyshrub.com',
        75000
    ),
    (
        3,
        'Simon Tolo',
        'Marketing',
        '351930582',
        'Simon.t@ luckyshrub.com',
        40000
    ),
    (
        4,
        'Francesca Soffia',
        'Finance',
        '351258569',
        'Francesca.s@ luckyshrub.com',
        45000
    ),
    (
        5,
        'Emily Sierra',
        'Customer Service',
        '351083098',
        'Emily.s@ luckyshrub.com',
        35000
    ),
    (
        6,
        'Maria Carter',
        'Human Resources',
        '351022508',
        'Maria.c@ luckyshrub.com',
        55000
    ),
    (
        7,
        'Rick Griffin',
        'Marketing',
        '351478458',
        'Rick.G@luckyshrub.com',
        50000
    );