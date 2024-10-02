<template>
	<view>
		
		<view class="bcsys cfff">
			<view class="p20 df aic">
				<view class="df aic">
					<view><image class="w100 h50 bcfff br20" src="/static/logo.png"></image> </view>
					<view class="ml20 w590"><view class="bcrd2 br50 pl20 pr20 df aic">
						<image class="w40 h40 mr5" src="/static/imgs/icon/so_fff.png"></image>
						<input class="ceee p10 wb100" placeholder="请输入关键词" placeholder-class="cddd fs28" @click="toSo()" />
					</view> </view>
				</view>
			</view>
		</view>
		  
	</view>
</template>

<script>
	export default {
		props: {
			AlertPosition: { type: String, default: 'center' },
		},
		data() {
			return {
				soso:{},
			};
		},
		methods: {
			toSo(){ uni.navigateTo({url:'/pages/so/so'}); },
		}
	}
</script>

<style lang="less" scoped>
	
</style>
