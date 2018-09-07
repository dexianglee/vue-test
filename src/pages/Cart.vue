<template>
  <div class="cart bg-gray">
    <!--顶部-->
		<div class="top-bar cart-top-bar">
			<router-link to="" class="back text-left">  <img src="@/assets/imgs/back.png" alt="返回图标" /> </router-link>
			<h3 class="title">购物车</h3>
			<a href="javascript:;" class="action-sheet text-right" v-text="isEdit?'编辑':'完成'" @click="isEdit=!isEdit"></a>
		</div>
    	<p class="tip" v-if="showTopTip"><span> 温馨提示：加油站商品和精选商品不可同时结算哦~ </span> <img src="@/assets/imgs/icon_shanchu1.png"  @click="showTopTip=!showTopTip"/> </p>
    	<!--内容区-->
		<div class="cart-content">
			<!--购物车列表-->
			
			<!-- 加油站商品 -->
			<div class="goods-sort bg-white" v-if="gasGoods.length">
				<div class="sort-title">
					<div class="check-box">
						<input type="checkbox" name="" id="checkbox1" value="" />
						<label class="copy-checkbox" for="checkbox1"></label>
					</div>
					<img src="@/assets/imgs/icon_gas_goods.png" alt="">
					<span>加油站商品</span>
				</div>
				<ul class="cart-list ">
					<li>
						<div class="check-box">
							<input type="checkbox" name="" id="checkbox2" value="" />
							<label class="copy-checkbox" for="checkbox2"></label>
						</div>
						<div class="detail">
							<div class="img">
								<img src="@/assets/imgs/ic_default.png" alt="" />
							</div>
							<div class="info">
								<div class="title-type" v-if="isEdit">
									<h4>怀抱休闲椅组怀抱休闲椅组怀抱休闲椅组怀抱休闲椅组怀抱休闲椅组</h4>
									<p class="type">灰色</p>
								</div>
								<p class="reselect" v-if="!isEdit">
									<span>已选择：灰色</span><img src="@/assets/imgs/icon_drop-down.png" alt="" />
								</p>
								<div class="total">
									<div class="price">
										<span class="shell_price">贝壳价 ￥ 7700</span>
										<span class="origin_price">集市价 ￥ 7700</span>
									</div>
									
									<ul class="action">
										<li class="reduce">-</li>
										<li class="num"><input type="num" value="1"></li>
										<li class="plus">+</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 普遍商品 -->
			<div class="goods-sort bg-white" v-if="normalGoods.length">
				<div class="sort-title">
					<div class="check-box">
						<input type="checkbox" name="" id="checkbox3" value="" />
						<label class="copy-checkbox" for="checkbox3"></label>
					</div>
					<img src="@/assets/imgs/icon_normal_goods.png" alt="">
					<span>精选商品</span>
				</div>
				<ul class="cart-list ">
					<li>
						<div class="check-box">
							<input type="checkbox" name="" id="checkbox4" value="" />
							<label class="copy-checkbox" for="checkbox4"></label>
						</div>
						<div class="detail">
							<div class="img">
								<img src="@/assets/imgs/ic_default.png" alt="" />
							</div>
							<div class="info">
								<div class="title-type" v-if="isEdit">
									<h4>怀抱休闲椅组怀抱休闲椅组怀抱休闲椅组怀抱休闲椅组怀抱休闲椅组</h4>
									<p class="type">灰色</p>
								</div>
								<p class="reselect" v-if="!isEdit">
									<span>已选择：灰色</span><img src="@/assets/imgs/icon_drop-down.png" alt="" />
								</p>
								<div class="total">
									<div class="price">
										<span class="shell_price">贝壳价 ￥ 7700</span>
										<span class="origin_price">集市价 ￥ 7700</span>
									</div>
									<ul class="action">
										<li class="reduce">-</li>
										<li class="num"><input type="num" value="1"></li>
										<li class="plus">+</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<!-- 空购物车 -->
			<div class="cart-no-data bg-gray text-center" v-if="gasGoods.length===0 && normalGoods.length===0">
				<img src="@/assets/imgs/icon_nocart.png" alt="" />
				<p>购物车空空如也</p>
				<a href="#" class="btn">去添加</a>
			</div>
			
			<!--猜你喜欢-->
			<div class="guess-like bg-white">
				<h5 class="text-center">— 您可能还想买 —</h5>
				<hor-goods-list></hor-goods-list>
			</div>
		</div>

		

		<!-- 结算栏 -->
		<div class="bar-botton-tool bg-white" >
			<div class="check-box">
				<input type="checkbox" name="" id="checkedAll" value="" />
				<label class="copy-checkbox" for="checkedAll"></label>
				<span>全选</span>
			</div>
			<div class="action">
				<span class="price" v-show="isEdit">￥ 3510</span>
				<button type="button" class="active"  v-show="isEdit" @click="payWay">结算</button>
				<button type="button" class="active" v-show="!isEdit">删除(1)</button>
			</div>
		</div>

		<!-- 遮罩 -->
		<div class="mask" v-if="showMask" @click="showMask=!showMask">
			<!-- 选择支付方式 现金还是贝壳 -->
			<div class="modal pay-way text-center" @click.stop='stopBubble'>
				<h4 class="title">请选择购买方式</h4>
				<p class="desc">用贝壳买更划算、更省钱!</p>
				<button type="button" class="btn"  @click="shellBuy">贝壳购买</button>
				<button type="button" class="btn"  @click="cashBuy">现金购买</button>
			</div>
		</div>
  </div>
