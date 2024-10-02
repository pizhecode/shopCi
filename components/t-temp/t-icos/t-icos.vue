<template>
	<view>
		
		<view class="mt20 icosCS bcfff" v-if="icos.darr.length>0">
			<view class="p20">
				<swiper class="wb100 ":class="icos.darr.length>10?'h390':'h160'" :disable-touch="icos.darr.length<=10" :indicator-dots="icos.darr.length>10" :indicator-color="'#888'" :indicator-active-color="'#000'">
					<swiper-item>
						<view class="df fww" :class="icos.darr.length<5?'jcsb':''">
							<view class="tac w143 pb15" v-for="(item,index) in icos.darr" v-if="index<10" @click="icos_to(index)">
								<view><image class="w100 h100" :src="item.img"></image></view>
								<view class="fs28 c666">{{item.txt}}</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="df fww">
							<view class="tac w143 pb15" v-for="(item,index) in icos.darr" v-if="index>9" @click="icos_to(index)">
								<view><image class="w100 h100" :src="item.img"></image></view>
								<view class="fs28 c666">{{item.txt}}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		  
	</view>
</template>

<script>
	export default {
		props: {
			AlertPosition: { type: String, default: 'center' },
		},
		data() {
			return {
				icos:{
					darr:[
						{id:'1',img:'/static/imgs/type/jiameng.png',txt:'设计需求'},
						{id:'2',img:'/static/imgs/type/zhaoshang.png',txt:'设计灵感'},
						{id:'3',img:'/static/imgs/type/xiangmu.png',txt:'找案例'},
						{id:'4',img:'/static/imgs/type/zhinan.png',txt:'企业介绍'},
					]
				},
			};
		},
		created() {
		    // this.b_getList();
		},
		methods: {
			icos_to(index){
				var dd=this.icos.darr[index].id;
				if(dd=='1'){  uni.navigateTo({url:'/pagesUsr/set/ly?t=2'});  }//我要加盟
				if(dd=='2'){  uni.navigateTo({url:'/pagesUsr/set/ly?t=3'});  }//我要招商
				if(dd=='3'){  this.toGoods();  }//找项目
				if(dd=='4'){  this.toDds();  }//加盟指南
			},
			toGoods(){ uni.navigateTo({url:'/pagesGoods/goods/list'}); },//案例
			toDds(){ uni.navigateTo({url:'/pages/dds/dds?et=jiamengzhinan'}); },
		}
	}
</script>

<style lang="less" scoped>
	.icosCS{
		//未选中的指示点样式，支持h5、app
		& /deep/ .uni-swiper-dot{width: 6rpx;height: 6rpx;background: #FFFFFF;border-radius: 50%;}
		//选中的指示点样式，支持h5、app
		& /deep/ .uni-swiper-dot-active{width: 20rpx;height: 6rpx;background: #24EA8C;border-radius: 0;}
		//未选中的指示点样式，支持微信小程序
		& /deep/ .wx-swiper-dot {width: 6rpx; height: 6rpx; background: #FFFFFF; border-radius: 50%;}
		//选中的指示点样式，支持微信小程序
		& /deep/ .wx-swiper-dot-active {width: 20rpx;height: 6rpx;background: #24EA8C;border-radius: 0;}
	}
</style>
