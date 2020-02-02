from flask import Flask, request, redirect, render_template
import sqlite3
import bcrypt
import json

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('home.html')

@app.route('/getcauses')
def getcauses():

    connection = sqlite3.connect('globalreach.db')
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM causes")

    row_headers=[x[0] for x in cursor.description]

    allCauses = cursor.fetchall()

    json_data = []

    for cause in allCauses:
        json_data.append(dict(zip(row_headers, cause)))

    print(json.dumps(json_data))
    return json.dumps(json_data), {'Content-Type': 'application/json'}


@app.route('/cause-register', methods = ['POST', 'GET'])
def cause_query():

    connection = sqlite3.connect('globalreach.db')
    cursor = connection.cursor()

    if request.method == 'POST':

        org = request.form["org"]
        cause = request.form["cause"]
        desc = request.form["description"]
        email = request.form["email"]
        target = request.form["target"]

        try: 
            cursor.execute("INSERT INTO causes(organization, causeName, description, email, monetaryTarget, moneyRaised) VALUES(?,?,?,?,?,?)", (org, cause, desc, email, target, 0))
            connection.commit()
            
            return redirect('/')

        except:
            return 'Error, cause not added'

    else:
        return render_template('createcause.html')

@app.route('/user-register', methods = ['POST', 'GET'])
def userregister():

    connection = sqlite3.connect('globalreach.db')
    cursor = connection.cursor()

    if request.method == 'POST':
        email = request.form["email"]
        name = request.form["name"]
        phoneNum = request.form["phoneNum"]
        picture = "null"
        rawPass = request.form["password"]

        salt = bcrypt.gensalt()
        hashedPass = bcrypt.hashpw(rawPass.encode('utf8'), salt)

        try:
            cursor.execute("INSERT INTO users (email, password, name, phoneNum, picture, points) VALUES (?, ?, ?, ?, ?, ?)", (email, hashedPass, name, phoneNum, picture, 0))
            connection.commit()
            return redirect('/')
        except:
            "Error, registration failed"

    else:
        return render_template('userregistration.html')


if __name__ == '__main__':
    app.run(debug=True)