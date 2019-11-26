new Vue({
  el: '#app',
  data: {
    today: new Date(),
    subjects: [],
    studentsData: [],
    notNeeded: ["Avg", "Class", "E", "Fullname", "LA", "Teacher", "Term", "U", "Year"],
    terms: ["-", "1", "2", "3"],
    grades: ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    gradeLetters: ["-", "a", "b", "c"]
  },
  created: function () {
    let now = new Date()
    this.today = now.toLocaleDateString("en-US")
    fetch("converted/" + "1.9C.json")
      .then(response => response.json())
      .then((data) => {
        this.studentsData = data
      })
    fetch("converted/" + "weight.json")
      .then(response => response.json())
      .then((data) => {
        this.subjects = data
      })
  },
  methods: {
    getStudentSubject(student) {
      let clonedStudent = Object.assign({}, student);
      for (const [stdkey, stdvalue] of Object.entries(clonedStudent)) {
        for (const [key, value] of Object.entries(this.notNeeded)){
          if (!stdkey.localeCompare(value)) {
            delete clonedStudent[stdkey]
          }
        }
      }
      for (const [k, v] of Object.entries(clonedStudent)) {
        clonedStudent[k] = Math.round(v)
      }
      return clonedStudent
    },
    getLetterGrade(m) {
      let mark = parseFloat(m)
      let letter = ""
      if (mark >= 90) {
        letter = "A*"
      } else if (mark >= 80) {
        letter = "A"
      } else if (mark >= 70) {
        letter = "B"
      } else if (mark >= 60) {
        letter = "C"
      } else if (mark >= 50) {
        letter = "D"
      } else if (mark >= 40) {
        letter = "E"
      } else if (mark >= 30) {
        letter = "F"
      } else {
        letter = "G"
      }
      return letter
    },
    getSubjectNameLong(shortName) {
      let longName = ""
      for (let i = 0; i < this.subjects.length; i++) {
        if (!this.subjects[i].Subjectname.localeCompare(shortName)) {
          longName = this.subjects[i].SubjectnameLong
          break;
        }
      }
      return longName
    },
    getSubjectCredit: function(shortName) {
      let credit = 1
      for (let i = 0; i < this.subjects.length; i++) {
        if (!this.subjects[i].Subjectname.localeCompare(shortName)) {
          credit = this.subjects[i].Credit
          break;
        }
      }
      return credit
    },
    termOnChange(event) {
      console.log("term:", event.target.value)
    },
    gradeOnChange(event) {
      console.log("grade:", event.target.value)
    },
    gradeLetterOnChange(event) {
      console.log("class:", event.target.value)
    }
  }
})