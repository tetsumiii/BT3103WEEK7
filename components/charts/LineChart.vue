<template>
  <div class="chart">
    <h1 id='top'>Line Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
export default {
  components: {
    'chart':Chart
  }
};
</script>

<style>
#top {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
    float:top;
    padding: 2px;
    color:white;
    background-color:lightblue;
    text-align: center;
    font-size:35px
}
</style>