<template>
    <div class='navbar'>
        <ul>
            <!-- 循环操作
            <li v-for="(item, index) in navItem" :key="index" @click='addActive(item.id)' :id='item.id' :class='{ active: flag===item.id }'>
                <img v-bind:src='item.src' />
                <p v-text="item.name"></p>
            </li> 
            -->
            <router-link to="/">
                 <li @click='addActive(1)' :class='{ active: flag===1 }'>
                    <i class="iconfont icon-index"></i>
                    <p>首页</p>
                </li>
            </router-link>
            <router-link to="/sorts">
                <li  @click='addActive(2)' :class='{ active: flag===2 }'>
                    <!-- <img src='../assets/imgs/sorts.svg'/> -->
                    <i class="iconfont icon-sorts"></i>
                    <p>分类</p>
                </li>
            </router-link>
            <router-link to="/cart">
                <li @click='addActive(3)' :class='{ active: flag === 3 }'>
                    <!-- <img src='../assets/imgs/cart.svg' /> -->
                    <i class="iconfont icon-cart"></i>
                    <p>购物车</p>
                </li>
             </router-link>
            <router-link to="/mine">
                <li @click='addActive(4)' :class='{ active: flag ===4 }'>
                    <!-- <img src='../assets/imgs/center.svg'/> -->
                    <i class="iconfont icon-center"></i>
                    <p>个人</p>
                </li>
             </router-link>
        </ul>
    </div>
</template>

<script>
import '@/assets/icon/iconfont.css'
import '@/assets/icon/iconfont.js'
export default{
  name: 'NavBar',
  data () {
    return {
      navItem:[
        {id: 1 ,'name': '首页', 'src': require('../assets/imgs/index.svg')},
        {id: 2 ,'name': '分类', 'src': require('../assets/imgs/sorts.svg')},
        {id: 3 ,'name': '购物车', 'src': require('../assets/imgs/cart.svg')},
        {id: 4 ,'name': '个人', 'src': require('../assets/imgs/center.svg')}
        ],
      flag: 1
    }
  },
  methods:{
    addActive (id) {
        this.flag = id;
    }
  }
}
</script>


<style lang='less' scoped>

    .navbar{position:fixed; bottom:0; z-index: 999; background: #fff; 
        width:100%; border-top:1px solid #ddd; padding-top:0.2rem;padding-bottom:0.1rem;
        ul{ width: 100%; display:flex; justify-content: space-around; padding-left: 0; list-style:none;
            li{ font-size: 0.3rem; text-align: center;}
            .iconfont{ font-size: 0.32rem; color: #333;}
            p{font-size: 0.28rem; color: #333;}
            li.active p{color:#f90;}
            li.active .iconfont{color:#f90;}
        }
    }
     
</style>