</template>
<script>
import HorGoodsList from '@/components/HorGoodsList'
import Global from '@/components/Global'
export default{
  name: 'Cart',
  data () {
    return {
		showTopTip: true,							// 是否显示顶部提示
		isEdit: true,							// 是否处于编辑状态
		showMask: Global.showMask,				// 是否显示遮罩
		showPayWay: false,						// 是否显示 购买方式 弹框
		showTip: false,						// 是否显示 不能同时购买提示 弹框
		gasGoods:[
			{id: 23, name:'我是商品名字' ,shell_price: 352 ,origin_price: 523 ,num: 2},
			{id: 24, name:'我是商品名字1' ,shell_price: 421 ,origin_price: 783 ,num: 1}
		],
		normalGoods:[
			{id: 25, name:'我是商品名字' ,shell_price: 352 ,origin_price: 523 ,num: 2},
			{id: 26, name:'我是商品名字1' ,shell_price: 421 ,origin_price: 783 ,num: 1}
		]
    }
  },
  components:{
    HorGoodsList
  },
  methods:{
	  shellBuy(){
		  console.log('shell')
	  },
	  cashBuy(){
		  console.log('cash')
	  },
	  stopBubble(){
		 console.log('没有别的意思，就是阻止冒泡而已')
	  },
	  payWay(){
		  this.showMask = !this.showMask;
		  this.showPayWay = !this.showPayWay;
		 
	  }
  }
}
</script>
<style lang="less" scoped>
	.cart{height:100%;}
   .top-bar{ display: flex; justify-content: space-between;align-items: center; font-size: 0.26rem; padding: 0.2rem 0.3rem;
          height: 0.9rem;width: 100%;  background: #fff;
          // position: fixed; top: 0;z-index: 5;
    h3{font-weight: 400; font-size: 0.36rem;}
    .back,.action-sheet{ width: 1.3rem;}
	.back img{width: 0.26rem; height: 0.48rem;}
	.action-sheet{color: #333;}
	} 
	.tip{background: #fffbf6; font-size: 0.26rem; color:#666; padding: 0.2rem 0.3rem; display: flex; justify-content: space-between; align-items: center;
		img{width: 0.3rem;}
	}

	.goods-sort{border-radius: 0.1rem; margin-bottom: 0.3rem;}
	.sort-title{display:flex; align-items: center; padding:0.3rem 0; border-bottom:1px solid #e5e5e5;
		img{width: 0.3rem;margin-right: 0.1rem;}
		span{font-size: 0.28rem; color:#666;}
	}

	.check-box{ position: relative; padding-left: 0.2rem; padding-right: 0.2rem; height: 0.38rem;
        input{ position: absolute; clip: rect(0, 0, 0, 0);}
        input[type="checkbox"] + label {
            background: url(../assets/imgs/icon_nottochoose.png) no-repeat;
            background-size:cover ;  
            display: inline-block;
            width: 0.38rem;
            height: 0.38rem;
        }
        input[type="checkbox"]:checked + label {
            background-image: url(../assets/imgs/icon_choice.png);
        }
    }

	.cart-content{padding: 0.3rem;}
	.cart-list{width:100% ;margin:0 auto;
    li{ display: flex; align-items: center; width: 100%; 
        &:last-child .detail{border-bottom: none;}
    }
    
    .detail{ display: flex; border-bottom: 1px solid #ddd;padding-top: 0.2rem; padding-bottom: 0.2rem ;
        .img{width: 1.68rem; height: 1.68rem; margin-right: 0.1rem;
            img{width: 100%; height: 100%;}
        }
        .info{width: 4.2rem; display: flex; flex-direction: column; justify-content: space-between;
            .title-type{display: block;}
            h4{font-size: 0.29rem;color: #666; width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
                margin-bottom: 0.1rem;
            }
            .type{font-size: 0.24rem; color: #999;}
            .reselect{font-size: 0.26rem; color:#999 ;  justify-content: flex-end; align-items: center;
                img{width: 0.24rem; margin-left: 0.1rem;}
            }
        }
        .total{display: flex;justify-content: space-between; align-items:center;  width: 100%; font-size: 0.24rem; 
			.price{display: flex; flex-direction:column; font-size: 0.226rem;}
			.shell_price{ color: #f49822;margin-bottom: 0.1rem;}
			.origin_price{ color: #333;}
            .action{display: flex; height: 0.5rem;
				li{border: 1px solid #999; display: flex;}
				.reduce{border-top-left-radius:0.08rem ; border-bottom-left-radius: 0.08rem;  padding:0.05rem 0.3rem; border-right: none;}
				.num {
					input{height: 100%; border: none;width: 0.7rem; text-align: center;}
				}
				.plus{border-top-right-radius:0.08rem ; border-bottom-right-radius: 0.08rem;  padding:0.05rem 0.3rem; border-left: none;}
            }
        }
    }
}

.guess-like{ padding-bottom: 2rem;
	h5{font-size:0.3rem; font-weight: 400;padding:0.2rem 0 0.4rem; }
}

.cart-no-data{width: 100%;margin:0 auto;  padding-top: 0.4rem; padding-bottom: 0.6rem;
    img{width: 2.88rem;}
    p{font-size:  0.28rem; color: #999; margin: 0.1rem auto 0.5rem;}
    .btn{font-size: 0.26rem; color:#f49822 ; border: 1px solid #f49822; border-radius: 0.1rem; padding: 0.1rem 0.2rem;}
}

.bar-botton-tool{
 	position: fixed; bottom: 1.07rem; z-index: 3;
     width: 100%;border-top: 1px solid #ddd; display: flex;justify-content: space-between;align-items: center;
    .check-box{ position: relative; padding-left: 0.2rem; padding-right: 0.2rem; display: flex; align-items: center;
            input{ position: absolute; clip: rect(0, 0, 0, 0);}
            input[type="checkbox"] + label {
                background: url(../assets/imgs/icon_nottochoose.png) no-repeat;
                background-size:cover ;  
                display: inline-block;
                width: 0.38rem;
                height: 0.38rem;
            }
            input[type="checkbox"]:checked + label {
                background-image: url(../assets/imgs/icon_choice.png);
            }
            span{font-size: 0.29rem; color:#999 ; margin-left: 0.2rem;}
        }
    .action{
        .price{font-size: 0.29rem; color: #f49822;}
        button{height: 100%; padding: 0.3rem 0.5rem; color: #fff; background: #999; border: none;}
        button.active{background: #ffa42f;  border: none;}
    }
	
}


.pay-way{width: 5rem; padding: 0.6rem;
	.title{font-size: 0.3rem; color: #333; }
	.desc{font-size: 0.24rem; color: #666; margin-top: 0.15rem;}
	.btn{margin-top: 0.3rem; width: 100%; padding: 0.25rem 0; font-size: 0.28rem; border-radius: 1rem;
		&:first-of-type{border: 1px solid #f49822;background: #f49822; color: #fff;}
		&:last-of-type{border: 1px solid #f49822; color: #f49822; background:#fff;}
	}
}
</style>