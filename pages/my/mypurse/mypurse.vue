<template>
	<view>
       <view class=" tac mt40">
         <view class="fs32">积分余额<text>12</text></view>
        <view class="mt60 fs30">
            <view class="df aic jcc">
                <view class="mr50">累计收入:<text>12</text></view>
                <view class="ml50">累计支出:<text>12</text></view>
            </view>
        </view>
       </view>
       
       <fui-tabs :tabs="tabs" @change="Select"></fui-tabs>
       
       
       <view class="m30">
          <view class="df aic jcsb">
             <view>捐赠兑换</view>
             <view class="cf00">+56.00</view>
          </view>
          <view class="df aic jcsb">
             <view>捐赠编号<text>132312312</text></view>
             <view>2424123123</view>
          </view>
       </view>
	</view>
</template>

<script>
  import fuiTabs from "@/components/firstui/fui-tabs.vue"
	export default {
    components:{fuiTabs},
		data() {
			return {
				tabs: ['全部','收入','支出'],
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			Select(value){
			  console.log(value);
			},
		}
	}
</script>

<style lang="less" scoped>
	
</style>
