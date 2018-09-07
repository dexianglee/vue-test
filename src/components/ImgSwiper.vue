<template>
    <swiper :options="swiperOption" class="banner-swiper"  ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../assets/imgs/1gongyi.jpg"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/1gongyi.jpg"></swiper-slide>
          <swiper-slide><img src="../assets/imgs/1gongyi.jpg"></swiper-slide>
        
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
    name:'ImgSwiper',
    data(){
        return {
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // zoom: true,
                autoplay: {
                            disableOnInteraction: false,
                            },
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.swiper
        },
        callback () {

        }
        },
    methods: {
    
    },
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style lang="less" scoped>
.swiper-slide img{width: 100%; display: block;}
</style>
