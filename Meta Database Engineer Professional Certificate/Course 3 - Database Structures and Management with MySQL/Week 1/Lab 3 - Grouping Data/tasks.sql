USE luckyshrub_db;

-- Task 1 
SELECT
    OrderDate
FROM
    Orders
GROUP BY
    OrderDate;

-- Task 2
Select
    OrderDate,
    COUNT(OrderId)
FROM
    Orders
GROUP BY
    OrderDate;

-- Task 3
SELECT
    Department,
    SUM(OrderQty)
FROM
    Orders
GROUP BY
    Department;

/* 
Task 4: 
Write a SQL SELECT statement to retrieve the number of orders placed 
on the same day between the following dates: 1st June 2022 and 30th June 2022.
 */
SELECT
    OrderDate,
    COUNT(OrderId)
FROM
    Orders
WHERE
    OrderDate BETWEEN DATE ('2022-06-01') AND DATE  ('2022-06-30')
GROUP BY
    OrderDate;