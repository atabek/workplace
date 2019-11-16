import csv
import json
import glob
import os

def numberOfLines(file):
  f = open(file, "r")
  numlines = sum(1 for l in f)
  f.close()
  return numlines

def calculageAverage(subjectMarks, subjects, subjectCredit):
  total = 0
  sumCredits = 0
  for i in range(len(subjectMarks)):
    # credit * mark
    total = total + subjectCredit[subjects[i]] * subjectMarks[i]
    if(subjectMarks[i] != 0):
      sumCredits = sumCredits + subjectCredit[subjects[i]]
  return round(total/sumCredits)
# print(glob.glob('*.csv'))
# termOrYear = input("Is it term or year report? Type t for term and y for year:")
# while True:
#   if (termOrYear == "t" or  termOrYear == "y"):
#     break
#   else:
#     termOrYear = input("Is it term or year report? Type t for term and y for year:")
path = os.getcwd()
try:
  convertedDir = path + "/converted"
  if(os.path.isdir(convertedDir)):
    os.rmdir(convertedDir)
  os.mkdir(path + '/converted')
except OSError:
  print ("Creation of the directory %s failed" % path)
else:
  print ("Successfully created the directory %s " % path)

subjectCredit = dict()
with open("weight.csv", 'r') as csvfile:
  for line in csvfile:
    values = line.replace('\n', '', 1).split(',')
    subjectCredit[values[0]] = int(values[1])
  csvfile.close()

classTeacher = ""
className = ""
term = ""
schoolYear = ""
titles = []
studentFullName = ""
joinedString = ","
n = 0
wholeString = ""
source_files = [
  "1.9A.csv",
  "1.9B.csv",
  "1.9C.csv"
]
subjects = []
subjectMarks = []
for file in source_files:
  numlines = numberOfLines(file)
  read_file = open(file, "r")
  write_file = open("converted_" + file, "w+")
  for line in read_file:
    n = n + 1
    if (n == 2):
      className = line.split(',')[0].split(':')[1].replace(" ", "")
    if (n == 8):
      classTeacher = line.split(',')[0].split(":")[1].replace(" ", "", 1)
    if (n == 9):
      term = line.split(' ')[2]
    if (n == 10):
      schoolYear = line.split(',')[0].split(":")[1].replace(" ", "")
    if (n == 12):
      titles = line.split(',')[1:]
      subjects = titles[:-4]
      titles[len(titles) - 1] = titles[len(titles) - 1].replace('\n', '')
      titles.insert(0, "Fullname")
      titles.append("Class")
      titles.append("Teacher")
      titles.append("Term")
      titles.append("School Year")
      joinedString = ",".join(titles) + '\n'
      wholeString = joinedString
    if (n >= 13 and n < numlines):
      splittedLine = line.replace('"', '').split(',')
      splittedLine[len(splittedLine) - 1] = splittedLine[len(splittedLine) - 1].split('\n')[0]
      lastName = splittedLine[0]
      firstName = splittedLine[1]
      firstName = firstName.replace(" ", "", 1)
      studentFullName = firstName + ' ' + lastName
      marks = splittedLine[2:len(splittedLine)]
      for i in range(len(marks)):
        if marks[i] == "" or marks[i] == '-':
          marks[i] = str(0)
      subjectMarks = [float(m) for m in marks[:-5]]
      # else:
        # marks[i] = str(round(float(marks[i])))
      # average1 = splittedLine[-5]
      # average2 = splittedLine[-4]
      average = calculageAverage(subjectMarks, subjects, subjectCredit)
      marks[-5] = str(average)
      marks[-4] = splittedLine[-3]
      marks[-3] = splittedLine[-2]
      marks[-2] = splittedLine[-1]
      marks[-1] = className
      marks.append(classTeacher)
      marks.append(term)
      marks.append(schoolYear)
      joinedString = studentFullName + ',' + ",".join(marks) + '\n'
      wholeString = wholeString + joinedString
  write_file.write(wholeString)
  n = 0

  write_file.close()
  read_file.close()
    # with open(f) as convertedFile:
    #     reader = csv.DictReader(convertedFile)
    #     rows = list(reader)

    # with open('test.json', 'w') as convertedJsonFile:
    #     json.dump(rows, convertedJsonFile)
