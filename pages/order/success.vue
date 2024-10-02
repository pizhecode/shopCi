<template>
	<view class="container">
		<image class="success-icon" src="/static/logo.png" alt="Success Icon"></image>
		<text class="success-message">支付成功！</text>
		<text class="info-message">感谢您的支持，我们会尽快处理您的订单。</text>
    <view class="df aic jcsb vw80">
      <button class="back-button" @click="goIndex()">返回首页</button>
      <button class="back-button" @click="goHome">查看订单</button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onShow() {},
		onLoad(e) {},
		methods: {
			goIndex() {uni.reLaunch({url: '/pages/index/index'});},
      goIndex2() {uni.reLaunch({url: '/pages/my/myorder/myorder'});}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 50vh;
		background-color: #f5f5f5;
		text-align: center;
	}

	.success-icon {
		width: 100px;
		height: 100px;
		margin-bottom: 20px;
	}

	.success-message {
		font-size: 24px;
		color: #4caf50;
		margin-bottom: 10px;
		font-weight: bold;
	}

	.info-message {
		font-size: 16px;
		color: #666;
		margin-bottom: 30px;
	}

	.back-button {
		background-color: #007aff;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		font-size: 16px;
	}

	.back-button:hover {
		background-color: #005bb5;
	}
</style>
