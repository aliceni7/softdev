import pymongo, json, pprint
from bson.json_util import loads

client = pymongo.MongoClient('localhost', 27017) # port 27017
db = client['testdata'] # does not have to exist
col = db['restaurants']

if (col.count() == 0):
    file = open("primer-dataset.json", "r")
    content = file.readlines()
    for line in content:
        col.insert_one(loads(line))

def borough(b):
    for r in col.find({ "borough": b }):
        pprint.pprint(r)

borough("Queens")
