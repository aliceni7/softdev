#Alice Ni
#SoftDev  
#K18 :: average
#Oct 2019

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops


def studentGrades():
    q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"
    foo = c.execute(q)
    reader = csv.DictReader('students.csv')
    for bar in reader:
        print(row[

studentGrades();
