<template>
	<view>
		
		
		<view class="h300"></view>
		<view class="tac">
			<view class=""><image class="w200 h200" src="/static/logo.png"></image></view>
			<view class="mt20">慈善超市</view>
		</view>
    <view class="w600 tac mt0auto  br1">
      <button class="mt50  br100 bcjbsys cfff" @click="btnLogin()">手机号快捷登录</button>
      
      <view class="c888 df mt25">
          <image :src=" (isYt ? '/static/imgs/b/yes.png' : '/static/imgs/b/no.png')" @click="isYt = !isYt" class="w38 h38"></image>
          <text style="color: #8B8B8B;" class="ml10">
            我已阅读并同意<text style="color:#D95657" @click="to_details('yonghu')">《用户协议》</text>
            及<text style="color:#D95657" @click="to_details('yinsi')">《隐私协议》</text>
          </text>
        </view>
    </view>
		
    <view>
      <view>
          <view class="uni-form-item uni-column bb1ccc pb10 mt20">
          	<input v-model="Login.ffM.loginname" class="uni-input fs33" placeholder="请输入手机号" maxlength="11" />
          </view>
      </view>
    </view>
		
	</view>
</template>

<script>
	export default {
		data() {
					return {
            dians:true,//防止点击
						isYt: false,//勾选协议
            //登录参数
            Login:{
              ffM:{
                loginname:'19525541007'
              }
            }
					}
				},
		onShow() {
			
		},
		onLoad(e) {
			
		},
		methods: {
      //跳转单页
			to_details(et){uni.navigateTo({url: "/pages/singlepage/singlepage?et="+et})},
      //登录逻辑
      btnLogin(){
        if(!this.dians){return;}
        this.dians=false;
        if (!this.isYt) {uni.showToast({title: '请阅读并同意协议',icon: "none",duration: 1000});this.dians=true;return;}
        this.conf.http('/api/pub/wxlogin', this.Login.ffM, res => {
          this.dians=true;
          if (res.data.error === '1') {uni.showToast({title: res.data.msg,icon: "none",duration: 1000});return;}
          uni.setStorageSync("LoginToken", res.data.data);
          if (res.data.error === '0') {
            uni.switchTab({url: '/pages/index/index'});
          }else{
            uni.showToast({title: res.data.msg,icon: "服务繁忙",duration: 1000});
          }
        })        
      }
		}
	}
</script>

<style lang="less" scoped>
	
</style>
