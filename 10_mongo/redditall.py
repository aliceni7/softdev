# Team rslashsoftdev -- Alice Ni and Kazi Jamal
# Softdev pd9
# K10 -- Import/Export Bank
# 

from pymongo import MongoClient
from bson.json_util import loads
import json
import pprint

client = MongoClient('localhost', 27017)

f = open('all.json', 'r')
dataset = json.loads(f.read())
f.close()

db = client['rslashsoftdev']
col = db['children']
col.delete_many({})

if (col.count() == 0):
    f = open("all.json","r")
    content = f.readlines()
    for line in content:
        print(line)
        col.insert_one(loads(line[]))

print(col) #json file messed up, also has so much junk
#col right now is just one long line of json file saved in the children collection of the rslashsoftdev database

        
def titles(t):
    for r in col.find({ "children.data.title" : t}):
        pprint.pprint(t)


#posts = db.posts

# clear
#xpost.delete_many({})

client.close()
