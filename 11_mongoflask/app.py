from flask import Flask, render_template, request, redirect, url_for
import redditall

app = Flask(__name__)


@app.route("/")
def home():
    return render_template('home.html')

@app.route("/search")
def search():
    if 'search' in request.args:
        return render_template("search.html", event=redditall.findSubreddit(request.args["search"]))
    return render_template("search.html")

if __name__ == "__main__":
    app.debug = True
    redditall.createPosts()
    app.run()
