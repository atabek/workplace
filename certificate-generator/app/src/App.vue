<template>
  <div id="app">
    <div class="no-print">
      <div class="container">
        <div class="report-selection-menu">
          <div class="report-selection-menu-item">
            <span>Select term:</span>
            <select name="terms" @change="termOnChange($event)">
              <option v-for="term in terms" :value="term" :key="term">{{term}}</option>
            </select>
          </div>
          <div class="report-selection-menu-item">
            <span>Select grade:</span>
            <select name="grades" @change="gradeOnChange($event)">
              <option v-for="grade in grades" :value="grade" :key="grade">{{grade}}</option>
            </select> 
          </div>
          <div class="report-selection-menu-item">
            <span>Select class:</span>
            <select name="gradeLetters" @change="gradeLetterOnChange($event)">
              <option v-for="gradeLetter in gradeLetters" :value="gradeLetter" :key="gradeLetter">{{gradeLetter}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div v-for="student in studentsData" :key="student.Fullname" class="wrapper">
      <div class="header">
        <div class="container">
          <div class="school-name mb-10">
            <div class="school-name-background">
              <img :src="uwisLogo" alt="UWIS school logo">
            </div>
            <div class="school-name-item">
              <div class="school-name-item-level-1"><span>Международная школа</span></div>
              <div class="school-name-item-level-1"><span>&laquo;Юнайтед Ворлд Интернэшнл Скул&raquo;</span></div>
              <div class="school-name-item-level-2"><span>&#40;Аккредитованные программы Cambridge Assessment</span></div>
              <div class="school-name-item-level-2"><span>и Advanced Placement&#41;</span></div>
            </div>
            <div class="school-name-item">
              <div class="school-name-item-level-1"><span>World International School</span></div>
              <div class="school-name-item-level-2"><span>&#40;Cambridge Assessment</span></div>
              <div class="school-name-item-level-2"><span>and AP Accredited Programs&#41;</span></div>
            </div>
          </div>
          <div class="school-header-info">
            <div class="school-header-info-bank">
              <div class="school-header-info-bank-item"><span>Инн&#58; 02705201910356</span></div>
              <div class="school-header-info-bank-item"><span>ОКПО&#58; 30404367</span></div>
              <div class="school-header-info-bank-item"><span>Код ГНИ&#58; 001 Октябрьский</span></div>
              <div class="school-header-info-bank-item"><span>Соц.Фонд&#58; 104100013276</span></div>
              <div class="school-header-info-bank-item"><span>Банк&#58; ОАО 	&ldquo;Оптима Банк&rdquo;</span></div>
              <div class="school-header-info-bank-item"><span>р&#47;с&#58; 1090805952270150</span></div>
              <div class="school-header-info-bank-item"><span>Бик&#58; 109008</span></div>
            </div>
            <div class="school-header-info-contacts">
              <div class="school-header-info-contacts-item"><span>Адрес&#58; г. Бишкек, ул. А.Масалиева 26, 720016</span></div>
              <div class="school-header-info-contacts-item"><span>Телефоны&#58; +996 &#40;312&#41; 884129, +996 &#40;551&#41; 932222</span></div>
              <div class="school-header-info-contacts-item"><span>www.uwis.edu.kg</span></div>
              <div class="school-header-info-contacts-item"><span>info@uwis.edu.kg</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="content mb-120">
        <div class="container">
          <div class="report-card-title mt-40 mb-60">
            <h1>Student's report card</h1>
          </div>
          <div class="report-card-wrapper">
            <div class="report-card-background">
              <img :src="uwisLogo" alt="UWIS school logo">
            </div>
            <div class="report-card-student-info">
              <div class="report-card-student-fullname mb-20">{{student.Fullname}}</div>
              <div class="report-card-student-details mb-10">
                <div class="report-card-student-details-item">Class: {{student.Class}}</div>
                <div class="report-card-student-details-item">-</div>
                <div class="report-card-student-details-item">Term: {{student.Term}}</div>
                <div class="report-card-student-details-item">-</div>
                <div class="report-card-student-details-item">School year: {{student.Year}}</div>
                <div class="report-card-student-details-item">-</div>
                <div class="report-card-student-details-item">{{today}}</div>
              </div>
              <div class="report-card-student-absences mb-20">
                <span>Total absent hours: {{student.U}}</span>
              </div>
              <div class="report-card-student-report mb-30">
                <table class="mt-10" border="1">
                  <caption class="report-card-student-gpa mb-10">GPA: {{student.Avg}}</caption>
                  <thead>
                    <td class="table-header table-header-subject">Subject</td>
                    <td class="table-header">Weight</td>
                    <td class="table-header" colspan="2">Average</td>
                  </thead>
                  <tbody class="table-body">
                    <tr v-for="(mark, subject) in getStudentSubject(student)" :key="subject">
                      <td class="table-body-subject" v-if="mark != '0'">{{getSubjectNameLong(subject)}}</td>
                      <td class="table-body-weight" v-if="mark != '0'">{{getSubjectCredit(subject)}}</td>
                      <td class="table-body-mark" v-if="mark != '0'">{{mark}}</td>
                      <td class="table-body-letter" v-if="mark != '0'">{{getLetterGrade(mark)}}</td>
                    </tr>
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>
            </div>
          </div>
          <div class="report-card-grading">
            <div class="report-card-grading-item"><span>Grading Criteria:</span></div>
            <div class="report-card-grading-item"><span>+90</span></div>
            <div class="report-card-grading-item"><span>(A*),</span></div>
            <div class="report-card-grading-item"><span>+80</span></div>
            <div class="report-card-grading-item"><span>(A),</span></div>
            <div class="report-card-grading-item"><span>+70</span></div>
            <div class="report-card-grading-item"><span>(B),</span></div>
            <div class="report-card-grading-item"><span>+60</span></div>
            <div class="report-card-grading-item"><span>(C),</span></div>
            <div class="report-card-grading-item"><span>+50</span></div>
            <div class="report-card-grading-item"><span>(D),</span></div>
            <div class="report-card-grading-item"><span>+40</span></div>
            <div class="report-card-grading-item"><span>(E),</span></div>
            <div class="report-card-grading-item"><span>+30</span></div>
            <div class="report-card-grading-item"><span>(F),</span></div>
            <div class="report-card-grading-item"><span>+20</span></div>
            <div class="report-card-grading-item"><span>(G)</span></div>
          </div>
          <div class="report-card-signatures mt-30">
            <div class="report-card-signature-item"><span>Coordinator :</span></div>
            <div class="report-card-signature-item"><span>School Principal :</span></div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          <div class="footer-logos">
            <div class="cambridge-logo">
              <img :src="cambridgeLogo" alt="Cambridge Assessment International Education">
            </div>
            <div class="ap-logo">
              <img :src="apLogo" alt="Advanced Placement">
            </div>
          </div>
        </div>
      </div>
      <div class="page-break"></div>
    </div>
  </div>
</template>
<script>

import apLogo from './assets/ap.jpg'
import cambridgeLogo from './assets/cambridge.jpg'
import uwisLogo from './assets/uwis-logo.jpg'

export default {
  name: "app",
  data() {
    return {
      apLogo: apLogo,
      cambridgeLogo: cambridgeLogo,
      uwisLogo: uwisLogo,
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
    }
  },
  created: function () {
    let now = new Date()
    this.today = now.toLocaleDateString("en-GB")
    fetch("converted/" + "weights.json")
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
        this.term = ""
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
        this.grade = ""
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
        this.grade = ""
      } else {
        this.gradeLetterSelected = true
        this.gradeClass = event.target.value
        this.checkTermGradeLetter(this.termSelected, this.gradeSelected, this.gradeLetterSelected)
      }
    },
    checkTermGradeLetter(termSelected, gradeSelected, gradeLetterSelected) {
      if (termSelected && gradeSelected && gradeLetterSelected) {
        fetch("converted/" + "term" + this.term + '/' + this.term + "." + this.grade + this.gradeClass + ".json")
          .then(response => response.json())
          .then((data) => {
            this.studentsData = data
          })
      }
    }
  }
}
</script>
<style lang="scss">
html, body, * {
  margin: 0;
  padding: 0;
}
.mb-5 {
  margin-bottom: 5px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-15 {
  margin-bottom: 15px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-30 {
  margin-bottom: 30px;
}
.mb-40 {
  margin-bottom: 40px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mb-60 {
  margin-bottom: 60px;
}
.mb-80 {
  margin-bottom: 80px;
}
.mb-100 {
  margin-bottom: 100px;
}
.mb-120 {
  margin-bottom: 120px;
}
.mb-140 {
  margin-bottom: 140px;
}
.mt-5 {
  margin-top: 5px;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-30 {
  margin-top: 30px;
}
.mt-40 {
  margin-top: 40px;
}
.mt-50 {
  margin-top: 50px;
}
.mt-60 {
  margin-top: 60px;
}
.container {
  display: block;
  max-width: 900px;
  margin: 0 auto;
}
.report-selection-menu {
  display: flex;
  justify-content: space-around;
  height: 100px;
  width: 75%;
  margin: 0 auto;
}
.report-selection-menu-item {
  width: 140px;
  padding-top: 20px;
}
.school-name {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.school-name-item {
  position: relative;
  text-align: center;
}
.school-name-item {
  width: 45%;
}
.school-name-item-level-1 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
.school-name-item-level-2 {
  font-size: 13px;
  font-family: Helvetica, sans-serif;
  letter-spacing: -1px;
  color: red;
}
.school-header-info {
  font-family: Arial, Helvetica, sans-serif;
  border-top: 0.1em dashed;
  border-bottom: 0.1em dashed;
  font-size: 8px;
  padding: 3px 7%;
}
.school-header-info-bank {
  display: flex;
  justify-content: space-around;
}
.school-header-info-contacts {
  display: flex;
  justify-content: space-around;
}
.report-card-title {
  text-transform: uppercase;
  text-align: center;
  color: red;
}
h1 {
  font-family: Courier, monospace;
  font-weight: bold;
  font-size: 2.5rem;
}
.report-card-wrapper {
  position: relative;
}
.school-name-background {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  z-index: -10;  
}
.school-name-background img {
  display: block;
  width: 100%;
}
.report-card-background {
  margin-top: -30px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -150px;
  width: 300px;
  opacity: 0.2;
  z-index: -10;
}
.report-card-background img {
  display: block;
  width: 100%;
}

.report-card-student-fullname {
  text-align: center;
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  
}
.report-card-student-details {
  padding: 0 20%;
  display: flex;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
}
.report-card-student-absences {
  display: flex;
  justify-content: center;
}
.report-card-student-absences span {
  font-style: italic;
}
.report-card-student-gpa {
  text-align: right;
  font-size: 25px;
  font-weight: bolder;
  color: red;

}
.report-card-student-report {
  padding: 0 15%;
}
.report-card-student-report table {
  font-family: 'Courier New', Courier, monospace;
}
.report-card-student-report .table-header{
  font-weight: bold;
  background-color: lightblue;
}
.report-card-student-report .table-body-subject {
  padding-left: 5px;
}
.report-card-student-report table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 90%;
}
.table-header, .table-body-mark, .table-body-weight{
  text-align: center;
}
.table-body-letter {
  padding-left: 7px;
}
.table-body-subject {
  width: 60%;
}
.report-card-grading {
  padding: 0 10%;
  display: flex;
  justify-content: space-around;
}
.report-card-grading .report-card-grading-item {
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
}
.report-card-signatures {
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
}
.report-card-signatures .report-card-signature-item {
  font-family: 'Courier New', Courier, monospace;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer-logos {
  display: flex;
  justify-content: space-between;
  padding: 10px 35%;
  border-top: 0.05em dashed;
}
.footer-logos img{
  display: block;
  width: 100%;
  opacity: .5;
}
.footer-logos .cambridge-logo {
  width: 150px;
}
.footer-logos .ap-logo {
  width: 55px;
}
.wrapper {
  position: relative;
  height: 1000px;
}
@media print {
  .page-break {page-break-after: always;}
  .no-print, .no-print * { display: none !important;}
}
</style>
