# Alice Ni
# SoftDev1 Pd2
# K15 - 15_login
# 2019 Oct 3

from flask import Flask, render_template, request, session
app = Flask(__name__)

app.config['SECRET_KEY'] = '\xec\xe5\t\x9f\xc2\xc6\xe02P\x85`SW\xfe\xe4\xe3\x9b\x81\xa3\x90'

@app.route("/")
def input():
    #print (request.args["username"])
    return render_template('template.html')

@app.route("/erroru")
def errorU():
    return render_template('erroru.html')

@app.route("/errorp")
def errorP():
    return render_template('errorp.html')

@app.route("/login")
def login():
    print(request.args)
    session["Username"] = request.args["Username"]
    session["Password"] = request.args["Password"]
    if session["Username"] != 'blue':
        return errorU()
    if session["Password"]!= 'dogs':
        return errorP()
    return render_template('welcome.html')

@app.route("/logout")
def logout():
    return render_template('template.html')





if __name__ == "__main__":
    app.debug = True
    app.run()
