import mysql.connector as connector

try:  
    connection = connector.connect(user="ro2ot", password="example", host="localhost")
    print("successfully connected to database")
except:
    print("""There was a problem connecting to the database. 
Please check the username or password and try again.""")