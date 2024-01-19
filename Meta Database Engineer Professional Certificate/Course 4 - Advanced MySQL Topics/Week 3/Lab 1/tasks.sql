-- Task 1
USE Lucky_Shrub;
SELECT Year(Date),
    SUM(Quantity) AS QuantitySold
FROM Orders
WHERE ProductID = "P4"
GROUP BY YEAR(Date)
ORDER BY YEAR(Date);
-- Task 2
SELECT Orders.ClientId,
    ContactNumber,
    Street,
    County,
    OrderID,
    Orders.ProductID,
    ProductName,
    Cost,
    Date
FROM Orders
    LEFT JOIN Clients ON Orders.ClientID = Clients.ClientID
    LEFT JOIN Addresses ON Clients.AddressID = Addresses.AddressID
    LEFT JOIN Products ON Orders.ProductID = Products.ProductID
WHERE YEAR(Date) IN (2022, 2021)
ORDER BY Date;
-- Task 3
USE Lucky_Shrub;
CREATE FUNCTION FindSoldQuantity(ID VARCHAR(10), YEAR INT) RETURNS INT DETERMINISTIC RETURN (
    SELECT SUM(Quantity)
    FROM Orders
    WHERE ProductID = ID
        AND YEAR(Date) = YEAR
);
SELECT FindSoldQuantity("P3", 2021);