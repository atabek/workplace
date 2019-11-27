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
    total = total + subjectCredit[subjects[i]] * subjectMarks[i]
    if(subjectMarks[i] != 0):
      sumCredits = sumCredits + subjectCredit[subjects[i]]
  if (sumCredits == 0):
    return 0
  return round(total/sumCredits, 1)

termSelected = input("Which term is it?")
while True:
  if (termSelected == "1" or  termSelected == "2" or termSelected == "3"):
    break
  else:
    termSelected = input("Which term is it?")

path = os.getcwd()
try:
  convertedDir = path + "/webapp/converted"
  if(os.path.isdir(convertedDir)):
    os.rmdir(convertedDir)
  os.mkdir(path + '/webapp/converted/')
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

source_files = glob.glob(termSelected + '.[1-9]*.csv')

subjects = []
subjectMarks = []
for file in source_files:
  numlines = numberOfLines(file)
  read_file = open(file, "r")
  write_file = open("webapp/converted/" + file, "w+")
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
      titles.append("Year")
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
  with open("webapp/converted/" + file) as convertedFile:
    reader = csv.DictReader(convertedFile)
    rows = list(reader)
  jsonFilename = file.replace("csv", "json")
  with open("webapp/converted/" + jsonFilename, 'w') as convertedJsonFile:
    json.dump(rows, convertedJsonFile)
  
  with open("weightToConvert.csv", "w") as weightToConvertFile:
    weightToConvertFile.write("Subjectname,Credit,SubjectnameLong\n")
    with open("weight.csv", "r") as weightCsv:
      for line in weightCsv:
        weightToConvertFile.write(line)
  
  with open("weightToConvert.csv") as weightToConvertFile:
    reader = csv.DictReader(weightToConvertFile)
    rows = list(reader)
  with open("webapp/converted/weight.json", 'w') as convertedJsonFile:
    json.dump(rows, convertedJsonFile)


    
