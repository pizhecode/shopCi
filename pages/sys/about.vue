<template>
	<view class="container">
		<image class="success-icon" src="/static/logo.png" alt="Success Icon"></image>
		<text class="success-message">亲爱的用户！</text>
		<text class="info-message">欢迎来到我们的慈善超市！我们致力于通过销售优质商品，支持社区发展和公益事业。我们的超市不仅提供丰富的商品选择，还将部分收入用于帮助有需要的人群和项目。

    </text>
    <view class="df aic jcsb vw80">
      <button class="back-button">用户协议</button>
      <button class="back-button">隐私协议</button>
    </view>
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
      
		}
	}
</script>

<style lang="less" scoped>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 70vh;
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
