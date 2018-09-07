<template>
     <swiper :options="swiperOption" class="hor-list-swiper"  ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <div class="goods-item">
                <div class="goods-img">
                    <img src="@/assets/imgs/ic_default.png" alt="">
                </div>
                <p class="title text-ellipsis">我是商品名字我是商品名字</p>
                <p class="shell-price">贝壳价：￥150</p>
                <p class="origin-price">集市价：￥265</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="goods-item">
                <div class="goods-img">
                    <img src="@/assets/imgs/ic_default.png" alt="">
                </div>
                <p class="title text-ellipsis">我是商品名字我是商品名字</p>
                <p class="shell-price">贝壳价：￥150</p>
                <p class="origin-price">集市价：￥265</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="goods-item">
                <div class="goods-img">
                    <img src="@/assets/imgs/ic_default.png" alt="">
                </div>
                <p class="title text-ellipsis">我是商品名字我是商品名字</p>
                <p class="shell-price">贝壳价：￥150</p>
                <p class="origin-price">集市价：￥265</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="goods-item">
                <div class="goods-img">
                    <img src="@/assets/imgs/ic_default.png" alt="">
                </div>
                <p class="title text-ellipsis">我是商品名字我是商品名字</p>
                <p class="shell-price">贝壳价：￥150</p>
                <p class="origin-price">集市价：￥265</p>
            </div>
          </swiper-slide>
        
        
          <!-- Optional controls -->
          <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
</template>
<script>
import { swiper, swiperSlider } from 'vue-awesome-swiper'
export default {
    name: 'HorGoodsList',
    props:[],
    data () {
        return {
            swiperOption:{
                direction: 'horizontal',
                slidesPerView: 3,
            }
        }
    },
    components:{
        swiper,
        swiperSlider
    }
}
</script>
<style lang="less" scoped>
.hor-list-swiper{padding: 0 0.2rem 0.3rem;}
.goods-item{width: 2.14rem;}
.goods-img,.goods-img img{width: 100%; height: 2.12rem;border-radius: 0.08rem;}
.goods-img{background: #ccc;margin-bottom: 0.1rem; }
.title{font-size: 0.26rem; width: 100%; color: #333;}
.shell-price{font-size: 0.24rem;color: #fff; display: inline-block; padding: 0.05rem 0.1rem;  border-radius: 0.05rem; margin: 0.1rem 0;
            background-image: linear-gradient(to right,#f3a121,#f0ca1e);
}
.origin-price{font-size: 0.24rem; color: #f6b525}
</style>
