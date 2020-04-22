from flask import Flask
from flask import url_for
from flask import render_template
import json

app = Flask(__name__)


def parse_file():
    temp = []
    with open('static/climate.json', 'r') as file:
        data = json.loads(file.read())['data']
        date = 1880
        for i in range(len(data)):
            temp.append(float(data[str(date)]))
            date += 1
    return temp
            

@app.route("/")
def root():
    parse = parse_file()
    return render_template('index.html', data=parse)

if __name__ == "__main__":
    app.debug = True
    app.run()
