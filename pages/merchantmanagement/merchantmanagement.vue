<template>
	<view>
        <view class="df aic jcsa m50">
              <view class="tac">
                  <view>0</view>
                  <view>今日收入/元</view>
              </view>
              <view class="tac">
                  <view>0</view>
                  <view>今日单量/单</view>
              </view>
        </view>
        
        <fui-list>
         
        	<fui-list-cell arrow @click="conf.toPathDt('/pages/merchantmanagement/merchantType')"><text>商品分类</text></fui-list-cell>
          <fui-list-cell arrow @click="conf.toPathDt('/pages/merchantmanagement/merchantGoods')"><text>商品管理</text></fui-list-cell>
          <fui-list-cell arrow><text>订单管理</text></fui-list-cell>
          <fui-list-cell arrow><text>退货/售后</text></fui-list-cell>
          <fui-list-cell arrow @click="conf.toPathDt('/pages/merchantmanagement/merchantPurse')"><text>钱包管理</text></fui-list-cell>
          <fui-list-cell arrow @click="conf.toPathDt('/pages/merchantmanagement/merchantInfo')"><text>店铺资料</text></fui-list-cell>
        </fui-list>
	</view>
</template>

<script>
	import fuiList from "@/components/firstui/fui-list.vue"
	import fuiListCell from "@/components/firstui/fui-list-cell.vue"
	export default {
	  components:{fuiList,fuiListCell},
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
