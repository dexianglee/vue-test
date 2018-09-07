<template>
    <div class="msg-box">
        <swiper :options="swiperOption" class="msg-swiper"  ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item, index) in msgs" :key="index">
              <p v-html="item"></p>
          </swiper-slide>
         
        
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
     
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name: 'ScrollMsg',
  data () {
    return {
        msgs: [
            '这是消息滚动1这是消息滚动1这是消息滚动1',
            '这是消息滚动2',
            '这是消息滚动3'
        ],
       
        swiperOption: {
           autoplay: {
                        disableOnInteraction: false,
                    },
            loop: true,
            direction: 'vertical'
        }
    } 
  }

}    
</script>
<style lang='less' scoped>
    
    .msg-swiper{background: rgba(123,123,123,0.7); height: 0.6rem; width: 3.73rem; border-top-right-radius: 0.3rem; border-bottom-right-radius: 0.3rem; margin: 0;
        p{height: 0.6rem; line-height: 0.6rem; font-size: 0.26rem; width: 100%; padding: 0 0.2rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #fff}
    }
</style>
