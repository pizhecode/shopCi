<template>
	<view>
      <fui-textarea flexStart label="留言" placeholder="留言内容"></fui-textarea>
      <fui-input label="联系电话(选填)" labelSize="20rpx" size="20rpx" borderTop placeholder="请输入联系电话" maxlength="11"></fui-input>
      <fui-input label="联系邮箱(选填)" labelSize="20rpx" size="20rpx" :bottomLeft="0" placeholder="请输入联系邮箱"></fui-input>
      <view class="pf b0 vw100">
        <fui-button>提交</fui-button>
      </view>
	</view>
</template>

<script>
	import fuiTextarea from "@/components/firstui/fui-textarea.vue"
  import fuiInput from "@/components/firstui/fui-input.vue"
  import fuiButton from "@/components/firstui/fui-button.vue"
	export default {
		components:{fuiTextarea,fuiInput,fuiButton},
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
