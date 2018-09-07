<template>
    <div>
        <div class="zq-waterfall">
            <div class="box" v-for="(item, index) in items" :key="index">
                <img :src="item.img" alt="">
                <div class="desc text-ellipsis" v-if="item.desc" v-text="item.desc"></div>
                <div class="info">
                    <p class="tag" v-if="item.tag" v-text="item.tag">精品</p>
                    <p class="title text-ellipsis" v-text="item.title"></p>
                    <p class="shell-price">贝壳价:￥150</p>
                    <p class="origin-price">集市价:￥800</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'VerGoodsList',
        data () {
            return {
                items: [
                    {id:1, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝' ,desc: '我是商品描述啊我是商品描述啊我是商品描述啊'},
                    {id:2, img:require('../assets/imgs/ic_default.png') ,tag:'' ,title:'米够如意三宝',desc: '我是商品描述啊'},
                    {id:3, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝',desc: ''},
                    {id:4, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝',desc: '我是商品描述啊'},
                    {id:5, img:require('../assets/imgs/ic_default.png') ,tag:'' ,title:'米够如意三宝',desc: '我是商品描述啊'},
                    {id:6, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝',desc: ''},
                    {id:8, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝',desc: '我是商品描述啊'},
                    {id:7, img:require('../assets/imgs/ic_default.png') ,tag:'' ,title:'米够如意三宝',desc: ''},
                    {id:9, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝',desc: '我是商品描述啊'},
                    {id:10, img:require('../assets/imgs/ic_default.png') ,tag:'精品' ,title:'米够如意三宝',desc: ''},
                    // { img:require('../assets/ic_default.png')},
                    // { img:require('../assets/ic_default.png')},
                    // { img:require('../assets/ic_default.png')},
                    // { img:require('../assets/ic_default.png')},
                    // { img:require('../assets/ic_default.png')},
                    // { img:require('../assets/ic_default.png')},
                    // { img:require('../assets/ic_default.png')},
                ]
               
            }
        },
        computed: {},
        mounted: function () {
            
        },
        methods: {
           
            
        },
        components: {
            // 组件
        }
    }
</script>
<style scoped lang="less">
    .zq-waterfall{ width: 100%;
        padding: 0 0.1rem; 
        -webkit-column-width:3.52rem;
        -moz-column-width:3.52rem; 
        -webkit-column-gap:0.1rem;
        -moz-column-gap:0.1rem;
        -webkit-column-count: 2; /* Chrome, Safari, Opera */
	    -moz-column-count: 2; /* Firefox */
        column-count: 2;
        break-inside: avoid;
        
        .box{width: 3.52rem; display: block;height:100%;overflow: auto;
            margin-bottom: 0.2rem; border: 1px solid #e7e7e7; border-radius: 0.1rem;
            img{
                width: 100%;
                height: 3.52rem;
                border-radius: 0.133rem;
                display: block;
            }
            .desc{width: 100%; font-size: 0.24rem; color:#fff; background: #ccc; padding: 0.2rem; text-align: center;}
            .info{padding: 0.1rem; }
            .tag{background: #ce361e; font-size: 0.24rem; color:#fff ; padding: 0.1rem 0.2rem; display: inline-block; border-radius: 0.1rem; margin-bottom: 0.1rem;}
            .title{width:100%; font-size:0.28rem; margin: 0.1rem 0;}
            .shell-price{font-size: 0.24rem;color: #fff; display: inline-block; padding: 0.05rem 0.1rem;  border-radius: 0.05rem; margin: 0.1rem 0;
                        background-image: linear-gradient(to right,#f3a121,#f0ca1e);
            }
            .origin-price{font-size: 0.24rem; color: #f6b525}
        }
        
    }
</style>