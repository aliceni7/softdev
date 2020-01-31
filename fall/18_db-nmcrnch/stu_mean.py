#Alice Ni, Devin Lin
#SoftDev  
#K18 :: average
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops


def studentGrades():
    c.execute("DROP TABLE stu_avg")
    c.execute("CREATE TABLE stu_avg(name TEXT, id INTEGER, average INTEGER)")
    q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;" 
    foo = list(c.execute(q)) # q is a bunch of tuples of the information above
    string = foo[0][0]
    id = list(foo)[0][1]
    sum = 0
    tick = 1
    foo.append(['null',0,0]) #ensures the last student will be added to table
    for bar in foo:
        if bar[0] != string:
            tick -= 1
            avg = sum / tick
            c.execute("INSERT INTO stu_avg VALUES(?,?,?)", (string, id, avg))
            tick = 1
            sum = 0
            string = bar[0]
            id = bar[1]
        sum += bar[2]
        tick += 1
        

studentGrades();

db.commit()
db.close()
