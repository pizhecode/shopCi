<template>
	<view class="pgcs">
		<view class="p40">
			<view class="tac fwb fs50 csys2">￥999/积分</view>
			<view class="tac mt20">支付剩余时间：00:{{ countdown }}</view>
			<view class="" v-for="(item,index) in dataList" :key="index" @click="btn_dataList_show(index)">
				<view style="margin: 20rpx auto;" class="vw86 fs39 pt10" v-if="index==dataList_forIndex">
					<view class="df jcsb mt25 bcfff p30 br20">
						<view class="df">
							<image :src="item.img" class="w50 h50 mr12"></image>
							<view>{{item.name}}</view>
						</view>
						<image src="/static/imgs/b/yes.png" class="w50 h50"></image> 
					</view>
				</view>
				<view style="margin: 20rpx auto;" class="vw86 fs39 pt10" v-else>
					<view class="df jcsb mt25 bcfff p30 br20">
						<view class="df">
							<image :src="item.img" class="w50 h50 mr12"></image>
							<view>{{item.name}}</view>
						</view>
						<image src="/static/imgs/b/no.png" class="w50 h50"></image> 
					</view>
				</view>
			</view>
      
      
      <view  @click="conf.toPathDt('/pages/order/success')">
        <button>点我测试成功</button>
      </view>
			
			
			<view class="pf  br55 w500 h80 df jcsa aic bcsys2" style="left: 50%;;transform: translateX(-50%);bottom: 20rpx;" @click="btnWxPay()" v-if='dataList[dataList_forIndex].name=="微信支付"'>
				<view class="tac p5 cfff">{{dataList[dataList_forIndex] ? dataList[dataList_forIndex].name : ''}}￥{{pg.price}}</view>
			</view>	
			
			<view class="pf  br55 w500 h80 df jcsa aic bcsys2" style="left: 50%;;transform: translateX(-50%);bottom: 20rpx;" @click="btn_mima()"   v-else>
				<view class="tac p5 cfff" >{{dataList[dataList_forIndex] ? dataList[dataList_forIndex].name : ''}}{{pg.goodsintegral}}积分</view>
			</view>	
			
		</view>
		<!-- 弹 -->
		<openAlert ref="pays" :AlertClass="3" AlertPosition="center">
				<view class="pf b0 l0 wb100 hb50 bcfff br14">
					<view>
						<view class="tac fs35 fwb mt10">
							请输入交易密码
						</view>
						<view class="pb10 w500 br14 tac" style="margin: 20rpx auto;background-color: antiquewhite">
							<input v-model="ffM.jymm" class="uni-input fs33 c999" type="text" placeholder="请输入交易密码"/>
						</view>
						<view class="mt30">
							<view @click="btn_ok()" class=" br40 w500 h70 df jcsa aic bcsys2" style=";margin: 0 auto;">
								<view class="tac p5 cfff">确定</view>
							</view>
						</view>
					</view>
				</view>
			</openAlert>
	</view>
</template>

