import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Pork Fried Rice","Mapo Tofu","Sambal KangKung","Cereal Prawn","Dry Beef Hor Fun","Prawn omelette"],
            datasets: [{
                label: "Food quantity",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#337EFF"],
                data: [0,0,0,0,0,0],
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            scales:{
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          var o=doc.data().order //get order array
          var i
          for (i=0;i<o.length;i++) { //loop through food in an order to update quantity
            var foodname=o[i].substring(0,o[i].length-2)
            var foodquantity=parseInt(o[i].substring(o[i].length-1,o[i].length),10)
            if (new String("Pork Fried Rice: ").trim().valueOf() === new String(foodname).trim().valueOf()) {
              this.datacollection.datasets[0].data[0]+=foodquantity
            } else if (new String("Mapo Tofu: ").trim().valueOf() === new String(foodname).trim().valueOf()) {
              this.datacollection.datasets[0].data[1]+=foodquantity
            } else if (new String("Sambal KangKung: ").trim().valueOf() === new String(foodname).trim().valueOf()) {
              this.datacollection.datasets[0].data[2]+=foodquantity
            } else if (new String("Cereal Prawn: ").trim().valueOf() === new String(foodname).trim().valueOf()) {
              this.datacollection.datasets[0].data[3]+=foodquantity
            } else if (new String("Dry Beef Hor Fun: ").trim().valueOf() === new String(foodname).trim().valueOf()) {
              this.datacollection.datasets[0].data[4]+=foodquantity
            } else {
              this.datacollection.datasets[0].data[5]+=foodquantity
            }
          }
          this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}