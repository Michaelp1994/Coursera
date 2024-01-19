from mysql.connector.pooling import MySQLConnectionPool
from mysql.connector import Error as MysqlError
import mysql.connector as connector

dbconfig = {
    "database": "little_lemon_db",
    "user": "root",
    "password": "example",
}

# Task 1

try:
    pool = MySQLConnectionPool(pool_name="pool_b", pool_size=2, **dbconfig)
    print("Connection Pooling is working")
except MysqlError as err:
    print(err)
    print("Error code: ", err.errno)
    print("Error message: ", err.msg)
    exit()


def task_two():
    conn_a = pool.get_connection()
    cursor_a = conn_a.cursor()
    insert_guest1_sql = """INSERT INTO Bookings (TableNo, GuestFirstName, GuestLastName, BookingSlot, EmployeeID) VALUES (8, "Anees", "Java", "18:00:00", 6)"""
    cursor_a.execute(insert_guest1_sql)
    conn_a.commit()

    conn_b = pool.get_connection()
    cursor_b = conn_b.cursor()
    insert_guest2_sql = """INSERT INTO Bookings (TableNo, GuestFirstName, GuestLastName, BookingSlot, EmployeeID) VALUES (5, "Bald", "Vin", "19:00:00", 6)"""
    cursor_b.execute(insert_guest2_sql)
    conn_b.commit()
    try:
        conn_c = pool.get_connection()
    except MysqlError as err:
        connection = connector.connect(**dbconfig)
        pool.add_connection(cnx=connection)
        conn_c = pool.get_connection()

    cursor_c = conn_c.cursor()
    insert_guest3_sql = """INSERT INTO Bookings (TableNo, GuestFirstName, GuestLastName, BookingSlot, EmployeeID) VALUES (12, "Jay", "Kon", "19:30:00", 6)"""
    cursor_c.execute(insert_guest3_sql)
    conn_c.commit()
    try:
        conn_a.close()
        conn_b.close()
        conn_c.close()
    except MysqlError as err:
        print("Error code: ", err.errno)
        print("Error message: ", err.msg)


def task_three():
    conn = pool.get_connection()
    cursor = conn.cursor()
    select_managers_sql = """
    SELECT Name, EmployeeID 
    FROM Employees 
    WHERE Role = 'Manager'
    """
    cursor.execute(select_managers_sql)
    results = cursor.fetchall()
    column_names = cursor.column_names
    print(column_names)
    for row in results:
        print(row)

    highest_salary_sql = """
    SELECT Name, EmployeeID 
    FROM Employees ORDER BY 
    Annual_Salary DESC LIMIT 1"""
    cursor.execute(highest_salary_sql)
    results = cursor.fetchall()
    column_names = cursor.column_names
    print(column_names)
    for row in results:
        print(row)

    guests_between_time_sql = """
    SELECT COUNT(BookingID) n_booking_between_18_20_hrs 
    FROM Bookings 
    WHERE BookingSlot BETWEEN '18:00:00' AND '20:00:00';"""
    cursor.execute(guests_between_time_sql)
    results = cursor.fetchall()
    column_names = cursor.column_names
    print(column_names)
    for row in results:
        print(row)

    waiting_guests_sql = """
    SELECT Bookings.BookingID AS ID,  
    CONCAT(GuestFirstName,' ',GuestLastName) AS GuestName, 
    Role AS Employee
    FROM Bookings 
    LEFT JOIN Employees ON Employees.EmployeeID=Bookings.EmployeeID
    WHERE Employees.Role = "Receptionist"
    ORDER BY BookingSlot DESC;
    """
    print("The following guests are waiting to be seated:")
    cursor.execute(waiting_guests_sql)
    results = cursor.fetchall()
    column_names = cursor.column_names
    print(column_names)
    for row in results:
        print(row)
    cursor.close()
    conn.close()


def task_four():
    conn = pool.get_connection()
    cursor = conn.cursor()
    drop_procedure_sql = """ DROP PROCEDURE IF EXISTS BasicSalesReport"""
    cursor.execute(drop_procedure_sql)
    create_procedure_sql = """
    CREATE PROCEDURE BasicSalesReport()
    BEGIN
        SELECT 
        SUM(BillAmount) AS Total_Sale,
        AVG(BillAmount) AS Average_Sale,
        MIN(BillAmount) AS Min_Bill_Paid,
        MAX(BillAmount) AS Max_Bill_Paid
        FROM Orders;
    END
    """
    cursor.execute(create_procedure_sql)
    cursor.callproc("BasicSalesReport")
    results = next(cursor.stored_results())
    column_names = results.column_names

    print("Today's sales report:")
    for row in results.fetchall():
        for index, col in enumerate(row):
            print(column_names[index], ": ", col)
    cursor.close()
    conn.close()


def task_five():
    conn = pool.get_connection()
    cursor = conn.cursor(buffered=True)
    guests_sql = """
    SELECT BookingSlot,
    CONCAT(Bookings.GuestFirstName," ",Bookings.GuestLastName) AS Guest_Name,
    Employees.Name AS Emp_Name,
    Employees.Role AS Emp_Role
    FROM Bookings
    INNER JOIN Employees ON Bookings.EmployeeID = Employees.EmployeeID
    ORDER BY Bookings.BookingSlot ASC
    LIMIT 3;
    """
    cursor.execute(guests_sql)
    results = cursor.fetchall()
    for result in results:
        print("\nBookingSlot", result[0])
        print("\tGuest_name:", result[1])
        print("\tAssigned to:", result[2], "[{}]".format(result[3]))
    cursor.close()
    conn.close()


if __name__ == "__main__":
    task_two()
    task_three()
    task_four()
    task_five()
