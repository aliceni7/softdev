# Alice Ni
# SoftDev1 Pd2
# K16 - 16_flasherit
# 2019 Oct 6

from flask import Flask, render_template, request, session, flash
from flask import url_for
from flask import redirect
app = Flask(__name__)

app.config['SECRET_KEY'] = '\xec\xe5\t\x9f\xc2\xc6\xe02P\x85`SW\xfe\xe4\xe3\x9b\x81\xa3\x90'

@app.route("/")
def input():
    return render_template('template.html')

@app.route("/login")
def login():
    print(request.args)
    session["Username"] = request.args["Username"]
    session["Password"] = request.args["Password"]
    if session["Username"] != 'blue':
        flash('Wrong username!')
        return redirect(url_for('input'))
    elif session["Password"]!= 'dogs':
        flash('Wrong password!')
        return redirect(url_for('input'))
    return render_template('welcome.html')
    

@app.route("/logout")
def logout():
    return render_template('template.html')


if __name__ == "__main__":
    app.debug = True
    app.run()
