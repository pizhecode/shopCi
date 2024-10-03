<template>
	<view>
		<fui-list>
			<fui-list-cell arrow @click="conf.toPathDt('/pages/sys/information')"><text>个人资料</text></fui-list-cell>
		  <fui-list-cell arrow @click="conf.toPathDt('/pages/sys/mm')"><text>支付密码设置</text></fui-list-cell>
       <fui-list-cell arrow><text>支付密码修改</text></fui-list-cell>
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
