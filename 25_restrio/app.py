from flask import Flask, escape, request, render_template
import urllib3, json

app = Flask(__name__)
@app.route('/')
def hello():
    http = urllib3.PoolManager()
    response = http.request(
        'GET', "https://pokeapi.co/api/v2/pokemon/pikachu/")
    data = response.data

    link = json.loads(data)["sprites"]["back_default"]

    return render_template("index.html", image=link)

@app.route('/taco')
def taco():
    http = urllib3.PoolManager()
    response = http.request(
        'GET', "http://taco-randomizer.herokuapp.com/random/")
    data = response.data

    link = json.loads(data)["condiment"]["url"]

    return render_template("index.html", text=link)


if __name__ == '__main__':
    app.debug = True
    app.run()
