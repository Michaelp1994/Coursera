DROP DATABASE IF EXISTS jewelrystore_db;

CREATE DATABASE jewelrystore_db;

USE jewelrystore_db;

CREATE TABLE
    item (
        ItemID INT,
        Name VARCHAR(150),
        Cost INT,
        PRIMARY KEY (ItemID)
    );

INSERT INTO
    item
VALUES
    (1, 'Engagement ring', 2500),
    (2, 'Silver brooch', 400),
    (3, 'Earrings', 350),
    (4, 'Luxury watch', 1250),
    (5, 'Golden bracelet', 800),
    (6, 'Gemstone', 1500);

CREATE TABLE
    mg_orders (
        OrderID INT,
        ItemID INT,
        Quantity INT,
        Cost INT,
        OrderDate DATE,
        DeliveryDate DATE,
        OrderStatus VARCHAR(50),
        PRIMARY KEY (OrderID)
    );

INSERT INTO
    mg_orders
VALUES
    (
        1,
        1,
        50,
        122000,
        '2022-04-05',
        '2022-05-25',
        'Delivered'
    ),
    (
        2,
        2,
        75,
        28000,
        '2022-03-08',
        NULL,
        'In progress'
    ),
    (
        3,
        3,
        80,
        25000,
        '2022-05-19',
        '2022-06-08',
        'Delivered'
    ),
    (
        4,
        4,
        45,
        100000,
        '2022-01-10',
        NULL,
        'In progress'
    ),
    (
        5,
        5,
        70,
        56000,
        '2022-05-19',
        NULL,
        'In progress'
    ),
    (
        6,
        6,
        60,
        90000,
        '2022-06-10',
        '2022-06-18',
        'Delivered'
    );