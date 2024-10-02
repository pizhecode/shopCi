<template>
	<view>
		
		
		<view>
      <view class="pl30 pr30 pt30" v-if="isLoggedIn()">
      	<view class="df">
      		<view class="mr30"><image class="w180 h180" src="/static/logo.png"></image> </view>
      		<view>
      			<view class="fs32 fwb">大宝贝儿</view>
      			<view class="mt10 df">
      				<view class="mr10"><image class="w50 h50 brb50" src="/static/logo.png"></image></view>
      				<view><image class="w50 h50 brb50" src="/static/logo.png"></image></view>
      			</view>
      			<view class="mt20">12222222222</view>
      		</view>
      	</view>
      </view>
      <view v-else @click="conf.toPathDt('/pages/login/login')" class="tac fs30 mt50">点击登录</view>
    </view>
		
		<view class="pl30 pr30 pt30" v-if="isShangHu">
			<view class="fs32">商户</view>
			<view class="mt10">
				<view class="df">
					<view class="mr30"><image class="w140 h140" src="/static/logo.png"></image> </view>
					<view class="wb100">
						<view class="fs28">大宝贝便利店</view>
						<view class="mt10">
							店铺描述店铺描述店铺描述
						</view>
						<view class="mt10 df jcfe">
							<text class="b1000 br40 fs24 pl15 pr15" @click="btnManageShop()">管理我的店铺</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="pl30 pr30 pt30" >
			<view class="fs32">财务</view>
			<view class="df jcsb mt20">
				<view class="bcccc w330 h100 tac lh100" @click="conf.toPathDt('/pages/my/mypurse/mypurse')">
					积分钱包
				</view>
				<view class="bcccc w330 h100 tac lh100" @click="conf.toPathDt('/pages/my/mypurse/trading')">
					消费记录
				</view>
			</view>
		</view>
		
		<view class="pl30 pr30 pt30">
			<view class="fs32">订单</view>
			<view class="df jcsb mt20">
				<view @click="conf.toPathDt('/pages/donate/donateDD')">捐赠订单</view>
				<view @click="conf.toPathDt('/pages/my/myorder/myorder')">商品订单</view>
				<view @click="conf.toPathDt('/pages/my/myorder/refund')">退款/售后</view>
			</view>
		</view>
		
		<view class="h30"></view>
		<view class="pl30 pr30 pt30">
			<view class="fs32">服务与工具</view>
			<view class="mt40">
				<view class="df jcsb bb1ccc mt30 pb30" @click="conf.toPathDt('/pages/my/myshare/myShareCode')">
					<view>我的分享码</view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb bb1ccc mt30 pb30" @click="conf.toPathDt('/pages/my/myFriend/myFriend')">
					<view>我的好友</view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb bb1ccc mt30 pb30" @click="conf.toPathDt('/pages/my/myaddress/myaddress')">
					<view>地址管理</view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb bb1ccc mt30 pb30" @click="conf.toPathDt('/pages/sys/lamessage')">
					<view>留言反馈</view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb bb1ccc mt30 pb30">
          <!-- <button open-type="contact" bindcontact="handleContact" session-from="sessionFrom">在线客服</button> -->
          <view class="contact-view" bindtap="handleContact">
              联系客服
          </view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb bb1ccc mt30 pb30" @click="to_details(3306)">
					<view>关于我们</view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb bb1ccc mt30 pb30" @click="conf.toPathDt('/pages/sys/set')">
					<view>系统设置</view>
					<view><image class="w30 h30" src="../../static/imgs/icon/ic_you_h.png"></image></view>
				</view>
				<view class="df jcsb mt30 pb30">
					<view @click="baibai()">退出登录</view>
				</view>
			</view>
		</view>
		
		<view class="h40"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShangHu:true
			}
		},
		onShow() {
      
		},
		onLoad(e) {
			this.isLoggedIn();
		},
		methods: {
      isLoggedIn() {
        const token = uni.getStorageSync("LoginToken");
        return token && token.length > 4; // 如果 token 存在且长度大于 4，则返回 true
      },
      //退出登录
      baibai() {uni.showModal({title: '提示',content: '确定退出么?',success: function(res) {if (res.confirm) {uni.setStorageSync('LoginToken', '');uni.redirectTo({url: "/pages/login/login",});}}});},
      //管理店铺
      btnManageShop(){
        uni.navigateTo({url: '/pages/merchantmanagement/merchantmanagement',})
      },
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
      //关于我们
      to_details(et){uni.navigateTo({url: "/pages/singlepage/singlepage?et="+et})},
		}
	}
</script>

<style lang="less" scoped>
	
</style>
