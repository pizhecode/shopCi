<template>
	<view>
		
    <view class="contact-view" bindtap="handleContact">
        联系客服
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
			//联系客服
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
	
</style>
