from flask import Flask, render_template
import random
app = Flask(__name__)


@app.route("/")

def hello_world():
    print(__name__)
    return "hello world"


#opens csv file to be read and printed
f = open("occupations.csv","r")

#original code for finding random occupation by using dictionary
odict = {}

for job in f:
    njob = job.rsplit(",",1); # splits line by line with comma delimiter
    occupation = njob[0]; #sets key in dictionary to occupation name
    percent = float(njob[1].rstrip(njob[1][-1:])) #strips away whitespace
    odict[occupation] = percent #sets value of the key to corresonding percent

def randomJob(): #finds a random job
    randjob = random.randint(1, 998) / 10.0 #gets a random value from 1-99.8
    for job in odict:
        p = percent
        if randjob - p <= 0:
            return job
        else:
            randjob -= p
            
f.close()            
#coll = open("occupations.csv","r") #opens csv to be printed

@app.route("/occupyflaskst")
def print_occ():
    return render_template(
        'my_foist_template.html',
        foo="Occupations",
        name="Occupations",
        head="This page displays occupations and the percent in which the occupation occupies the workforce. Below is a randomly selected occupation.",
        team="Team We Can't Draw by Alice Ni and Jionghao Wu",
        rand="Random job: " + randomJob(),
        collection=odict
        )

if __name__ == "__main__":
    app.debug = True
    app.run()
