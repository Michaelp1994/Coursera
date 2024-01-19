-- Task 1
USE Lucky_Shrub;
DROP TRIGGER IF EXISTS ProductSellPriceInsertCheck;
DELIMITER // 
CREATE TRIGGER ProductSellPriceInsertCheck
AFTER INSERT ON Products FOR EACH ROW 
BEGIN 
IF NEW.SellPrice <= NEW.BuyPrice THEN
    INSERT INTO Notifications (Notification, DateTime)
    VALUES (
        CONCAT(
            'A SellPrice less than the BuyPrice was inserted for ProductID ',
            NEW.ProductID
        ),
        NOW()
    );
END IF;
END // 
DELIMITER ;

USE Lucky_Shrub;
INSERT INTO Products (
        ProductID,
        ProductName,
        BuyPrice,
        SellPrice,
        NumberOfItems
    )
VALUES ('P7', 'product p7', 40.00, 30.00, 100);

-- Task 2
USE Lucky_Shrub;
DROP TRIGGER IF EXISTS ProductSellPriceUpdateCheck;
DELIMITER // 
CREATE TRIGGER ProductSellPriceUpdateCheck AFTER UPDATE ON Products FOR EACH ROW
BEGIN
    IF NEW.SellPrice <= NEW.BuyPrice THEN
        INSERT INTO Notifications (Notification, DateTime)
        VALUES (
            CONCAT(NEW.ProductID, ' was updated with a SellPrice of ', New.SellPrice, ' which is the same or less than the BuyPrice'), 
            NOW()
            );
    END IF;
END //
DELIMITER ;

UPDATE Products SET SellPrice=60 WHERE ProductID="P6";

-- Task 3
USE Lucky_Shrub;
DROP TRIGGER IF EXISTS NotifyProductDelete;
DELIMITER // 
CREATE TRIGGER NotifyProductDelete AFTER DELETE ON Products FOR EACH ROW
BEGIN
    INSERT INTO Notifications (Notification, DateTime)
    VALUES (
        CONCAT('The product with a ProductID ', OLD.ProductID, ' was deleted'), 
        NOW()
        );
END //
DELIMITER ;

DELETE FROM Products WHERE ProductID="P7";