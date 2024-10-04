<template>
	<view>
      <view class="tac p50">
        <view class="fs50">100.00</view>
        <view class="fs25 c888 mt30 mb30">当前余额(元)</view>
        <fui-button type="danger" radius="96rpx" btnSize="mini"  style="margin: 0 auto;" @click="conf.toPathDt('/pages/merchantmanagement/ti/ti')">提现</fui-button>
      </view>
      
      <view>
          <uni-section title="余额明细" type="line">
           <view class="p30">
              <view class="df aic jcsb">
                  <view>销售收入</view>
                   <view>+110</view>
              </view>
              <view class="df aic jcsb">
                    <view>时间</view>
                     <view>订单编号</view>
              </view>
              <view class="df aic jcfe c999" @click="conf.toPathDt('/pages/merchantmanagement/merchantXX')">点击产看详情</view>
           </view>
          
          </uni-section> 
      </view>
	</view>
</template>

<script>
  import fuiButton from "@/components/firstui/fui-button.vue"
	export default {
    components:{fuiButton},
		data() {
			return {
				
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	
</style>
