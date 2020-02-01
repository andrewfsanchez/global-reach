import sqlite3

connection = sqlite3.connect('globalreach.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS causes (causeID TEXT PRIMARY KEY, organization TEXT, causeName TEXT, description TEXT, email TEXT, monetaryTarget INTEGER, moneyRaised INTEGER)")
connection.commit()
connection.close()