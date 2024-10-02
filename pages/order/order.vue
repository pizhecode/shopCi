<template>
	<view>
		 <viwe>
        收货地址
     </viwe>
     
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
                 <view>x 1</view>
               </view>
           </view>
       </view>
     </view>
     
     <view class="m20">
       <view>商品数量：3件</view>
       <view>合计：<text>￥19.9</text></view>
     </view>
     
      <uni-load-more :content-text="contentText" />
      
      <!-- 底部 -->
      <view class="pa b0 vw90 " style="margin-left: 5%;">
        <view class="df aic pb35 jcsa">
            <view class="">￥19.9</view>
            <fui-button type="danger" radius="96rpx" width="350rpx" height="70rpx" @click="btnGoPay()">立即支付</fui-button>
        </view>
      </view>
	</view>
</template>

<script>
	import fuiButton from "@/components/firstui/fui-button"
	export default {
	  components:{ fuiButton },
		data() {
			return {
				 contentText: {contentdown: '温馨提示，以上商品支持积分支付',},
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			btnGoPay(){
        this.conf.toPathDt("/pages/order/pay")
      }
		}
	}
</script>

<style lang="less" scoped>
	
</style>
