<template>
	<view>
		<!-- 轮播图 -->
		<view class="pl30 pr30 pt30">
		  <view v-if="banner.fff.txt2!=''">
		        <swiper class="wb100 h300  oh" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500" >
		          <swiper-item v-for="(item, index) in banner.fff.txt2" :key="index">
		            <view class="wb100 h300 tac" >
		              <image class="wb100 h300" :src="conf.urlImg+item" mode="scaleToFill"></image>
		            </view>
		          </swiper-item>
		        </swiper>
		   </view>
		</view>
    
    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图
				banner:{
				        dataList:[],
				        fff:{
				          txt2:'',
				        },
				        ffM:{
				            page:'',
				            size:'',
				            tid:1,//   tid类别ID
				        }
				    },
			}
		},
		onShow() {
			
		},
		onLoad(e) {
		  this.getBanner()
		},
		methods: {
			//轮播图  /api/pub/banners/getlist
			getBanner(){
			    this.conf.http('/api/pub/banners/getlist',this.banner.ffM,res => {
			        this.banner.dataList=res.data.data;
		          // this.banner.fff.txt1=this.banner.dataList.map(item => item.img).join(',')
		          // this.banner.fff.txt2=this.banner.fff.txt1.split(',');
		          this.banner.fff.txt2=this.banner.dataList.map(item => item.img).join(',').split(',')
		          //http://192.168.31.165:60001/ivwzs/ldb/b1.jpg
		          // console.log(this.conf.urlImg+this.banner.fff.txt2[0]);
			    });
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>
