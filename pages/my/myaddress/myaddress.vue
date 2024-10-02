<template>
	<view class="pgcs">
		<!-- 固定定位 -->
		<view class="pf b0 bcfff vw100  z5">
			<view class="bcsys2 cfff tac w500 h80 lh80 mt0auto br99" @click="conf.toPathDt('/pages/my/myaddress/myaddressAdd')">添加收货地址</view>
		</view>
		<!-- 1 -->  
		<view v-if="dataList.length<1">
			<view class="tac pt100 cccc">暂无数据</view>
		</view>
		<view v-else class="p30 pb10" v-for="(item, index) in dataList" :key="index" >
			<view class="p30 bcfff br14">
				<view class="mb20">
					<view class="fs30 csys">
						<view>{{item.name}} {{item.phone}}</view>
						<view>{{item.city}}</view>
						<view>{{item.adress}}</view>
					</view>
				</view>
				<view class="df aic jcfe mt20">
					<!-- <view v-if="item.state=='1'" class="df aic" >
						<image src="/static/image/ok.png" mode="" class="w40 h40 mr12"></image>
						<view>默认地址</view>
					</view>
					<view v-else class="df aic" @click="btn_adrMoren(item)">
						<image src="/static/image/no.png" mode="" class="w40 h40 mr12"></image>
						<view>默认地址</view>
					</view> -->
					<view class="df aic" @click="btn_on(item)">
						<image src="/static/image/my/m5.png" mode="" class="w40 h40 mr12"></image>
						<view>编辑</view>
					</view>
					<view class="df aic" @click="btn_del_show(item)">
						<image src="/static/image/del.png" mode="" class="w40 h40 mr12"></image>
						<view>删除</view>
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="pb100"></view>
		
		<!-- 弹窗 -->
		<uni-popup ref="btn_del" type="center">
			<view class="bcfff w600 h350 br1 df jcsa pr br14" style="flex-direction: column;">
				<view class="tac fs35 fwb mt40">
					<view>您确定要删除吗？</view>
				</view>
				<view class="df aic jcc">
					<view @click="name_noShow()">
						<view class=" br60 w250 h70 br12 df jcsa aic " style="margin: 1rem auto;background-color: #E02E23;">
							<view class="tac cfff">取消</view>
						</view>
					</view>
					<view @click="btn_del()" class="ml20">
						<view class=" br60 w250 h70 br12 df jcsa aic " style="margin: 1rem auto;background-color: #E02E23;">
							<view class="tac cfff">确定</view>
						</view>
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
  import uniPopup from '@/components/uni-popup/uni-popup/uni-popup.vue';
	export default {
		components: {uniPopup,},
		data() {
			return {
				usersInfo:'',
				dataList:[{name:'name',phone:'123123123',city:'2131',adress:'1231'}],
				dataListMsg:'',
				dataList_forIndex: 0, //选中id
				ffM: {page: 1,size: 15,pages: 0,},
				ffmdel:{id:''},
				ids:'',
			}
		},
		onLoad(e) {
			if(e.ids!=undefined&&e.ids!=null&&e.ids!=''){
				this.ids=e.ids;
			}
		},
		onShow() {
			// this.conf.getToken(res => {
			// 	this.usersInfo = res;
				
			// 	this.dataList=[];
			// 	this.ffM={page: 1,size: 15,pages: 0,};
			// 	this.getList();
				
			// }, e => {
			// 	if (!e) {
			// 		this.usersInfo = '';
			// 		uni.navigateTo({url: "/pages/login/login",});
			// 	}
			// });
			// this.getArr();
		},
		onReachBottom() {
			if (this.ffM.page < this.ffM.pages) {
				this.ffM.page++;
				this.getList();
			}
		},
		methods: {
			// getArr(){
			// 	this.conf.http('/api/adr/getMr',{},res => {
			// 		this.dataArr=res.data.data;
			// 	});
			// },
			btn_dataList_show(index) {this.dataList_forIndex = index;},
			getList(){
				this.conf.http('/api/adr/get',this.ffm, res => {
					this.dataTotal=res.data.total
					let rList = res.data.data;
					if (rList < 1) {this.dataListMsg = '暂无更多数据';return;}
					rList.forEach(item => {this.dataList.push(item);});
					this.ffM.pages = res.data.pages;
				});
				
			},
			chooseCollector() {
				this.$refs.btn_del.close();
			},
			name_noShow() {
				this.$refs.btn_del.close();
			},
			btn_del_show(item){
				this.$refs.btn_del.open();
				this.ffmdel.id=item.id;
			},
			btn_del(){
				var _this=this;
				this.conf.http('/api/adr/delbyid',this.ffmdel, res => {
					this.$refs.btn_del.close();
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
			// btn_adrMoren(item){
			// 	this.conf.http('/api/adr/upState',{id:item.id}, res => {
			// 		this.conf.uaMsg(res.data.msg);
			// 		if(res.data.error=='1'){ return; }
			// 		var newArr=[];
			// 		this.dataList.map(function(mapli) { 
			// 			if(mapli.id==item.id){
			// 				mapli.state='1';
			// 			}else{
			// 				mapli.state='0';
			// 			}
			// 			newArr.push(mapli);
			// 		});
			// 		this.dataList=newArr;
			// 	});
			// },
			btn_on(item){
				if(this.ids=="true"){
					return;
				}else{
					uni.setStorageSync(this.conf.adrOn,item); //把选择的地址存本地
					this.conf.toBackK();	
				}
			}
		}
	}
</script>

<style scoped lang="scss">

</style>