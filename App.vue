<template>
  <div id='app'>
    <div id='header'>
      <h1>Jcheez's Zi Char</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  }
</script>

<style scoped>
  #header {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif';
    float:top;
    padding: 2px;
    color:white;
    background-color:lightblue;
    text-align: center;
    font-size:35px
  }
</style>
