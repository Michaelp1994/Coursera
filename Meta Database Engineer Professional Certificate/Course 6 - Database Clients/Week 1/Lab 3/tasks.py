import mysql.connector as connector


def show_tables(cursor):
    show_tables_query = """SHOW TABLES"""
    cursor.execute(show_tables_query)
    for table in cursor:
        print(table)


try:
    connection = connector.connect(
        user="root",
        password="example",
        host="localhost",
        port="3306",
    )
    print("successfully connected to database")
except connector.Error as err:
    print("Error code: ", err.errno)
    print("Error message: ", err.msg)
    exit()

# Task 1: Check database connection and tables.
cursor = connection.cursor()
set_database_query = """USE little_lemon"""
cursor.execute(set_database_query)
show_tables(cursor)

# Task 2: Buffer cursor
cursorb = connection.cursor(buffered=True)
all_bookings_query = """SELECT * FROM Bookings"""
all_orders_query = """SELECT * FROM Orders"""
cursorb.execute(all_bookings_query)
cursorb.execute(all_orders_query)

# Task 3: Dictionary cursor
cursord = connection.cursor(dictionary=True)
show_tables(cursord)
