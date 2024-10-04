<template>
	<view class="pgcs">
		<!-- 固定定位 -->
		<view class="pf b0 bcfff vw100  z5">
			<view class="bcsys2 cfff tac w500 h80 lh80 mt0auto br99" @click="add()">添加银行卡</view>
		</view>
		<!-- 1 -->  
		<view v-if="dataList.length<1">
			<view class="tac pt100 cccc">暂无数据</view>
		</view>
		<view v-else class="p30 pb10" v-for="(item,index) in dataList" :key="index">
			<view class="p30 bcfff br14">
				<view class="df jcsb aic mb20">
					<view class="">
						<view class="df aic">
							<!-- <image src="/static/image/bank/gongshang.png" mode="" class="w70 h70"></image> -->
							<view class="fwb">{{item.bankofname}}</view>
							<view class="ml20">{{item.bank}}</view>
						</view>
						<view class="mt20">{{item.bankcardnum}}</view>
					</view>
					<view class="df aic jcfe" @click="btn_del_show(item.id)">
						<image src="/static/image/del.png" mode="" class="w50 h50"></image>
					</view>
				</view>
			</view>
		</view>
		
		<!--  -->
		<view class="pb100"></view>
		<!-- 弹窗 -->
		<uni-popup ref="name" type="center">
			<view class="bcfff w600 h300 br14 df jcsa pr" style="flex-direction: column;">
				<view class="tac fs35 fwb mt20">
					您确定要删除吗?
				</view>
				<view @click="btn_del()" class="ml10">
					<view class=" br60 w250 h70 br12 df jcsa aic " style="margin: 1rem auto;background-color: #E02E23;">
						<view class="tac cfff">确定</view>
					</view>
				</view>
				<view class="pa" style="top: 0.45rem;right: 0.45rem;" @click="name_noShow()">
					<image src="/static/image/404.png" mode="" class="w40 h40"></image>
				</view>
			</view>
		</uni-popup>
		<!-- 弹窗 -->
		<uni-popup ref="name2" type="center">
			<view class="bcfff w600 h300 br14 df jcsa pr" style="flex-direction: column;">
				<view class="tac fs35 fwb mt20">
					实名认证提示
				</view>
				<view class="tac fs30 mt20 pl30 pr30">
					<view>该账号未实名，为了您的资金安全，请按照要求完成实名认证后再进行操作!</view>
				</view>
				<view @click="chooseCollector" class="ml10">
					<view class=" br60 w250 h70 br12 df jcsa aic " style="margin: 1rem auto;background-color: #E02E23;">
						<view class="tac cfff">确定</view>
					</view>
				</view>
				<view class="pa" style="top: 0.45rem;right: 0.45rem;" @click="name_noShow2()">
					<image src="/static/image/404.png" mode="" class="w40 h40"></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup,
		},
		data() {
			return {
				usersInfo:'',
				dataList:[],
				dataListMsg:'',
				ffM: {page: 1,size: 15,pages: 0,},
				ffmdel:{id:''}
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.conf.getToken(res => {
				this.usersInfo = res;
				this.dataList=[];
				this.ffM={page: 1,size: 15,pages: 0,};
				this.getList();
				
			}, e => {
				if (!e) {
					this.usersInfo = '';
					uni.navigateTo({url: "/pages/login/login",});
				}
			});
		},
		onReachBottom() {
			if (this.ffM.page < this.ffM.pages) {
				this.ffM.page++;
				this.getList();
			}
		},
		methods: {
			add(){
				// if(this.usersInfo.isreal=='2'){//如果实名去这里
				// 	uni.navigateTo({url: "/pages/card/add",})
				// }else{// 否则去这里 去实名
				// 	this.$refs.name2.open();
				// }
				uni.navigateTo({url: "/pages/card/add",})
			},
			chooseCollector() {this.$refs.name2.close();uni.navigateTo({url: "/pages/myname/myname",})},
			name_noShow2() {this.$refs.name2.close();},
			// xiangqing(){uni.navigateTo({url: "/pages/card/xiangqing",})},
			// chooseCollector() {this.$refs.name.close();},
			name_noShow() {this.$refs.name.close();},
			getList(){
				this.conf.http('/api/bank/get',this.ffm, res => {
					this.dataTotal=res.data.total
					let rList = res.data.data;
					if (rList < 1) {this.dataListMsg = '暂无更多数据';return;}
					rList.forEach(item => {this.dataList.push(item);});
					this.ffM.pages = res.data.pages;
				});
			},
			
			btn_del_show(id){
				this.$refs.name.open();
				this.ffmdel.id=id;
			},
			btn_del(){
				var _this=this;
				this.conf.http('/api/bank/delbyid',this.ffmdel, res => {
					this.$refs.name.close();
					this.conf.uaMsg(res.data.msg);
					if(res.data.error=='1'){ return; }
					var newArr=[];
					this.dataList.map(function(mapli) { 
						if(mapli.id==_this.ffmdel.id){
							
						}else{
							newArr.push(mapli);
						}
					});
					this.dataList=newArr;
				});
			},
			
		}
	}
</script>

<style scoped lang="scss">

</style>