<template>
  <div id="bc">
    <div id='lefttab'>
        <router-link to="/" class="routes">Home</router-link>
    </div>
    <div id='midtab'>
        <router-link to="/orders" class="routes">Orders</router-link>
    </div>
    <div id='righttab'>
        <router-link to="/dashboard" class="routes">Dashboard</router-link>
    </div>
    <br style='clear:left'>
    <bar-chart></bar-chart>
    <line-chart></line-chart>

  </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import LineChart from './charts/LineChart.vue'
export default {
  name: 'Dashboard',
  components: {
    'bar-chart':BarChart,
    'line-chart':LineChart
  }
}
</script>

<style>
    #lefttab {
        border-color:black;
        border-style:solid;
        text-align:center;
        width: 485px;
        float:left;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #midtab {
        float:left;
        border-color:black;   
        border-style:solid;
        text-align:center;
        width: 485px;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #righttab {
        border-color:black;   
        border-style:solid;
        text-align:center;
        width: 485px;
        float:left;
        height:30px;
        vertical-align: middle;
        line-height: 30px;
        border-width:1px;
        margin:5px;
    }
    #bc {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>