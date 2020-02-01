import sqlite3

connection = sqlite3.connect('globalreach.db')
cursor = connection.cursor()

cursor.execute("INSERT INTO causes (organization, causeName, description, email, monetaryTarget, moneyRaised) VALUES (?,?,?,?,?,?)", ("yermum", "alsoyermun", "yer mum needs help", "yermum@gmail.com", 10, 4))
cursor.execute("INSERT INTO causes (organization, causeName, description, email, monetaryTarget, moneyRaised) VALUES (?,?,?,?,?,?)", ("yermum2", "alsoyermun", "yer mum needs help", "yermum@gmail.com", 10, 4))


connection.commit()