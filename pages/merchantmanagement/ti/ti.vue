<template>
	<view class="pgcs">
		<!-- 1 -->
		<view class="pt30 pl30 pr30" @click="btn_pay_show()">
			<view class="p30 bcfff br14">
				<view class="df aic jcsb fs25">
					<view>到账银行</view>
					<view class="tac">
						<view class="ml10">{{dataList[dataList_forIndex] ? dataList[dataList_forIndex].bank : ''}}</view>
						<view>{{dataList[dataList_forIndex] ? dataList[dataList_forIndex].bankcardnum : ''}}</view>
					</view>
					<image src="/static/image/you.png" mode="" class="w40 h40"></image>
				</view>
			</view>
		</view>
		<!-- 2 -->
		<view class="pt30 pl30 pr30">
			<view class="p30 bcfff br14">
				<view class="df aic">
					<view class="csys fs34">提现金额：￥</view>
					<input type="text"  v-model="ffM.jinEr" class="c999 ml5" maxlength="9" placeholder="输入提现金额"/>
				</view>
 			</view>
			<view class="fs25 c999 mt20 pl30">当前可提现余额 {{usersInfo.balance}}元</view>
		</view>
		<!-- 3 -->
		<view class="mt50">
			<view class="tac w500 h80 lh80 cfff bcsys2 mt0auto br99" @click="tixian(ffM.jinEr)">提现</view>
		</view>
		<!-- 弹 -->
		<openAlert ref="btn_pay_show" :AlertClass="3" AlertPosition="center">
			<view class="pf b0 l0 wb100 hb50 bcfff brtl20 brtr20" >
				<view class="pa" style="top: 0.5rem;right: 0.5rem;" @click="btn_pay_show_close()">
					<image src="/static/image/404.png" mode="" class="w50 h50"></image>
				</view>
				<view class="pl30 pr30 hb70 mt30"  style="overflow: auto;">
					<view class="b1sys7 p30  " v-for="(item, index) in dataList" :key="index" @click="btn_dataList_show(index)">
						<view class="df aic jcsb" v-if="index==dataList_forIndex">
							<view class="">
								<view class="df aic">
									<view class="ml12">{{item.bank}}</view>
								</view>
								<view class="c999 fs28 mt10">{{item.bankcardnum}}</view>
							</view>
							<view class="">
								<image src="/static/image/ok.png" mode="" class="w50 h50"></image>
							</view>
						</view>
						<view class="df aic jcsb" v-else>
							<view class="">
								<view class="df aic">
									<view class="ml12">{{item.bank}}</view>
								</view>
								<view class="c999 fs28 mt10">{{item.bankcardnum}}</view>
							</view>
							<view class="">
								<image src="/static/image/no.png" mode="" class="w50 h50"></image>
							</view>
						</view>
					</view>
					<!-- 购买按钮 -->
					<view class="pt24 pl30 pr30 bcfff pf b0 l0 r0 h100">
						<view class="bcsys2 cfff w500 h80 br40 tac lh80 mt0auto" @click="conf.toPathDt('/pages/merchantmanagement/ti/addCard')">添加新的银行</view>
					</view>
				</view>
			</view>
		</openAlert>
		<!-- 弹窗 -->
		<uni-popup ref="name" type="center">
			<view class="bcfff w600 h500 br14 df jcsa pr" style="flex-direction: column;">
				<view class="tac fs35 fwb mt20">
					<view>输入交易密码</view>
				</view>
				<view class="pl30 pr30 csys fs28">
					<view class="df aic jcsb">
						<view>提现</view>
						<view>￥{{ffM.jinEr}}</view>
					</view>
					<view class="df aic jcsb">
						<view>服务费</view>
						<view>￥{{fuwufei}}</view>
					</view>
					<view class="df aic jcsb">
						<view>费率(%)</view>
						<view>{{key_feilv}}</view>
					</view>
				</view>
				<view class="pl30 pr30">
					<view class="uni-form-item uni-column  br14" style="background-color:#F4F4F4 ;">
						<input v-model="ffM.jymm" class="uni-input fs35 pl20 h80 c999" type="password" placeholder="请输入密码" />
					</view>
				</view>
				<view @click="chooseCollector">
					<view class=" br60 w250 h70 br12 df jcsa aic " style="margin: 1rem auto;background-color: #E02E23;">
						<view class="tac cfff">确定</view>
					</view>
				</view>
				<view class="pa" style="top: 0.45rem;right: 0.45rem;" @click="name_noShow()">
					<image src="/static/image/404.png" mode="" class="w40 h40"></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import openAlert from '@/components/open-alert/open-alert.vue';
	import uniPopup from '@/components/uni-popup/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup,
			openAlert,
			
		},
		data() {
			return {
				ffM:{
					yhkId:'',//银行卡ID
					jinEr:'',//金额
					jymm:'',//交易密码
				},
				usersInfo: '',
				dataList:[],
				dataList_forIndex: 0, //选中id
				fuwufei:'',
				key_feilv:'',
			}
		},
		onLoad() {
			this.conf.http('/api/sysinit/getKeyByVal',{ key:'tixianshouxufei' },res => {   this.key_feilv = res.data.data.vval;   });
		},
		onShow() {
			this.conf.getToken(res => {
				this.usersInfo = res;
			}, e => {
				if (!e) {
					this.usersInfo = '';
				}
			});
			this.getList();
		},
		
		methods: {
			tixian(num){
				
				if(this.ffM.jinEr==''){
					uni.showToast({title: '请输入正确的提现金额！',icon: 'none',duration: 1000});
					return;
				}
				if(this.usersInfo.paypass==''){
					uni.showToast({title: '请先设置交易密码！',icon: 'none',duration: 500});
					setTimeout(function() {  uni.navigateTo({url:'/pages/sys/mm'})  }, 1200);
					return;
				}
				this.$refs.name.open();
				this.fuwufei=this.conf.Mul(this.ffM.jinEr,this.key_feilv);
			},
		
			btn_pay_show(){this.$nextTick(function() {this.$refs.btn_pay_show.Show();});},
			btn_pay_show_close() {this.$nextTick(function() {this.$refs.btn_pay_show.Close();});},
			chooseCollector() {
				this.ffM.yhkId=this.dataList[this.dataList_forIndex].id;
				this.conf.http('/api/usr/tixianshenqing',this.ffM, res => {
					if (res.data.error === '1') {
						uni.showToast({title: res.data.msg,icon: "none",duration: 1000})
						return;
					}
					uni.showToast({title: '提现成功',icon: 'none',duration: 1000});
					setTimeout(() => {this.$refs.name.close()}, 1000);
					uni.navigateTo({url: "/pages/my/wallet",});
				});
			},
			name_noShow() {this.$refs.name.close();},
			btn_dataList_show(index) {
				this.dataList_forIndex = index;
				this.$refs.btn_pay_show.Close();
			},
			getList(){
				this.conf.http('/api/bank/get',{page:1,size:99999}, res => {
					this.dataList=[];
					this.dataList_forIndex=0; //选中id
					let rList = res.data.data;
					if (rList < 1) {return;}
					rList.forEach(item => {this.dataList.push(item);});
				});
			},
			
			
			// getList(){
			// 	this.dataList=[
			// 		{name:'工商银行',card:'6123456799789654'},
			// 		{name:'中国银行',card:'6123456799789654'},
			// 		{name:'农业银行',card:'6123456799789654'},
			// 		{name:'交通银行',card:'6123456799789654'},
			// 	]
			// }
		}
	}
</script>

<style scoped lang="scss">

</style>