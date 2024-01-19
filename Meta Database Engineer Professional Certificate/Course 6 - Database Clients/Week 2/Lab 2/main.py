import mysql.connector as connector

connection = connector.connect(
    user="root",  # use your own
    password="example",  # use your own
)

cursor = connection.cursor()

cursor.execute("use little_lemon")


def print_bookings():
    all_bookings_query = """SELECT * FROM Bookings;"""
    cursor.execute(all_bookings_query)
    cols = cursor.column_names
    print(cols)
    for row in cursor:
        print(row)


def print_menus():
    all_menus_query = """SELECT * FROM Menus;"""
    cursor.execute(all_menus_query)
    cols = cursor.column_names
    print(cols)
    for row in cursor:
        print(row)


def task_one():
    change_booking_query = """UPDATE Bookings SET TableNo=10 WHERE BookingID=6;"""
    cursor.execute(change_booking_query)
    connection.commit()
    print_bookings()


def task_two():
    update_booking_query = (
        """UPDATE Bookings SET TableNo=11, EmployeeID=6 WHERE BookingID=2;"""
    )
    cursor.execute(update_booking_query)
    connection.commit()
    print_bookings()


def task_three():
    delete_greek_menus_query = """DELETE FROM Menus WHERE Cuisine='Greek';"""
    cursor.execute(delete_greek_menus_query)
    connection.commit()
    print_menus()


if __name__ == "__main__":
    # task_one()
    task_two()
    # task_three()
