new Vue({
  el: '#app',
  data: {
    today: new Date(),
    subjects: [],
    studentsData: [],
    notNeeded: ["Avg", "Class", "E", "Fullname", "LA", "Teacher", "Term", "U", "Year"],
    terms: ["-", "1", "2", "3"],
    gradeLetters: ["-", "a", "b", "c", "d"],
    grades: ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    selectedReport: "",
    termSelected: false,
    gradeSelected: false,
    gradeLetterSelected: false,
    term: "",
    grade: "",
    gradeClass: ""
  },
  created: function () {
    let now = new Date()
    this.today = now.toLocaleDateString("en-US")
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
      if (event.target.value == '-') {
        console.log("choose a term")
        this.termSelected = false
      } else {
        this.termSelected = true
        this.term = event.target.value
        this.checkTermGradeLetter(this.termSelected, this.gradeSelected, this.gradeLetterSelected)
      }
    },
    gradeOnChange(event) {
      if (event.target.value == '-') {
        console.log("choose a grade")
        this.gradeSelected = false
      } else {
        this.gradeSelected = true
        this.grade = event.target.value
        this.checkTermGradeLetter(this.termSelected, this.gradeSelected, this.gradeLetterSelected)
      }
    },
    gradeLetterOnChange(event) {
      if (event.target.value == '-') {
        console.log("choose a grade letter")
        this.gradeLetterSelected = false
      } else {
        this.gradeLetterSelected = true
        this.gradeClass = event.target.value
        this.checkTermGradeLetter(this.termSelected, this.gradeSelected, this.gradeLetterSelected)
      }
    },
    checkTermGradeLetter(termSelected, gradeSelected, gradeLetterSelected) {
      if (termSelected && gradeSelected && gradeLetterSelected) {
        fetch("converted/" + this.term + "." + this.grade + this.gradeClass + ".json")
          .then(response => response.json())
          .then((data) => {
            this.studentsData = data
          })
      }
    }
  }
})