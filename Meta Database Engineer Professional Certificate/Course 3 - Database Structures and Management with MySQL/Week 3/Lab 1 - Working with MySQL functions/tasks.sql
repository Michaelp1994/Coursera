USE jewelrystore_db;

/* Task 1 */
SELECT
    CONCAT (
        LCASE (Name),
        '-',
        Quantity,
        '-',
        UCASE (OrderStatus)
    ) AS OrderInfo
FROM
    item,
    mg_orders
WHERE
    item.ItemID = mg_orders.ItemID;

/* Task 2 */
SELECT
    DATE_FORMAT (DeliveryDate, '%W')
FROM
    mg_orders;

/* Task 3 */
SELECT
    OrderID,
    ROUND(0.05 * Cost)
FROM
    mg_orders;

/* Task 4 */
SELECT
    DATE_FORMAT (DeliveryDate, '%W')
FROM
    mg_orders
WHERE
    NOT ISNULL (DeliveryDate);