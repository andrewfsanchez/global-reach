import sqlite3

connection = sqlite3.connect('globalreach.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS users (email TEXT PRIMARY KEY, password TEXT, name TEXT, phoneNum INTEGER, picture BLOB, points INTEGER)")
connection.commit()
connection.close()