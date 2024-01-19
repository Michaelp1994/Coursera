-- Task 1
USE Lucky_Shrub;
WITH TotalOrders_Cl1 AS (
    SELECT CONCAT("Cl1: ", COUNT(OrderID), " orders") AS "Total number of orders"
    FROM Orders
    WHERE YEAR(Date) = 2022
        AND ClientID = "Cl1"
),
TotalOrders_Cl2 AS (
    SELECT CONCAT("Cl2: ", COUNT(OrderID), " orders")
    FROM Orders
    WHERE YEAR(Date) = 2022
        AND ClientID = "Cl2"
),
TotalOrders_Cl3 AS (
    SELECT CONCAT("Cl3: ", COUNT(OrderID), " orders")
    FROM Orders
    WHERE YEAR(Date) = 2022
        AND ClientID = "Cl3"
)
SELECT *
FROM TotalOrders_Cl1
UNION
SELECT *
FROM TotalOrders_Cl2
UNION
SELECT *
FROM TotalOrders_Cl3;
-- Task 2
USE Lucky_Shrub;
PREPARE GetOrderDetail
FROM 'SELECT OrderID, Quantity, Cost, Date FROM Orders WHERE ClientID = ? AND YEAR(Date) = ?';
SET @client_id = 'Cl1';
SET @year = 2020;
EXECUTE GetOrderDetail USING @client_id,
@year;
-- Task 3
USE Lucky_Shrub;
SELECT ProductID,
    ProductName,
    BuyPrice,
    SellPrice
FROM Activity
    LEFT JOIN Products ON Properties->>'$.ProductID' = Products.ProductID
WHERE Properties->>'$.Order' = "True";