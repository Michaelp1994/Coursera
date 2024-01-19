import mysql.connector as connector

def show_tables(cursor):
    show_tables_query = """SHOW TABLES"""
    cursor.execute(show_tables_query)
    for table in cursor:
        print(table)

try:  
    connection = connector.connect(user="root", password="example", host="localhost", port="3306")
    print("successfully connected to database")
except connector.Error as err:
    print("Error code: ", err.errno)
    print("Error message: ", err.msg)
    exit()


# Task 1: Create a database called little_lemon
cursor =  connection.cursor()
create_database_query = """CREATE DATABASE IF NOT EXISTS little_lemon"""
cursor.execute(create_database_query)
show_database_query = """SHOW DATABASES"""
cursor.execute(show_database_query)
for database in cursor:
    print(database)
    
# Task 2: Use the database called little_lemon
use_database_query = """USE little_lemon"""
cursor.execute(use_database_query)
print(connection.database)

# Task 3: Create a table called MenuItems
create_menu_item_table_query = """CREATE TABLE IF NOT EXISTS MenuItems(
ItemID INT AUTO_INCREMENT,
Name VARCHAR(200),
Type VARCHAR(100),
Price INT,
PRIMARY KEY(ItemID)
);
"""
cursor.execute(create_menu_item_table_query)
show_tables(cursor)


# Task 4: Create a table called Menus
create_menu_table = """CREATE TABLE IF NOT EXISTS  Menus (
MenuID INT,
ItemID INT,
Cuisine VARCHAR(100),
PRIMARY KEY (MenuID,ItemID)
);"""
cursor.execute(create_menu_table)
show_tables(cursor)


# Task 5: Create a table called Bookings
create_booking_table = """CREATE TABLE IF NOT EXISTS Bookings (
BookingID INT AUTO_INCREMENT,
TableNo INT,
GuestFirstName VARCHAR(100) NOT NULL,
GuestLastName VARCHAR(100) NOT NULL,
BookingSlot TIME NOT NULL,
EmployeeID INT,
PRIMARY KEY (BookingID)
);"""
cursor.execute(create_booking_table)
show_tables(cursor)

# Task 6: Create a table called Orders
create_order_table = """CREATE TABLE IF NOT EXISTS Orders (
OrderID INT,
TableNo INT,
MenuID INT,
BookingID INT,
BillAmount INT,
Quantity INT,
PRIMARY KEY (OrderID,TableNo)
);"""
cursor.execute(create_order_table)
show_tables(cursor)