USE Lucky_Shrub;

DROP VIEW IF EXISTS OrdersView;

/* Task 1 */
CREATE VIEW
    OrdersView AS
SELECT
    OrderID,
    Quantity,
    Cost
FROM
    Orders;

SELECT
    *
FROM
    OrdersView;

/* Task 2 */
UPDATE OrdersView
SET
    Cost = 200
WHERE
    OrderID = 2;

SELECT
    *
FROM
    OrdersView;

/* Task 3 */
RENAME TABLE OrdersView TO ClientsOrdersView;

/* Task 4 */
DROP VIEW ClientsOrdersView;