<template>
	<view class="pgcs">
		<view class="p30">
			<view class="p30 bcfff br14 df aic">
				<view class="csys fs28 mr20">收货人</view>
				<input type="text" v-model="ffm.name" placeholder="请填写收货人姓名" class="c999 fs28" />
			</view>
			<view class="pl30 pr30 pb30 bcfff br14 df aic">
				<view class="csys fs28 mr20">手机号</view>
				<input type="text" v-model="ffm.phone" maxlength="11" placeholder="请填写收货人手机号" class="c999 fs28" />
			</view>
			<view class="pl30 pr30 pb30 bcfff br14 df aic">
				<view class="csys fs28 mr20">所在地区</view>
				<input type="text" v-model="ffm.city" placeholder="省区县/乡/镇等" class="c999 fs28" />
			</view>
			<view class="pl30 pr30 pb30 bcfff br14 df aic">
				<view class="csys fs28 mr20">详细地址</view>
				<input type="text" v-model="ffm.adress" placeholder="街道/楼牌号等" class="c999 fs28" />
			</view>
		</view>
    
    
    <view class="pf b0 vw100">
      <fui-button>保存</fui-button>
    </view>
	</view>
</template>

<script>
   import fuiButton from "@/components/firstui/fui-button.vue"
	export default {
     components:{fuiButton},
		data() {
			return {
				isClick:true,
				usersInfo:'',
				ffm:{
					name:'',
					phone:'',
					city:'',
					adress:'',
				},
			}
		},
		onLoad() {
			// this.conf.getToken(res => {
			// 	this.usersInfo = res;
			// }, e => {
			// 	if (!e) {
			// 		this.usersInfo = '';
			// 		uni.navigateTo({url: "/pages/login/login",});
			// 	}
			// });
		},
		onShow() {

		},
		methods: {
			adradd(){
				if(!this.isClick){return;}
				this.isClick=false;
				this.conf.http('/api/adr/add',this.ffm, res => {
					this.conf.uaMsg(res.data.msg);
					if(res.data.error=='1'){ this.isClick=true; return;}
					this.conf.toBack();
				});
			},
		}
	}
</script>

<style scoped lang="scss">

</style>