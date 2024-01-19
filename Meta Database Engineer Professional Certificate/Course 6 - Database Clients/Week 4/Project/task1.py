from mysql.connector.pooling import MySQLConnectionPool
from mysql.connector import Error as MysqlError

dbconfig = {
    "database": "little_lemon_db",
    "user": "root",
    "password": "example",
}

# Task 1

try:
    pool_a = MySQLConnectionPool(pool_name="mypool", pool_size=2, **dbconfig)
    conn = pool_a.get_connection()
    cursor = conn.cursor()
    print("Connection Pooling is working")
except MysqlError as err:
    print(err)
    print("Error code: ", err.errno)
    print("Error message: ", err.msg)
    exit()


# Task 2
def task_two():
    drop_procedure_sql = """DROP PROCEDURE IF EXISTS PeakHours"""
    create_procedure_sql = """
    CREATE PROCEDURE PeakHours()
    BEGIN
        SELECT HOUR(BookingSlot) AS hour, COUNT(*) AS bookings 
        FROM Bookings 
        GROUP BY hour 
        ORDER BY bookings DESC;
    END
    """
    cursor.execute(drop_procedure_sql)
    cursor.execute(create_procedure_sql)

    cursor.callproc("PeakHours")
    dataset = next(cursor.stored_results())

    column_names = dataset.column_names
    print(column_names)

    for row in dataset:
        print(row)


def task_three():
    drop_procedure_sql = """DROP PROCEDURE IF EXISTS GuestStatus"""
    create_procedure_sql = """
    CREATE PROCEDURE GuestStatus()
    BEGIN
        SELECT CONCAT(GuestFirstName, GuestLastName) AS GuestName,
        CASE 
            WHEN Role = "Manager" OR Role = "Assistant Manager" THEN "Ready to pay"
            WHEN Role = "Head Chef" THEN "Ready to serve"
            WHEN Role = "Assistant Chef" THEN "Preparing food"
            WHEN Role = "Head Waiter" THEN "Order served"
        END AS Status
        FROM Bookings 
        LEFT JOIN Employees ON Bookings.EmployeeID = Employees.EmployeeID;
    END
    """
    cursor.execute(drop_procedure_sql)
    cursor.execute(create_procedure_sql)
    cursor.callproc("GuestStatus")
    dataset = next(cursor.stored_results())

    column_names = dataset.column_names
    print(column_names)

    for row in dataset:
        print(row)


if __name__ == "__main__":
    task_two()
    task_three()
    conn.close()
