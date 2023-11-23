USE littlelemon_db;

/* Task 1 */
SELECT
    *
FROM
    Bookings
WHERE
    BookingSlot > (
        SELECT
            BookingSlot
        FROM
            Bookings
        WHERE
            GuestFirstName = "Vanessa"
            AND GuestLastName = "McCarthy"
    );

/*  Task 2 */
SELECT
    *
FROM
    MenuItems
WHERE
    Price > ALL (
        SELECT
            Price
        FROM
            MenuItems
        WHERE
            Type IN ("Starters", "Desserts")
    );

/* Task 3 */
SELECT
    *
FROM
    MenuItems
WHERE
    Price = ANY (
        SELECT
            Price
        FROM
            MenuItems
            INNER JOIN Menus ON Menus.ItemID = MenuItems.ItemID
        WHERE
            Type = "Starters"
            AND Menus.Cuisine = "Italian"
    );

/* Task 4 */
SELECT
    *
FROM
    MenuItems
WHERE
    NOT EXISTS (
        SELECT
            *
        FROM
            TableOrders,
            Menus
        WHERE
            TableOrders.MenuID = Menus.MenuID
            AND Menus.ItemID = MenuItems.ItemID
    );