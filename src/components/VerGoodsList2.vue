<template>
    <div>
        <div class="zq-waterfall">
            <div class="zq-waterfall-left">
                <!-- <div class="box" v-for="(item,index) in itemsA" :key="index">
                    <img :src="item.img" alt="">
                    <div class="desc text-ellipsis" v-if="item.desc" v-text="item.desc"></div>
                    <div class="info">
                        <p class="tag" v-if="item.tag"  v-text="item.tag"></p>
                        <p class="title text-ellipsis" v-text="item.title">米够如意三宝米够如意三宝米够如意三宝米够如意三宝</p>
                        <p class="shell-price">贝壳价:￥150</p>
                        <p class="origin-price">集市价:￥800</p>
                    </div>
                </div> -->
                <div class="box" >
                    <img src="@/assets/imgs/ic_default.png" alt="">
                    <div class="desc text-ellipsis">描述豆腐豆腐豆腐</div>
                    <div class="info">
                        <p class="tag">精品</p>
                        <p class="title text-ellipsis">米够如意三宝米够如意三宝米够如意三宝米够如意三宝</p>
                        <p class="shell-price">贝壳价:￥150</p>
                        <p class="origin-price">集市价:￥800</p>
                    </div>
                </div>
            </div>
            <div class="zq-waterfall-right">
                <div class="box" v-for="(item,index) in itemsB" :key="index">
                    <img :src="item.img" alt="">
                    <div class="desc text-ellipsis" v-if="item.desc" v-text="item.desc"></div>
                    <div class="info">
                        <p class="tag" v-if="item.tag"  v-text="item.tag"></p>
                        <p class="title text-ellipsis" v-text="item.title">米够如意三宝米够如意三宝米够如意三宝米够如意三宝</p>
                        <p class="shell-price">贝壳价:￥150</p>
                        <p class="origin-price">集市价:￥800</p>
                    </div>
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
                ],
                itemsA:[],
                itemsB:[]
            }
        },
        computed: {},
        mounted: function () {
            this.getData()
        },
        methods: {
            // 方法
            getImg(url, callback){
                var img = new Image();
                img.src = url;
                //如果图片被缓存，则直接返回缓存数据
                if(img.complete){
                    /* callback(img.width, img.height); */
                    callback(img.width, img.height, Number(img.height)/Number(img.width));
                }else{
                    //完全加载完毕的事件
                    img.onload = function(){
                        /* callback(img.width, img.height); */
                        callback(img.width, img.height, Number(img.height)/Number(img.width));
                    }
                }
            },
            getData(){
                // 加载完页面执行的函数
                let boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
                let boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
                let that = this;
                for(let val of this.items){
                    that.getImg(val.img,function (w,h,r) {
                        console.log(w,h,r)
                        boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
                        boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
                        console.log("A的高度："+ boxA)
                        console.log("B的高度："+ boxB)
                        if(boxA>boxB){
                            that.itemsB.push(val)
                        }else{
                            that.itemsA.push(val)
                        }
                    })
                }
              
               
            }
        },
        components: {
            // 组件
        }
    }
</script>
<style scoped lang="less">
    .zq-waterfall{ width: 100%;padding: 0 0.1rem; 
       
        .box{
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
        .zq-waterfall-left{
            width: 3.52rem;
            float:left;
        }
        .zq-waterfall-right{
            width: 3.52rem;
            float: right;
        }
    }
</style>