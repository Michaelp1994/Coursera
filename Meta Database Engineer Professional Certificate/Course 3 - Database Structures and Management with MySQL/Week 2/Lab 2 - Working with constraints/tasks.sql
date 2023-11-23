USE Mangata_Gallo;

-- Task 1
CREATE TABLE
    Clients (
        ClientID INT NOT NULL PRIMARY KEY,
        FullName VARCHAR(100) NOT NULL,
        PhoneNumber INT NOT NULL UNIQUE
    );

-- Task 2
CREATE TABLE
    Items (
        ItemID INT NOT NULL PRIMARY KEY,
        ItemName VARCHAR(100) NOT NULL,
        Price DECIMAL(5, 2) NOT NULL
    );

-- Task 3
CREATE TABLE
    Orders (
        OrderID INT NOT NULL PRIMARY KEY,
        ItemID INT NOT NULL,
        ClientID INT NOT NULL,
        Quantity INT NOT NULL CHECK (Quantity <= 3),
        Cost DECIMAL(6, 2) NOT NULL,
        FOREIGN KEY (ClientID) REFERENCES Clients (ClientID),
        FOREIGN KEY (ItemID) REFERENCES Items (ItemID)
    );

-- Extra Task 1
CREATE TABLE
    Staff (
        StaffID INT NOT NULL PRIMARY KEY,
        PhoneNumber INT NOT NULL UNIQUE,
        FullName VARCHAR(100) NOT NULL
    );

/* Extra Task 2 */
CREATE TABLE
    ContractInfo (
        ContractID INT NOT NULL PRIMARY KEY,
        StaffID INT NOT NULL,
        Salary DECIMAL(7, 2) NOT NULL,
        Location VARCHAR(50) NOT NULL DEFAULT "Texas",
        StaffType ENUM ("Junior", "Senior") NOT NULL
    );

/* Extra Task 3 */
ALTER TABLE ContractInfo ADD CONSTRAINT FK_StaffID_ContractInfo FOREIGN KEY (StaffID) References Staff (StaffID);