<template>
	<view>
		
		<view class="pt10 bcfff mt20">
			<uni-notice-bar showIcon="true" background-color="#ffffff" color="#000000" scrollable :text="gg.txt" @click="toGg()" />
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
				gg:{ ffm:{page:1,size:10}, darr:[],txt:'gg', },
			};
		},
		created() {
		    // this.gg_getList();
		},
		methods: {
			// gg_getList() {//公告
			// 	this.conf.http('/api/pub/gg/getlist', this.gg.ffm, res => {
			// 		var rList=res.data.data;
			// 		if(rList.length<this.gg.ffm.size){ if(this.gg.ffm.page>0){this.gg.ffm.page--;} }
			// 		rList.forEach(item => {
			// 			if(!(this.gg.darr.find(ite=>item.id==ite.id)!==undefined)){
			// 				this.gg.darr.push(item);
			// 				this.gg.txt+=item.title+'   ';
			// 			}
			// 		});
			// 	})
			// },
			toGg(){ uni.navigateTo({url:'/pagesUsr/set/gg'}); },//公告
		}
	}
</script>

<style lang="less" scoped>
	/* #ifdef MP-WEIXIN || APP-PLUS */
		/deep/ ::-webkit-scrollbar {display: none;-webkit-appearance: none;background: transparent;color: transparent; }
	/* #endif */
	/* #ifdef H5 */
		/deep/ .uni-scroll-view::-webkit-scrollbar {display: none;-webkit-appearance: none;background: transparent;color: transparent;}
	/* #endif */
</style>
