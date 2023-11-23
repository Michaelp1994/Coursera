USE Mangata_Gallo;

DROP TABLE IF EXISTS Staff;

/* Task 1 */
CREATE TABLE
    Staff (
        StaffID INT,
        FullName VARCHAR(100),
        PhoneNumber VARCHAR(10)
    );

/* Task 2 */
ALTER TABLE Staff MODIFY COLUMN StaffID INT NOT NULL PRIMARY KEY,
MODIFY COLUMN FullName VARCHAR(100) NOT NULL,
MODIFY COLUMN PhoneNumber INT NOT NULL;

/* Task 3 */
ALTER TABLE Staff ADD Role VARCHAR(50) NOT NULL;

/* Task 4 */
ALTER TABLE Staff
DROP COLUMN PhoneNumber;

DESCRIBE Staff;