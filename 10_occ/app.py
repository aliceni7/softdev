from flask import Flask, render_template
<<<<<<< HEAD
import random
=======
>>>>>>> ca81ec613214d93629f4da80dd793d1fd8f35f63
app = Flask(__name__)


@app.route("/")

def hello_world():
    print(__name__)
    return "no hablo queso!"

<<<<<<< HEAD
#coll = [0,1,1,2,3,5,8]

##@app.route("/templates/my_foist_template.html")
#def test_tmplt():
#    return render_template(
#        'my_foist_template.html',
#        foo="foooo",
#        collection=coll
#        )

#opens csv file to be read and printed
f = open("occupations.csv","r")

#original code for finding random occupation by using dictionary
odict = {}

for job in f:
    njob = job.rsplit(",",1);
    occupation = njob[0];
    percent = float(njob[1].rstrip(njob[1][-1:]))
    odict[occupation] = percent


def randomJob():

    randjob = random.randint(1, 998) / 10.0

    for job in odict:
        p = percent
        if randjob - p <= 0:
            return job
        else:
            randjob -= p

f.close()            
coll = open("occupations.csv","r")

@app.route("/occupyflaskst")
def print_occ():
    return render_template(
        'my_foist_template.html',
        foo="Occupations",
        name="Occupations",
        head="This page displays occupations and the percent in which the occupation occupies the workforce. Below is a randomly selected occupation.",
        team="Team We Can't Draw by hello and hello",
        rand="Random job: " + randomJob(),
        collection=coll
        )
    
=======
coll = [0,1,1,2,3,5,8]

@app.route("/templates/my_foist_template.html")
def test_tmplt():
    return render_template(
        'my_foist_template.html',
        foo="foooo",
        collection=coll
        )
>>>>>>> ca81ec613214d93629f4da80dd793d1fd8f35f63

if __name__ == "__main__":
    app.debug = True
    app.run()
