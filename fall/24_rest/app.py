# Alice Ni & Moody Rahman
# SoftDev1 pd2
# k24 -- NASA API
# 2019 Nov 12

from flask import Flask, escape, request, render_template
import urllib3
import json

app = Flask(__name__)
@app.route('/')
def hello():
    print(__name__)

    http = urllib3.PoolManager()
    response = http.request(
        'GET', "https://api.nasa.gov/planetary/apod?api_key=XZwpcj1OVbMqNtKpVeQu7RDu1yrZ1gjyNxJyEe7c")
    data = response.data

    print(data)

    link = json.loads(data)["url"]

    return render_template("index.html", image=link)


if __name__ == '__main__':
    app.debug = True
    app.run()
