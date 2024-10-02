<template>
	<view>
		
		<view class="mt10" v-if="bans.darr.length>0">
			<swiper class="bcrd7 wb100 h400" circular autoplay="true" interval="5000" duration="500" indicator-dots="true" :indicator-color="'#333'" :indicator-active-color="'red'">
				<swiper-item v-for="(item,index) in bans.darr">
					<image class="wb100 hb100" :src="item.img" mode="scaleToFill"></image>
					<!-- <image class="wb100 hb100" :src="conf.uaImgJUrl(item.img)" mode="scaleToFill"></image> -->
				</swiper-item>
			</swiper>
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
				bans:{
					ffm:{page:1,size:10,tid:'1'},
					darr:[
						{id:'1',img:'/static/imgs/lo/b1.png'},
					]
				},
			};
		},
		created() {
		    // this.banners_getList();
		},
		methods: {
			banners_getList() {
				this.conf.http('/api/pub/banners/getlist', this.bans.ffm, res => {
					var rList=res.data.data;
					if(rList.length<this.bans.ffm.size){ if(this.bans.ffm.page>0){this.bans.ffm.page--;} }
					rList.forEach(item => {
						if(!(this.bans.darr.find(ite=>item.id==ite.id)!==undefined)){
							this.bans.darr.push(item);
						}
					});
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	
</style>
