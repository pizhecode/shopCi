<template>
	<view>
		<view class="m40 df aic">
      <view>
        <image src="/static/logo.png" mode="" class="w200 h200"></image>
      </view>
      <view class="df jcsa fdc h200 ml50">
        <view class="fs40">慈善超市</view>
        <view class="cff0">慈善标签</view>
      </view>
    </view>
    <fui-input label="地址" borderTop disabledStyle disabled v-model="ffM.add"></fui-input>
    <fui-input label="电话" :bottomLeft="0" disabledStyle disabled v-model="ffM.Phone"></fui-input>
    
    <view class="pf b0 vw100">
      <fui-button @click="conf.toPathDt('/pages/merchantmanagement/merchantInfoFix')">修改资料</fui-button>
    </view>
	</view>
</template>

<script>
  import fuiInput from "@/components/firstui/fui-input.vue"
	import fuiButton from "@/components/firstui/fui-button.vue"
	export default {
	  components:{fuiButton,fuiInput},
		data() {
			return {
				ffM:{
          add:'郑州市',
          Phone:'19525541007'
        }
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
