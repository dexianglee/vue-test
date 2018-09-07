<template>
  <div class="bg-gray main">
    <!-- 轮播图 及 滚动消息 -->
    <div class="banner">
      <!-- 轮播图 -->
      <img-swiper></img-swiper>
      <!-- 滚动消息 -->
      <scroll-msg class="msg-swiper"></scroll-msg>
    </div>
    <!-- 贝壳加油站 -->
    <router-link to="" class="shell-gas" >
      <img src="@/assets/imgs/beike.png" alt="贝壳加油站" title="贝壳加油站">
    </router-link>
    <!-- 签到抽奖 新手攻略-->
    <div class='activity'>
      <ul class="act-list">
        <li>
          <router-link to="">
            <img src="@/assets/imgs/ic_default.png" alt="">
            <p class="text-center">签到抽奖</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/imgs/ic_default.png" alt="">
            <p class="text-center">限时签购</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="@/assets/imgs/ic_default.png" alt="">
            <p class="text-center">邀请有礼</p>
            <!-- <p class="text-center">15%返利</p> -->
          </router-link>
        </li>
      </ul>
      <router-link to="" class="fresh-novice"> 
        <img src="@/assets/imgs/gonglue.png" alt=""> 
      </router-link>
    </div> 
    <!-- 人气精选 -->
    <div class="hot-goods bg-white">
      <h3 class="title text-center">人气精选 <img src="@/assets/imgs/icon_qianwang.png"> </h3>
      <hor-goods-list></hor-goods-list>
    </div>
    <!-- 公益 工厂 -->
    <div class="gy-gc">
      <router-link to="">
        <img src="@/assets/imgs/gongyi@2x1.png" alt="公益入口图片">
      </router-link>
      <router-link to="">
        <img src="@/assets/imgs/gongchang.png" alt="工厂入口图片">
      </router-link>
    </div>
    <!-- 好货推荐 -->
    <div class="command-goods bg-white">
      <h3 class="title text-center">好货推荐 <img src="@/assets/imgs/icon_qianwang.png" > </h3>
      <ver-goods-list></ver-goods-list>
    </div>
  </div>
</template>
<script>
import ImgSwiper from '@/components/ImgSwiper'
import ScrollMsg  from '@/components/ScrollMsg'
import HorGoodsList from '@/components/HorGoodsList'
import VerGoodsList from '@/components/VerGoodsList'
export default{
  name: 'Main',
  data () {
    return {
        // msg: '这是首页主页面',
        
    }
  },
  components:{
    ImgSwiper,
    ScrollMsg,
    HorGoodsList,
    VerGoodsList
  },
  computed: {
      // swiper () {
      //   return this.$refs.mySwiper.swiper
      // },
      // callback () {

      // }
    },
  methods: {
   
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="less" scoped>
  .main{margin-bottom: 1.5rem;}
  .banner{ position: relative; margin-bottom: 0.5rem; }
  
  .msg-swiper{position: absolute; left: 0; bottom: -0.3rem;}
  .shell-gas{display: block;}
  .shell-gas img{width: 100%; height:2.3rem; display: block}
  .activity{ margin: 0.3rem auto; background: #fff;
    .act-list{ display: flex; justify-content: space-around; padding-top: 0.2rem;
      li{width: 30%;}
      img{width: 100%; height: 2.3rem;}
      p{font-size: 0.24rem; color: #333;}
    }
  }
  .title{font-size: 0.3rem; display: block; padding: 0.3rem 0; margin: 0 auto;
    img{width: 0.3rem; vertical-align: middle}
  }
  .fresh-novice{width: 6.9rem; margin: 0.2rem; display:block;height: 1.75rem;
    img{width: 100%;height: 1.75rem; display: block;}
  }
  .gy-gc{display: flex;margin:0.2rem auto; width: 7rem;
    router-link{display: inline-block;}
    img{width: 98%;}
  }
</style>