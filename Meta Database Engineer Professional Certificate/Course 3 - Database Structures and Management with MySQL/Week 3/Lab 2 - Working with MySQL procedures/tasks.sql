USE Lucky_Shrub;

DROP PROCEDURE IF EXISTS GetOrdersData;

DROP PROCEDURE IF EXISTS GetListOfOrdersInRange;

/* Task 1 */
CREATE PROCEDURE GetOrdersData ()
SELECT
    *
FROM
    Orders;

CALL GetOrdersData ();

/* Task 2 */
CREATE PROCEDURE GetListOfOrdersInRange (MinimumValue INT, MaximumValue INT)
SELECT
    *
FROM
    Orders
WHERE
    Cost BETWEEN MinimumValue AND MaximumValue;

CALL GetListOfOrdersInRange (150, 600);