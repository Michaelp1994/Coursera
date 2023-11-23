USE Lucky_Shrub;

-- Task 1
REPLACE INTO Orders (OrderID, ClientID, ProductID, Quantity, Cost)
VALUES
    (9, "Cl1", "P1", 10, 5000),
    (10, "Cl2", "P2", 5, 100);

-- Task 2
REPLACE INTO Orders
SET
    OrderID = 9,
    ClientID = "Cl1",
    ProductID = "P1",
    Quantity = 10,
    Cost = 500;

SELECT
    *
FROM
    Orders;