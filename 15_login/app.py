from flask import Flask, render_template, request, session
app = Flask(__name__)

app.config['SECRET_KEY'] = '\xec\xe5\t\x9f\xc2\xc6\xe02P\x85`SW\xfe\xe4\xe3\x9b\x81\xa3\x90'

@app.route("/")
def input():
    #print (request.args["username"])
    return render_template('template.html')

@app.route("/login")
def login():
    print(request.args)
    #s = request.Session()
    #below prints <SecureCookieSession {'Username': 'user', 'user': 'password'}>
    #but i want it to print {'user' : 'password'} so it stores the password with the
    #corresponding username, 
    session[request.args["Username"]] = request.args["Password"] 
    print (session)
    #print (request.cookies.get("Username"))
    return render_template('welcome.html')

@app.route("/logout")
def logout():
    return render_template('template.html')





if __name__ == "__main__":
    app.debug = True
    app.run()
