-- Task 1
USE Lucky_Shrub;
SELECT OrderID,
    ProductID,
    Quantity,
    Date
FROM Orders;
-- Task 2
USE Lucky_Shrub;
DROP INDEX IdxClientID ON Orders;
CREATE INDEX IdxClientID ON Orders (ClientID);
EXPLAIN SELECT *
FROM Orders
WHERE ClientID = 'Cl1';
-- Task 3
USE Lucky_Shrub;
EXPLAIN SELECT * FROM Employees WHERE FullName LIKE '%Tolo'; 
ALTER TABLE Employees ADD COLUMN ReverseFullName VARCHAR(100);
UPDATE Employees SET ReverseFullName = CONCAT(SUBSTRING_INDEX(FullName, ' ', -1), ' ', SUBSTRING_INDEX(FullName, ' ', 1));
CREATE INDEX IdxReverseFullName ON Employees (ReverseFullName);
EXPLAIN SELECT * FROM Employees WHERE ReverseFullName LIKE 'Tolo %'; 
