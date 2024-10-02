<template>
	<view>
		
		<view v-if="tys.darr.length>0">
			<scroll-view class="bcsys1" style="white-space: nowrap;" scroll-x="true" scroll-left="0">
				<view style="display: inline-block;" class="pt20 pb20 pl25 pr25 fs30" :class="(index+1)==tys.onid?' fwb csys bb1sys':''" v-for="(item,index) in tys.darr">{{item.title}}</view>
			</scroll-view>
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
				tys:{onid:'1',darr:[ {id:'1',title:'推荐'},{id:'2',title:'推荐'},{id:'3',title:'推荐'},{id:'4',title:'推荐'} ] },
			};
		},
		created() {
		    // this.b_getList();
		},
		methods: {
			
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
