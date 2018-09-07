<template>
    <div class="index">
        <router-view></router-view>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Main from '../pages/Main'
import Sorts from '../pages/Sorts'
import Cart from '../pages/Cart'
import Mine from '../pages/Mine'
export default{
  name: 'Index',
  data(){
     return{
        msg: 'this is index.vue'
     }
  },
  components:{
    NavBar,
    Sorts,
    Cart,
    Main,
    Mine
  }
}
</script>

<style lang='less' scoped>
.index{height: 100%}
</style>
