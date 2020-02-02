import sqlite3

connection = sqlite3.connect('globalreach.db')
cursor = connection.cursor()

cursor.execute("SELECT * FROM users")

for name in cursor.fetchall():
    print(name)
    print("\n")