<template>
	<view>
     <view class="m20">
       <view class="df">
           <view class="">
             <image src="/static/logo.png" mode="" class="w150 h150"></image>
           </view>
           <view class="w400 h150 ml35 df fdc jcsb">
               <view>苹果名字</view>
               <view>xxxx描述</view>
               <view>规格</view>
               <view class="df aic jcsb">
                 <view class="cf00">￥9.9</view>
                 <uni-number-box @change="changeValue($event, 12)" v-model="NumBox" />
               </view>
           </view>
       </view>
     </view>
     <!-- 清空购物车 -->
    <view class="mt45" @click="btnCleanCar()">
       <uni-load-more :content-text="contentText" />
    </view>
     
     <!-- 底部 -->
     <view class="pa b0 vw90 " style="margin-left: 5%;">
       <view class="df aic pb35 jcsa">
           <view class="">共3件商品</view>
           <fui-button type="danger" radius="96rpx" width="350rpx" height="70rpx" @click="btnGoOrder()">￥9.9 去结算</fui-button>
       </view>
     </view>
	</view>
</template>

<script>
   import fuiButton from "@/components/firstui/fui-button/fui-button"
	export default {
    components:{ fuiButton },
		data() {
			return {
				 NumBox:0,
         contentText: {contentdown: '清空购物车',},
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			changeValue(value,id) {
				 console.log('返回数值：', value,id);
         if(value == 0){
           this.conf.uaMsg(`删除id为${id}的数据`)
         }
			},
      //清空购物车
      btnCleanCar(){
        this.conf.uaMsg("清空购物车成功")
      },
      //btn
      btnGoOrder(){
         this.conf.toPathDt("/pages/order/order")
      }
     
		}
	}
</script>
<style lang="scss">
	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>