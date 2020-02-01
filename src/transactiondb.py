import sqlite3

connection = sqlite3.connect('globalreach.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS transactions (email TEXT, causeID TEXT, amountPaid INTEGER, anon INTEGER, PRIMARY KEY(email, causeID))")
connection.commit()
connection.close()