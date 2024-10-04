<template>
	<view class="">
		<view class="p30">
			
			<view class="b1sys9 br14 p15 df aic " @click="btn_pay_show()">
				<image :src="conf.uaImgJUrl(bank.data[bank.index] ? bank.data[bank.index].bankicon : '')" mode="" class="w50 h50"></image>
				<view class="ml20">{{bank.data[bank.index] ? bank.data[bank.index].bankname : ''}}</view>
			</view>
			
			
			<view class="">
				<view class="b1sys5 br8 mt20 p15 bb1sys7 pb20" >
					<input v-model="ffm.bankofname" type="text" placeholder="姓名" class="csys0 fs28"/>
				</view>
				<view class="b1sys5 br8 mt20 p15 bb1sys7 pb20" >
					<input v-model="ffm.bankcardnum" type="text" placeholder="银行卡卡号" class="csys0 fs28"/>
				</view>
			</view>
			<view class="mt50">
				<view class="tac w500 h90 lh90 mt0auto bcsys2 cfff fs30 br14" @click="adradd()">确定</view>
			</view>
			
			
			
			
			<!-- 弹 -->
			<openAlert ref="btn_pay_show" :AlertClass="3" AlertPosition="center">
				<view class="pf b0 l0 wb100 hb50 bcfff brtl20 brtr20" >
					<view class="pa" style="top: 0.5rem;right: 0.5rem;" @click="btn_pay_show_close()">
						<image src="/static/image/404.png" mode="" class="w50 h50"></image>
					</view>
					<view class="pl30 pr30 hb70 mt30"  style="overflow: auto;">
						<view class="b1sys7 p30  " v-for="(item,index) in bank.data" :key="index" @click="btn_dataList_show(index)">
							<view class="df aic jcsb" v-if="index==bank.index">
								<view class="df aic">
									<image :src="conf.uaImgJUrl(item.bankicon)" mode="" class="w50 h50">
									<view class="ml12">{{item.bankname}}</view>
								</view>
								<view class="">
									<image src="/static/image/ok.png" mode="" class="w50 h50"></image>
								</view>
							</view>
							<view class="df aic jcsb" v-else>
								<view class="df aic">
									<image :src="conf.uaImgJUrl(item.bankicon)" mode="" class="w50 h50">
									<view class="ml12">{{item.bankname}}</view>
								</view>
								<view class="">
									<image src="/static/image/no.png" mode="" class="w50 h50"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</openAlert>
		</view>
	</view>
</template>

<script>
	import openAlert from '@/components/open-alert/open-alert.vue';
	import uniPopup from '@/components/uni-popup/uni-popup/uni-popup.vue';
	export default {
		components: {uniPopup,openAlert},
		data() {
			return {
				isClick:true,
				usersInfo:'',
				bank:{
					ffm:{page: 1,size: 99999,pages: 0,},
					index:0,
					data:[]
				},
				ffm:{
					bank:'',//银行
					bankofdeposit:'',//开户行
					bankofname:'',
					bankcardnum:'',
				},
			}
		},
		onLoad() {
			this.conf.getToken(res => {
				this.usersInfo = res;
			}, e => { if (!e) { this.usersInfo = ''; uni.navigateTo({url: "/pages/login/login",}); }  });
		},
		onShow() {
			this.getDataBank();
		},
		methods: {
			
			getDataBank(){
				this.conf.http('/api/bank/getList',this.bank.ffm, res => {
					this.bank.data=res.data.data;
				});
			},
			btn_dataList_show(index) {
				this.bank.index=index;
				this.$refs.btn_pay_show.Close();
			},
			adradd(){
				if(!this.isClick){return;}
				this.isClick=false;
				this.ffm.bank=this.bank.data[this.bank.index].bankname;
				this.conf.http('/api/bank/add',this.ffm, res => {
					this.conf.uaMsg(res.data.msg);
					if(res.data.error=='1'){ this.isClick=true; return;}
					this.conf.toBack();
				});
				
			},
			
			btn_pay_show(){this.$nextTick(function() {this.$refs.btn_pay_show.Show();});},
			btn_pay_show_close() {this.$nextTick(function() {this.$refs.btn_pay_show.Close();});},
		}
	}
</script>

<style scoped>

</style>