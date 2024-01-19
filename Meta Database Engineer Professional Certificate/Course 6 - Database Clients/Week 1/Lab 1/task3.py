import mysql.connector as connector

try:  
    connection = connector.connect(user="root", password="example", host="localhost", database="test")
    print("successfully connected to database")
except connector.Error as err:
    print("Error code: ", err.errno)
    print("Error message: ", err.msg)
