#Alice Ni, Hilary Zen
#SoftDev  
#K17 :: SQLITE3 BASICS
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================
c.execute("DROP TABLE courses")
c.execute("CREATE TABLE courses(code TEXT, mark INTEGER, id INTEGER)")
f = open("courses.csv","r")
reader = csv.DictReader(f)
for row in reader:
    code = str(row["code"])
    mark = int(row["mark"])
    idd = int(row["id"])
    c.execute("INSERT INTO courses VALUES(?,?,?)",(code,mark,idd))
f.close()
    
c.execute("DROP TABLE students")
c.execute("CREATE TABLE students(name TEXT, age INTEGER, id INTEGER)")
g = open("students.csv","r")
geader = csv.DictReader(g)
for gow in geader:
    name = str(gow["name"])
    age = int(gow["age"])
    iddd = int(gow["id"])
    c.execute("INSERT INTO students VALUES(?,?,?)",(name,age,iddd))
g.close()

q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"

foo = c.execute(q)
print(foo)

for bar in foo:
    print(bar)

command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database


