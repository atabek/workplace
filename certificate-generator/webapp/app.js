new Vue({
  el: '#app',
  data: {
    today: new Date(),
    studentsData: []
  },
  mounted: function () {
    let now = new Date()
    this.today = now.toLocaleDateString("en-US")
    fetch("converted/1.9A.json")
      .then(response => response.json())
      .then((data) => {
        this.studentsData = data
        console.log(this.studentsData)
      })
  },
  methods: {
  }
})