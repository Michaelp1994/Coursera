import mysql.connector as connector

connection = connector.connect(user="root", password="example", host="localhost")

print("successfully connected to database")