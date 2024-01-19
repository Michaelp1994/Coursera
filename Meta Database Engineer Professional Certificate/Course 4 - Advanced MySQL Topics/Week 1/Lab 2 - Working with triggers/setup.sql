DROP DATABASE IF EXISTS Lucky_Shrub;
CREATE DATABASE Lucky_Shrub; 
USE Lucky_Shrub; 
CREATE TABLE Products (ProductID VARCHAR(10), ProductName VARCHAR(100),BuyPrice DECIMAL(6,2), SellPrice DECIMAL(6,2), NumberOfItems INT);
INSERT INTO Products (ProductID, ProductName, BuyPrice, SellPrice, NumberOfITems) 
VALUES ("P1", "Artificial grass bags ", 40, 50, 100), 
("P2", "Wood panels", 15, 20, 250), 
("P3", "Patio slates",35, 40, 60), 
("P4", "Sycamore trees ", 7, 10, 50), 
("P5", "Trees and Shrubs", 35, 50, 75), 
("P6", "Water fountain", 65, 80, 15);
CREATE TABLE Notifications (NotificationID INT AUTO_INCREMENT, Notification VARCHAR(255), DateTime TIMESTAMP NOT NULL, PRIMARY KEY(NotificationID)); 
