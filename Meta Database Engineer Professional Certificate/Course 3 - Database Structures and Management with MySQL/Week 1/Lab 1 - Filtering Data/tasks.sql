USE Lucky_Shrub;

-- Task 1
SELECT
    *
FROM
    Orders
WHERE
    (Cost <= 250);

-- Task 2
SELECT
    *
FROM
    Orders
WHERE
    (Cost BETWEEN 50 AND 750);

-- Task 3 
SELECT
    *
FROM
    Orders
WHERE
    (
        ClientID = 'Cl3'
        AND Cost > 100
    );

-- Task 4
SELECT
    *
FROM
    Orders
WHERE
    (
        ProductID IN ('P1', 'P2')
        AND Quantity > 2
    );

-- Extra Tasks
USE Lucky_Shrub;

-- Task 1
SELECT
    *
FROM
    employees
WHERE
    (
        AnnualSalary >= 50000
        AND Department = 'Marketing'
    );

-- Task 2
SELECT
    *
FROM
    employees
WHERE
    NOT (AnnualSalary >= 50000);

-- Task 3
SELECT
    *
FROM
    employees
WHERE
    (
        Department IN ('Marketing', 'Finance', 'Legal')
        AND AnnualSalary < 50000
    );

-- TASK 4
SELECT
    *
FROM
    employees
WHERE
    (AnnualSalary BETWEEN 10000 AND 50000);

-- Task 5
SELECT
    *
FROM
    employees
WHERE
    EmployeeName LIKE 'S___%';