from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/cause-register')
def cause_query():
    connection = sqlite3.connect('globalreach.db')
    cursor = connection.cursor()
    if request.method=='POST':
        org= request.form['org']
        cause= request.form['cause']
        desc= request.form['description']
        e= request.form['email']
        target= request.form['target']

        try: 
            cursor.execute("INSERT INTO causes(organization, causeName, description, email, monetaryTarget, moneyRaised) VALUES(?,?,?,?,?,?)", (org, cause, desc, e, target, 0))
            connection.commit()
            return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)