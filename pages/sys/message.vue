<template>
	<view class="container">
		<image class="success-icon" src="/static/logo.png" alt="Success Icon"></image>
		<text class="success-message">亲爱的用户！</text>
		<text class="info-message">感谢您选择我们的服务！我们为您提供了两种便捷的联系客服方式：您可以拨打我们的电话客服，与专业人员进行一对一的沟通，或者通过小程序客服快速解决您的问题。无论您选择哪种方式，我们都将竭诚为您服务，确保您的需求得到及时满足。如果有任何疑问，请随时联系我们！祝您生活愉快！
    </text>
    <view class="df aic jcsb vw80">
      <button class="contact-view back-button" bindtap="handleContact">在线客服</button>
      <button class="back-button" @click="btn_phone()">服务热线</button>
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
      btn_phone() {
            uni.makePhoneCall({
                 phoneNumber: "19525541007"
              });
          
            //   this.conf.http('/api/sysinit/getKeyByVal', {key: 'kefudianhua'}, res => {
            //   this.dataList = res.data.data.vval;
            
            //   });
      },
      handleContact() {
          wx.openCustomerServiceChat({
              // 可以根据需要设置 sessionFrom 和其他参数
              sessionFrom: 'sessionFrom',
              success(res) {
                  console.log('联系客服成功', res);
              },
              fail(err) {
                  console.error('联系客服失败', err);
              }
          });
      },
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
