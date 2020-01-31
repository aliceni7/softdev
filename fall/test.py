from flask import Flask, escape, request, render_template
import urllib3
import json

app = Flask(__name__)
@app.route('/')
def hello():
    print(__name__)

    http = urllib3.PoolManager()
    response = http.request(
        'GET',"https://opentdb.com/api.php?amount=10")
    data = response.data

    print(data)

    link = json.loads(data)["url"]

    return render_template("index.html", image=link)


if __name__ == '__main__':
    app.debug = True
    app.run()