<script>
	import openAlert from '@/components/open-alert/open-alert.vue';
	export default {
		components: {
			openAlert,
		},
		data() {
			return {
				payList:[],
				payList2:[],
				dataList:[],
				dataList_forIndex: 0, //选中id
				usersInfo:'',
				pg:{
					price:'',
					goodsintegral:'',
				},
				countdown: '30:00',
				ffM:{
					orderNum:'',//订单号
					jymm:'',//交易密码
				},
				ffM2:{
					orderno:'',//订单号
				},
				fff:{orderno:'',},
				isShouQuan:false,
			}
		},
		onLoad(e) {
			if(e.ordernumber!=undefined&&e.ordernumber!=null&&e.ordernumber!=''){
				this.ffM.orderNum=e.ordernumber;
				this.ffM2.orderno=e.ordernumber;
			}
			if(e.price!=undefined&&e.price!=null&&e.price!=''){
				this.pg.price=e.price;
			}
			if(e.jf!=undefined&&e.jf!=null&&e.jf!=''){
				this.pg.goodsintegral=e.jf;
			}
			this.getList();
			
			
			this.conf.getToken(res => {
				if(res.weixinopenid==''){
					this.isShouQuan=false;
				}else{
					this.isShouQuan=true;
					// this.pays2Ok();
				}
			}, e => {});
			
			
		},
		onShow() {
			this.conf.getToken(res => {
				this.usersInfo = res;
			}, e => {
				if (!e) {
					this.usersInfo = '';
				}
			});
			this.btn_dataList_show(1);
		},
		mounted() {this.startCountdown();},
		onBackPress(e){
		  uni.redirectTo({
			  url:"/pages/my/myorder/myorder",
		  })
		  return true;
		},
		methods: {
			btn_mima(){
				this.fff.orderno=this.dataList_forIndex;
				if(this.usersInfo.paypass !==''){
					this.$refs.pays.Show();
				}else{
					uni.navigateTo({url: "/pages/set_cash/pawPaySet"})
				}
			},
			btn_dataList_show(index) {
				this.dataList_forIndex = index;this.fff.orderno=this.dataList_forIndex;
			},
			getList(){this.dataList=[{name:'微信支付',img:'/static/imgs/b/wx.png'},{name:'积分支付',img:'/static/imgs/b/jf.png'},]},
			btn_ok(){
				
				this.conf.http('/api/orders/pay/balance',this.ffM,res => {
					if (res.data.error === '1') {
						uni.showToast({title: res.data.msg,icon: "none",duration: 1000})
						return;
					}
					uni.showToast({title: '支付成功',icon: 'none',duration: 1000});
						setTimeout(() => {uni.redirectTo({ url: '/pages/index/ok?orderno='+this.fff.orderno+'&price='+this.pg.price}); }, 1000)
				    }).catch((err) => {
							uni.showToast({
								title: '支付失败',
								icon: 'none'
							});					
					});
			},
			pays2Ok(){
				this.fff.orderno=this.dataList_forIndex;
				this.conf.http('/api/orders/pay/wechat',this.ffM2,res => {
					this.conf.wxPaying(res.data).then(resp=>{   
						uni.showToast({title: '支付成功',icon: 'none',duration: 1000});
						setTimeout(() => {uni.redirectTo({ url: '/pages/index/ok?orderno='+this.fff.orderno+'&price='+this.pg.price}); }, 1000)}).catch((err) => {
							uni.showToast({title: '支付失败',icon: 'none'});					
					});
				});
			},
			btnWxPay(){
				// this.conf.getToken(res => {
				// 	if(res.weixinopenid==''){
				// 		uni.showToast({title: "请先授权",icon: 'none'});
				// 		setTimeout(function() { 
				// 			uni.setStorageSync('ddurl','/pages/index/pay?orderno='+this.ffM2.orderno+'&price='+this.pg.price);
				// 			uni.navigateTo({ url: '/pages/login/loginwxxxc' });
				// 		}, 1000);
				// 	}else{
				// 		this.pays2Ok();
				// 	}
				// }, e => {});
				if(!this.isShouQuan){
					// var bdurl='/pages/index/pay?orderno='+this.ffM2.orderno+'&price='+this.pg.price;
					var bdurl='/pages/index/pay?ordernumber='+this.ffM2.orderno+'&price='+this.pg.price+'&jf='+this.pg.goodsintegral;
					uni.setStorageSync('ddurl',bdurl);
					uni.showToast({title: "请先授权",icon: 'none'});
					setTimeout(function() {
						uni.navigateTo({ url: '/pages/login/loginwxxxc' });
					}, 1000);
				}else{
					this.pays2Ok();
				}
				
			},
			startCountdown() { //倒计时
				let minutes = 30;
				let seconds = 0;
				const countdownInterval = setInterval(() => {
					if (seconds === 0) {
						if (minutes === 0) {
							clearInterval(countdownInterval);
							return;
						}
						minutes--;
						seconds = 59;
					} else {
						seconds--;
					}
					this.countdown =
						`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
				}, 1000);
			},
		},
	}
</script>

<style scoped lang="less">

</style>