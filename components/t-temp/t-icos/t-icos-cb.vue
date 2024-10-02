<template>
	<view>
		
		<view class="mt20 icosCS" v-if="icos.darr.length>0">
			<view class="p20">
				<view class="df fww">
					<view class="tac wb20 pb30" v-for="(item,index) in icos.darr" @click="icos_to(index)">
						<view><image class="w70 h70" :src="item.img"></image></view>
						<view class="fs24 c999">{{item.txt}}</view>
					</view>
				</view>
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
						{id:'1',img:'/static/imgs/type/kdy.png',txt:'看电影'},
						{id:'1',img:'/static/imgs/type/gj.png',txt:'逛街'},
						{id:'2',img:'/static/imgs/type/ms.png',txt:'美食'},
						{id:'3',img:'/static/imgs/type/jbs.png',txt:'密室剧本杀'},
						{id:'5',img:'/static/imgs/type/wangba.png',txt:'电竞网咖'},
						{id:'6',img:'/static/imgs/type/jb.png',txt:'静吧酒馆'},
						{id:'6',img:'/static/imgs/type/kge.png',txt:'量贩K歌'},
						{id:'6',img:'/static/imgs/type/yry.png',txt:'一日游(12h)'},
						{id:'6',img:'/static/imgs/type/chwl.png',txt:'吃喝玩乐'},
						{id:'6',img:'/static/imgs/type/nuanchang.png',txt:'暖场'},
						{id:'6',img:'/static/imgs/type/shangwu.png',txt:'商务谈判'},
						{id:'6',img:'/static/imgs/type/chayi.png',txt:'茶艺'},
						{id:'6',img:'/static/imgs/type/gaoerfu.png',txt:'高尔夫'},
						{id:'6',img:'/static/imgs/type/yujia.png',txt:'瑜伽'},
						{id:'6',img:'/static/imgs/type/qiu.png',txt:'球类'},
						{id:'6',img:'/static/imgs/type/yingyu.png',txt:'英语'},
						{id:'6',img:'/static/imgs/type/qilei.png',txt:'棋类'},
						{id:'6',img:'/static/imgs/type/meinv.png',txt:'超高颜值'},
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
	
</style>
