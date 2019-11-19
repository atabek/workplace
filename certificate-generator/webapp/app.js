new Vue({
  el: '#app',
  data: {
    today: new Date(),
    subjects: [],
    studentsData: [],
    notNeeded: ["Avg", "Class", "E", "Fullname", "LA", "Teacher", "Term", "U", "Year"]
  },
  mounted: function () {
    let now = new Date()
    this.today = now.toLocaleDateString("en-US")
    fetch("converted/" + "1.9A.json")
      .then(response => response.json())
      .then((data) => {
        this.studentsData = data
      })
    fetch("converted/weight.json")
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
    }
  }
})