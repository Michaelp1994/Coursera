USE Little_Lemon;

/* Task 1 */
SELECT
    *
FROM
    Bookings
WHERE
    BookingDate BETWEEN "2021-11-11" AND "2021-11-13";

/* Task 2 */
SELECT
    FullName,
    BookingID
FROM
    Bookings
    INNER JOIN Customers ON Bookings.CustomerID = Customers.CustomerID
WHERE
    BookingDate = "2021-11-11";

/* Task 3 */
SELECT
    BookingDate,
    COUNT(BookingDate)
FROM
    Bookings
GROUP BY
    BookingDate;

/* Task 4 */
REPLACE INTO Courses
SET
    CourseName = "Kabasa",
    Cost = 20.00;

SELECT
    *
FROM
    Courses;

/* Task 5 */
DROP TABLE IF EXISTS DeliveryAddress;

CREATE TABLE
    DeliveryAddress (
        ID INT PRIMARY KEY,
        Address VARCHAR(255) NOT NULL,
        Type VARCHAR(100) NOT NULL DEFAULT "Private",
        CustomerID INT NOT NULL,
        FOREIGN KEY (CustomerID) References Customers (CustomerID)
    );

DESCRIBE DeliveryAddress;

/* Task 6 */
ALTER TABLE Courses ADD Ingredients VARCHAR(255);

DESCRIBE Courses;

/* Task 7 */
SELECT
    FullName
FROM
    Customers
WHERE
    CustomerID IN (
        SELECT
            CustomerID
        FROM
            Bookings
        WHERE
            BookingDate = "2021-11-11"
    )
ORDER BY
    CustomerID;

/* Task 8 */
DROP VIEW IF EXISTS BookingsView;

CREATE VIEW
    BookingsView AS
SELECT
    BookingID,
    BookingDate,
    NumberOfGuests
FROM
    Bookings
WHERE
    BookingDate < "2021-11-13"
    AND NumberOfGuests > 3;

SELECT
    *
FROM
    BookingsView;

-- Task 9
USE Little_Lemon;

DROP PROCEDURE IF EXISTS GetBookingsData;

CREATE PROCEDURE GetBookingsData (InputDate DATE)
SELECT
    *
FROM
    Bookings
WHERE
    BookingDate = InputDate;

CALL GetBookingsData ("2021-11-13");

-- Task 10
SELECT
    CONCAT (
        "ID: ",
        BookingID,
        ", Date: ",
        BookingDate,
        ", Number of guests: ",
        NumberOfGuests
    ) AS "Booking Details"
FROM
    Bookings;