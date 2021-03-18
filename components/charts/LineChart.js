import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [], //west
                label:'West',
                borderColor: "#3e95cd",
                fill: false
              }, {
                data: [], //national
                label:'National',
                borderColor: "#8e5ea2",
                fill: false
              }, {
                data: [], //east
                label:'East',
                borderColor: "#3cba9f",
                fill: false
              }, {
                data: [], //central
                label:'Central',
                borderColor: "#c45850",
                fill: false
              }, {
                data: [], //south
                label:'South',
                borderColor: "#e8c3b9",
                fill: false
              }, {
                data: [], //north
                label:'North',
                borderColor: "#337EFF",
                fill: false
              },   
          ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
      axios.get('https://api.data.gov.sg/v1/environment/psi?date=2021-02-23')
      .then(response => {
          this.render(response.data["items"])
          this.renderChart(this.datacollection, this.options)
          })
    },
    render: function(data) {
      var items=data
      var i 
      for (i=0;i<items.length;i++) {
        var item=items[i]
        this.datacollection.labels.push(item["timestamp"]) //add timestamps into x-axis
        var r = item["readings"]
        var psi = r["psi_twenty_four_hourly"]
        this.datacollection.datasets[0].data.push(psi["west"])
        this.datacollection.datasets[1].data.push(psi["national"])
        this.datacollection.datasets[2].data.push(psi["east"])
        this.datacollection.datasets[3].data.push(psi["central"])
        this.datacollection.datasets[4].data.push(psi["south"])
        this.datacollection.datasets[5].data.push(psi["north"])
      }
    }
  },
  created () {
    this.fetchItems()
  }
}

