USE little_lemon;

-- Task 1
SELECT
    FullName,
    PhoneNumber,
    BookingDate,
    NumberOfGuests
FROM
    Customers
    INNER JOIN Bookings ON Customers.CustomerID = Bookings.CustomerID;

-- Task 2
SELECT
    Customers.CustomerID,
    Bookings.BookingID
FROM
    Customers
    LEFT JOIN Bookings ON Customers.CustomerID = Bookings.CustomerID;