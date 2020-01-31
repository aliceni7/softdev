from flask import Flask
app = Flask(__name__)


@app.route("/")

def hello_world():
    print(__name__)
    return "no hablo queso!"

def emacs():
    print(__name__)
    return "emacs superior"

def stomach():
    print(__name__)
    return "my stomach hurts"

if __name__ == "__main__":
    app.debug = True
    app.run()
