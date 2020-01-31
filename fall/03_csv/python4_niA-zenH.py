import random

f = open("occupations.csv","r")

odict = {}


for job in f:
    njob = job.rsplit(",",1);
    occupation = njob[0];
    percent = float(njob[1].rstrip(njob[1][-1:]))
    odict[occupation] = percent

print(odict)


def randomJob():

    randjob = random.randint(1, 998) / 10.0
    print(randjob)

    for job in odict:
        p = percent
        if randjob - p <= 0:
            return job
        else:
            randjob -= p

print(randomJob())



  

    
    
