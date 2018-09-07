<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{padding:0; margin:0; box-sizing: border-box; }
@base: #f49822 ;
html{ font-family:'microsoft yahei'; height:100%;}
body{height:100%; overflow-y: scroll; position: relative;}
a{text-decoration: none; outline: none; -webkit-tap-highlight-color: none; tap-highlight-color: none;}
img{border: none;}
button{ outline: none;border: none; -webkit-tap-highlight-color: none; tap-highlight-color: none;}
.text-center{text-align:center;}
.text-left{text-align:left;}
.text-right{text-align:right;}

.text-ellipsis{overflow: hidden; white-space: nowrap; text-overflow: ellipsis}
ul{list-style: none}
.mask{position: fixed; top: 0; left: 0; z-index: 9999;  height: 100%; width: 100%; background-color:rgba(0, 0, 0, 0.5); display: flex; }
.modal{ background: #fff; border-radius: 0.1rem; margin: auto;}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}

.bg-white{ background-color:#fff;}
.bg-gray{ background-color:#f4f4f4;}
.bg-yellow{ background-color:#f49822;}
</style>
